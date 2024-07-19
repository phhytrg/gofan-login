import { http, HttpResponse } from 'msw';
import { ACCOUNTS_API } from '../../endpoints';
import { faker } from '@faker-js/faker';

export const handlers = [
  http.get(ACCOUNTS_API, () => {
    return HttpResponse.json([
      {
        id: faker.string.uuid(),
        avatar: faker.image.avatarGitHub(),
        department: faker.commerce.department(),
        location: `${faker.location.state()}, ${faker.location.zipCode()}`,
        shortname: faker.company.name(),
        numberOfContacts: faker.datatype.number({ min: 1, max: 20 }),
        active: faker.datatype.boolean(),
      },
    ]);
  }),
];
