import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();
  if (method === "GET") {
    try {
      const order = await Order.find(id);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {
    try {
      const order = await Order.create(req.body);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "DELETE") {
    try {
      const order = await Order.create(req.body);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
