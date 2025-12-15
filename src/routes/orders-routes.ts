import { Router } from "express"

import { OrdersController } from "../controllers/orders-controller"

const orderRouter = Router()
const ordersController = new OrdersController()

orderRouter.post("/", ordersController.create)
orderRouter.get("/table-session/:id", ordersController.index)

export { orderRouter }
