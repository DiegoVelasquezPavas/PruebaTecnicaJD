import HttpClient from "../services/HttpClient";
import { adaptedVivienda } from "../adapters";

export const getViviendas = () => {
  return new Promise((resolve, reject) => {
    HttpClient.get("/viviendas")
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getViviendaById = (request) => {
  return new Promise((resolve, reject) => {
    HttpClient.get(`/viviendas/Id=${request.Id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const CreateVivienda = (vivienda) => {
  return new Promise((resolve, reject) => {
    HttpClient.post("/viviendas", vivienda)
      .then((response) => {
        const formattedVivienda = adaptedVivienda(response.data);
        resolve({ ok: true, ...formattedVivienda });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateViviendaById = (vivienda) => {
  return new Promise((resolve, reject) => {
    HttpClient.put(`/viviendas/Id=${request.Id}`, vivienda)
      .then((response) => {
        const formattedVivienda = adaptedVivienda(response.data);
        resolve({ ok: true, ...formattedVivienda });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const deleteViviendaById = (request) => {
  return new Promise((resolve, reject) => {
    HttpClient.delete(`/viviendas/Id=${request.Id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
