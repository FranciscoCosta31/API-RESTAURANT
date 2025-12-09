import { Router } from "express"

import { productsRoutes } from "./products-routes"

import { tablesRoutes } from "./tables-routes"

const router = Router()

router.use("/products", productsRoutes)
router.use("/tables", tablesRoutes)

export { router }
