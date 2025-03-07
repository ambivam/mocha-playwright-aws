import chai from 'chai';
import apiClient from '../../services/apiClient.js';

const expect = chai.expect;

describe('User API Tests', function () {
  let createdUserId;

  it('should fetch user list', async () => {
    const response = await apiClient.get('/users?page=2');
    expect(response.status).to.equal(200);
    expect(response.data.data).to.be.an('array');
  });

  it('should create a new user', async () => {
    const newUser = {
      name: "John Doe",
      job: "Software Engineer"
    };

    const response = await apiClient.post('/users', newUser);
    expect(response.status).to.equal(201);
    expect(response.data.name).to.equal(newUser.name);
    expect(response.data.job).to.equal(newUser.job);

    createdUserId = response.data.id; // Store user ID for update and delete
  });

  it('should update an existing user', async () => {
    const updatedUser = {
      name: "John Updated",
      job: "Senior Software Engineer"
    };

    const response = await apiClient.put(`/users/${createdUserId}`, updatedUser);
    expect(response.status).to.equal(200);
    expect(response.data.name).to.equal(updatedUser.name);
    expect(response.data.job).to.equal(updatedUser.job);
  });

  it('should delete an existing user', async () => {
    const response = await apiClient.delete(`/users/${createdUserId}`);
    expect(response.status).to.equal(204);
  });
});