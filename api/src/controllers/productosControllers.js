import {
  getConnection,
  closeConnection,
  sql,
  queries,
} from "../database/connection";

export const getAllproductos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request.query(queries.getAllproductos);
    res.json(result.recordset);
  } catch (error) {
    console.log("Error al obtener la lista de productos: ", error.message);
    res.status(500);
    res.send(error.message);
  } finally {
    closeConnection();
  }
};

export const getProductoById = async (req, res) => {
  const { Id } = req.params;

  try {
    const pool = await getConnection();
    const result = await pool.request
      .input("Id", Id)
      .query(queries.getProductoById);

    res.send(result.recordset[0]);
  } catch (error) {
    console.log("Error al obtener la lista de viviendas: ", error.message);
    res.status(500);
    res.send(error.message);
  } finally {
    closeConnection();
  }
};

export const createProducto = async (req, res) => {
  const { nombre, descripcion, cantidad, Direccion, proveedores } = req.body;

  if (
    nombre == null ||
    descripcion == null ||
    Direccion == null ||
    Precio == null ||
    cantidad == null ||
    proveedores == null
  ) {
    return res.status(400).json({ msg: "Por favor llena el formulario" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("descripcion", sql.VarChar, descripcion)
      .input("direccion", sql.VarChar, Direccion)
      .input("Precio", sql.Money, Precio)
      .input("cantidad", sql.VarChar, cantidad)
      .input("proveedores", sql.VarChar, proveedores)
      .input(
        "Observaciones",
        sql.VarChar,
        Observaciones ? Observaciones : "Sin observaciones"
      )
      .query(queries.addNewProducto);

    console.log(result);

    res.sendStatus(204);
  } catch (error) {
    console.log("Error al crear el producto: ", error.message);
    res.status(500);
    res.send(error.message);
  } finally {
    closeConnection();
  }
};

export const updateProductoById = async (req, res) => {
  const { Id } = req.params;
  const {
    nombre,
    descripcion,
    cantidad,
    direccion,
    proveedores,
    Observaciones,
  } = req.body;
  if (
    nombre == null ||
    descripcion == null ||
    Direccion == null ||
    Precio == null ||
    cantidad == null ||
    proveedores == null
  ) {
    return res
      .status(400)
      .json({ msg: "Por favor llena los campos correspondientes" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("descripcion", sql.VarChar, descripcion)
      .input("cantidad", sql.VarChar, cantidad)
      .input("direccion", sql.Money, direccion)
      .input("proveedores", sql.Float, proveedores)
      .input(
        "Observaciones",
        sql.VarChar,
        Observaciones ? Observaciones : "Sin observaciones"
      )
      .input("Id", sql.UniqueIdentifier, Id)
      .query(queries.updateProducto);

    console.log(result);

    res.sendStatus(200);
    res.send("Se actualizo con exito el producto ");
  } catch (error) {
    console.log("Error al actualizar el producto : ", error.message);
    res.status(500);
    res.send(error.message);
  } finally {
    closeConnection();
  }
};

export const deleteProductoById = async (req, res) => {
  const { Id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool.request
      .input("Id", Id)
      .query(queries.deleteProductoById);

    res.sendStatus(204);
  } catch (error) {
    console.log("Error al eliminar el producto: ", error.message);
    res.status(500);
    res.send(error.message);
  } finally {
    closeConnection();
  }
};
