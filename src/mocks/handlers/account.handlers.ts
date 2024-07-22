import { delay, http, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker';

export const handlers = [
  http.get('http://api.gofan.com/v1/accounts', async () => {
    const departments = Array.from(
      { length: Math.floor(Math.random() * 4) },
      () => faker.commerce.department(),
    );

    const createMockAccount = () => ({
      id: faker.string.uuid(),
      avatar: faker.image.avatarGitHub(),
      department: departments[Math.floor(Math.random() * departments.length)],
      location: `${faker.location.state()}, ${faker.location.zipCode()}`,
      shortname: faker.company.name(),
      numberOfContacts: faker.number.int({ max: 20, min: 1 }),
      active: faker.datatype.boolean(),
    });

    await delay(3000);

    return HttpResponse.json(
      Array.from({ length: Math.floor(Math.random() * 10) }, createMockAccount),
    );
  }),
];
