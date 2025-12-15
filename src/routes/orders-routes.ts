import { Router } from "express"

import { OrdersController } from "../controllers/orders-controller"

const orderRouter = Router()
const ordersController = new OrdersController()

orderRouter.post("/", ordersController.create)

export { orderRouter }
