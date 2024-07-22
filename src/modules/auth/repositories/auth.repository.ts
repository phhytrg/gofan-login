import { LOGIN_API } from '../endpoints';
import axiosInstance from '../../../axios-config';
import { AxiosResponse } from 'axios';

export const authRepo = {
  login: async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<
    AxiosResponse<{
      accessToken: string;
      refreshToken: string;
    }>
  > => {
    return await axiosInstance.post(LOGIN_API, { email, password });
  },
};
