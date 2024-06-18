import { describe, expect, it } from "vitest";
import { API_URL, server } from "./server";
import { HttpResponse, http } from "msw";

describe('msw', () => {
  it('gets the proper response structure', async () => {
    // Given
    await fetch(`${API_URL}/accounts`);
    await fetch(`${API_URL}/accounts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        account_number: '1',
      },
    });
    server.use(
      http.get(`${API_URL}/accounts`, () => HttpResponse.json([{
        accountNumber: '1',
      }])),
    );

    // When
    const response = await fetch(`${API_URL}/accounts`);

    // Then
    expect(await response.json()).toContain({ accountNumber: '1' });
  });
});
