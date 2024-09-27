import React, { useEffect } from "react";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import useForm from "../utils/hooks/useForm";
import { useSnackbar } from "notistack";

const opcionesTipoProveedor = [
  { label: "Samsung", value: "sansung " },
  { label: "Epson", value: "Epson" },
  { label: "Logitech", value: "Logitech" },
  { label: "DxRacer", value: "DXRacer" },
  { label: "Seagate", value: "Seagete" },
  { label: "ASUS", value: "ASUS" },
  { label: "BenQ", value: "BenQ" },
  { label: "Sonny", value: "Sonny" },
];

const ProductoModel = {
  Id: null,
  nombre: "",
  descripcion: "",
  Direccion: "",
  Precio: 0,
  cantidad: 0,
  proveedores: "",
};

const Formulario = ({
  createData,
  updateData,
  DataEdit,
  setDataEdit,
  enqueueSnackbar,
}) => {
  const { handleChange, formState, setFormState } = useForm(ProductoModel);

  useEffect(() => {
    if (DataEdit) {
      setFormState(DataEdit);
    } else {
      setFormState(ProductoModel);
    }
  }, [DataEdit]);

  const onResetForm = () => {
    setFormState(ProductoModel);
    setDataEdit(null);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (
      !formState.nombre ||
      !formState.descripcion ||
      !formState.Direccion ||
      !formState.Precio ||
      !formState.cantidad ||
      !formState.proveedores
    ) {
      enqueueSnackbar("Faltan datos por llenar", {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });

      return;
    }

    if (formState.Id === null) {
      createData(formState);
    } else {
      updateData(formState);
    }

    onResetForm();
    setDataEdit(null);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">
        {!DataEdit ? "Crear nueva Product" : "Editar Producto"}
      </h2>

      <form onSubmit={onSubmitForm}>
        <Select
          label="Proveedor"
          multiple
          className="mb-4"
          isRequired
          name="Proveedor"
          value={formState.proveedores}
          onChange={handleChange}>
          {opcionesTipoProveedor.map((tipo) => (
            <SelectItem key={tipo.value} value={tipo.value}>
              {tipo.label}
            </SelectItem>
          ))}
        </Select>
        <Input
          label="Dirección"
          className="mb-4"
          name="Direccion"
          value={formState.Direccion}
          onChange={handleChange}
          isRequired
        />
        <Input
          label="Cantidad"
          type="number"
          className="mb-4"
          name="cantidad"
          value={formState.cantidad}
          onChange={handleChange}
          isRequired
        />
        <Input
          label="Precio"
          type="number"
          className="mb-4"
          name="Precio"
          value={formState.Precio}
          onChange={handleChange}
          isRequired
        />
        <Textarea
          label="Descripcion"
          className="mb-4"
          name="descripcion"
          value={formState.descripcion}
          onChange={handleChange}
        />
        <Textarea
          label="Nombre"
          className="mb-4"
          name="nombre"
          value={formState.nombre}
          onChange={handleChange}
        />

        <div className="flex justify-center mt-4">
          <Button color="primary" type="submit" className="mr-2">
            {!DataEdit ? "Registrar" : "Editar"}
          </Button>
          <Button color="warning" onClick={onResetForm}>
            Limpiar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
