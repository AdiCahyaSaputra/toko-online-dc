import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const getProducts = await fetch("https://toko-online-dc.herokuapp.com/api/v1/products");
  const products = await getProducts.json();

  res.status(200).json({ products });
}
