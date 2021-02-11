import request from 'supertest';
import app from './index';

describe('UserController Integration Test', () => {
  it('should expose a GET /user Endpoint', async () => {
    const response = await request('localhost:3030').get('/user');

    expect(response.status).toBe(200);
    expect(response.text).toBe('FETCH /user');
  });

  it('should expose a POST /user Endpoint', async () => {
    const response = await request('localhost:3030').post('/user');

    expect(response.status).toBe(200);
    expect(response.text).toBe('CREATE /user');
  });

  it('should expose a PUT /user Endpoint', async () => {
    const response = await request('localhost:3030').put('/user');

    expect(response.status).toBe(200);
    expect(response.text).toBe('UPDATE /user');
  });

  it('should expose a DELETE /user Endpoint', async () => {
    const response = await request('localhost:3030').delete('/user');

    expect(response.status).toBe(200);
    expect(response.text).toBe('DELETE /user');
  });

  afterAll(() => {
    app.close();
  });
});
