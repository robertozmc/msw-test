import { HttpResponse, http } from 'msw';

import { API_URL } from '.';

export const handlers = [
  http.get(`${API_URL}/accounts`, () => HttpResponse.json([{accountNumber: 1}])),
  http.post(`${API_URL}/accounts`, ({ params }) => {
    return HttpResponse.json({
      accountNumber: params.account_number,
    });
  }),
];
