import { LOGIN_API } from '../endpoints';
import axiosInstance from './axios-config';

export const authRepo = {
  login: async ({ email, password }: { email: string; password: string }) => {
    return await axiosInstance.post(LOGIN_API, { email, password });
  },
};
