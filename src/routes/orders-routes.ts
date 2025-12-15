import { Router } from "express"

import { OrdersController } from "../controllers/orders-controller"

const orderRouter = Router()
const ordersController = new OrdersController()

orderRouter.post("/", ordersController.create)
orderRouter.get("/table-session/:table_session_id", ordersController.index)
orderRouter.get("/table-session/:table_session_id/total", ordersController.show)

export { orderRouter }
