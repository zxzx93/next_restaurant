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
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {
    console.log(id, req.body);
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
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
