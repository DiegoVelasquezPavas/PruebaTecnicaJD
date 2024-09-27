export const adaptedVivienda = (response) => {
  const formattedVivienda = {
    Id: response.Id,
    TipoDeVivienda: response.TipoDeVivienda,
    Zona: response.Zona,
    Direccion: response.Direccion,
    Precio: response.Precio,
    Tamano: response.Tamano,
    Observaciones: response.Observaciones,
  };
  return formattedVivienda;
};
