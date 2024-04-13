"use server";
import db from "@/lib/db";

export async function getMoreProducts(page: number) {
  const products = await db.product.findMany({
    select: {
      title: true,
      price: true,
      created_at: true,
      photo: true,
      id: true,
    },
    take: 1,
    skip: 1,
    orderBy: {
      created_at: "desc",
    },
  });
  return products;
}
