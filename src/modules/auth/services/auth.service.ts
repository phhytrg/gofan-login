import { JwtPayload } from '../models/jwt-payload';
import { authRepo } from '../repositories';

export const authService = {
  login: async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<{
    user: JwtPayload;
    accessToken: string;
    refreshToken: string;
  }> => {
    const data = (await authRepo.login({ email, password })).data;

    const base64Url = data.accessToken.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );
    return {
      user: JSON.parse(jsonPayload),
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    };
  },
};
