import { Router } from "express";
import {
  getAllproductos,
  getProductoById,
  createProducto,
  updateProductoById,
  deleteProductoById,
} from "../controllers/productosControllers";

const router = Router();

router.get("/productos", getAllproductos);
router.get("/productos/:id", getProductoById);
router.post("/productos", createProducto);
router.put("/productos/:id", updateProductoById);
router.delete("/productos/:id", deleteProductoById);

export default router;
