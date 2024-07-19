import { handlers as authHandlers } from './auth.handlers';
import { handlers as accountHandlers } from './account.handlers';

export const handlers = [...authHandlers, ...accountHandlers];
