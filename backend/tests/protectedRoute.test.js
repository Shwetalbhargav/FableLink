// /backend/tests/protectedRoute.test.js

const request = require('supertest');
const app = require('../server');
const User = require('../models/User');
const mongoose = require('mongoose');

afterEach(async () => {
  await User.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Protected Route Access', () => {
  it('should not allow access to a protected route without token', async () => {
    const res = await request(app).get('/api/users/profile');
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('message', 'Not authorized, no token');
  });
});
