import { handlers as authHandlers } from './auth.handlers';
import { handlers as accountHandlers } from './account.handlers';
import { handlers as userHandlers } from './user.handlers';

export const handlers = [...authHandlers, ...accountHandlers, ...userHandlers];
