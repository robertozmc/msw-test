import { afterAll, afterEach, beforeAll } from 'vitest';

import { server } from './server';

beforeAll(() => {
  server.listen();
});

afterAll(() => server.close());

afterEach(() => {
  server.resetHandlers();
});
