import axios from 'axios';

const BASE_URL = 'https://api.escuelajs.co/api/v1/users';

export const getUsers = async () => {
  return axios.get(BASE_URL);
};

export const createUser = async (user) => {
  return axios.post(BASE_URL, user);
};

export const updateUser = async (id, user) => {
  return axios.put(`${BASE_URL}/${id}`, user);
};

export const deleteUser = async (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
