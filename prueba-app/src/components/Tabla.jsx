import React, { useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const Tabla = ({ columns, data, setDataEdit, deleteData }) => {
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4">Datos</h2>

      <Table aria-label="Tabla de datos" className="w-full">
        <TableHeader>
          {columns.map((column) => (
            <TableColumn
              key={column.key}
              className={column.key === "Id" ? "hidden lg:table-cell" : ""}
              style={{ display: column.key === "Id" ? "none" : "" }}
            >
              {column.label}
            </TableColumn>
          ))}
          <TableColumn>Acciones</TableColumn>
        </TableHeader>

        {!data || data.length === 0 ? (
          <TableBody emptyContent={"No hay filas para mostrar."}>
            {[]}
          </TableBody>
        ) : (
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    style={{ display: column.key === "Id" ? "none" : "" }}
                  >
                    {item[column.key]}
                  </TableCell>
                ))}
                <TableCell>
                  <a
                    onClick={() => setDataEdit(item)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                  >
                    Editar
                  </a>
                  <a
                    onClick={() => deleteData(item.Id)}
                    className="ml-2 font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                  >
                    Eliminar
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </div>
  );
};

export default Tabla;
