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

export const updateProduct = (id, data) => {
  return apiClient.put(`/products/${id}`, data);
};

export const daleteProduct = (id) => {
  return apiClient.del(`/products/${id}`);
};