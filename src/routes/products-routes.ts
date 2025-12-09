import { Router } from "express"
import { ProductsController } from "../controllers/products-controller" // Importe a CLASSE

const productsRoutes = Router()

const productsController = new ProductsController()

productsRoutes.get("/", productsController.index)
productsRoutes.post("/", productsController.create)
productsRoutes.put("/:id", productsController.update)
productsRoutes.delete("/:id", productsController.remove)

export { productsRoutes }
