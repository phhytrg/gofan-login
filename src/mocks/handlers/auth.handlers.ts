import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('http://api.gofan.com/v1/auth/login', () => {
    return HttpResponse.json(
      {
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.ourRoseWRk8Xy83MP3KsdAcEGXWMzGPTCVGqcO3baa8',
        refreshToken: 'abc',
      },
    );
  }),
];
