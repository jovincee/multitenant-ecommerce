import { Product } from "@/types/product"
import { featuredProducts } from "@/data/products"

export function getProductsByCategory(category: string): Product[] {
  return featuredProducts.filter(
    product => product.category === category
  )
}