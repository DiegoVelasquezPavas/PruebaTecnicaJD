export const queries = {
  getAllProductos: "SELECT * FROM Productos",

  getProductoById: "SELECT * FROM Productos WHERE Id = @Id",

  addNewProducto:
    "INSERT INTO Productos (nombre, descripcion, Direccion, Precio, cantidad, proveedores) VALUES (@nombre, @descripcion, @Direccion, @Precio, @cantidad, @proveedores)",

  updateProducto:
    "UPDATE Productos SET nombre = @nombre, descripcion = @descripcion, Direccion = @Direccion, Precio = @Precio, cantidad = @cantidad, proveedores = @proveedores WHERE Id = @Id",

  deleteProducto: "DELETE FROM Productos WHERE Id = @Id",
};
