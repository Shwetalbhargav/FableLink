// /backend/tests/user.test.js

const request = require('supertest');
const app = require('../server');
const User = require('../models/User');
const mongoose = require('mongoose');

// Clear the test database after each test
afterEach(async () => {
  await User.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('User Registration and Login', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
      });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('username', 'testuser');
  });

  it('should login the registered user', async () => {
    // First register the user
    await request(app)
      .post('/api/users/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
      });

    // Then login
    const res = await request(app)
      .post('/api/users/login')
      .send({
        email: 'test@example.com',
        password: 'password123',
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should not allow registration with existing email', async () => {
    // Register the user
    await request(app)
      .post('/api/users/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
      });

    // Try to register again with the same email
    const res = await request(app)
      .post('/api/users/register')
      .send({
        username: 'testuser2',
        email: 'test@example.com',
        password: 'password456',
      });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message', 'User already exists');
  });
});
