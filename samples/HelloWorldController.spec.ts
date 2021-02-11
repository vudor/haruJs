import request from 'supertest';
import app from './index';

describe('HelloWorldController Integration Test', () => {
  it('should expose a GET /hello/world Endpoint', async () => {
    const response = await request('localhost:3030').get('/hello/world');

    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });

  afterAll(() => {
    app.close();
  });
});
