import { Router } from "express"

import { tablesSessionsRoutes } from "./tables-sessions-routes"
import { productsRoutes } from "./products-routes"
import { tablesRoutes } from "./tables-routes"
import { orderRouter } from "./orders-routes"

const router = Router()

router.use("/tables-sessions", tablesSessionsRoutes)
router.use("/products", productsRoutes)
router.use("/tables", tablesRoutes)
router.use("/orders", orderRouter)

export { router }
