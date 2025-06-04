import { URLS } from '@Utils/constants';

const get = async (endpoint) => {
  const res = await fetch(`${URLS.BASE_URL}${endpoint}`);
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.msg || 'Error desconocido');
  }
  return res.json();
};

const post = async (endpoint, data) => {
  const res = await fetch(`${URLS.BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const json = await res.json();
  if (!res.ok) throw new Error(json.msg || 'Error en POST');
  return json;
};

const put = async (endpoint, data) => {
  const res = await fetch(`${URLS.BASE_URL}${endpoint}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const json = await res.json();
  if (!res.ok) throw new Error(json.msg || 'Error en PUT');
  return json;
};

const del = async (endpoint) => {
  const res = await fetch(`${URLS.BASE_URL}${endpoint}`, {
    method: 'DELETE',
  });

  const json = await res.json();
  if (!res.ok) throw new Error(json.msg || 'Error en DELETE');
  return json;
};

export default { get, post, put, del };
