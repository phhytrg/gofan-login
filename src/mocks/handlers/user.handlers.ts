import { faker } from '@faker-js/faker';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://api.gofan.com/v1/users/me', () => {
    return HttpResponse.json({
      id: faker.string.uuid(),
      name: 'John Doe',
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    });
  }),
];
