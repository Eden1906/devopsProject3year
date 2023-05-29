/* global describe, test, expect */

const request = require('supertest');
const app = require('../server');

describe('test suite 1:', () => {
  test('test 1', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});

describe('POST/register', () => {
  test('should return 200 when form is submitted', async () => {
    const res = await request(app)
      .post('/register')
      .send({
        name: 'test',
        grade1: '100',
        grade2: '90',
        grade3: '80',
      });
    expect(res.statusCode).toEqual(200);
  });
});
