import { setupServer } from 'msw/node';
import { handlers } from './serverHandlers';

export const API_URL = 'https://api.example.com';
export const server = setupServer(...handlers);

server.events.on('response:mocked', async ({ request, response }) => {
  const responseData = await response.clone().json();
  console.log(request.method, request.url, responseData);
});
