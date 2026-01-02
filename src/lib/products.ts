import { featuredProducts } from "@/data/products";
import { Product } from "@/types/product";

export function getProductsByCategory(
  category?: string
): Product[] {
  if (!category) return featuredProducts;

  return featuredProducts.filter(
    (product) => product.category === category
  );
}