import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();
  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {new:true});
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("피자가 삭제 되었습니다.");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
