import apiClient from '@Api/apiClient';

export const getProductById = (id) => {
  return apiClient.get(`/products/${id}`);
};

export const getAllProducts = () => {
  return apiClient.get(`/products`);
};

export const createProduct = (data) => {
  return apiClient.post('/products', data);
};

export const updateProduct = (data) => {
  return apiClient.put('/products', data);
};

export const daleteProduct = (data) => {
  return apiClient.del('/products', data);
};