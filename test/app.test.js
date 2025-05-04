const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with Hello from Jenkins CI/CD demo!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello from Jenkins CI/CD demo!');
  });
});
