import { http, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker';

export const handlers = [
  http.get('http://api.gofan.com/v1/accounts', () => {
    const createMockAccount = () => ({
      id: faker.string.uuid(),
      avatar: faker.image.avatarGitHub(),
      department: faker.commerce.department(),
      location: `${faker.location.state()}, ${faker.location.zipCode()}`,
      shortname: faker.company.name(),
      numberOfContacts: faker.datatype.number({ min: 1, max: 20 }),
      active: faker.datatype.boolean(),
    });
    
    return HttpResponse.json(
      Array.from({ length: Math.floor(Math.random() * 10) }, createMockAccount),
    );
  }),
];
