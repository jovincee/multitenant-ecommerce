import { featuredProducts } from "@/data/products"
import { notFound } from "next/navigation"


interface Props {
  params: Promise<{ slug: string }>;
}


/**
 * This is the page for mobile
 * @param param0 
 * @returns 
 */
export default async function ProductPage({ params }:Props) {
    const { slug } = await params;

  const product = featuredProducts.find(
    (p) => p.slug === slug
  )

  if (!product) notFound()

  return (
    <main className="product-page">
      <h1>{product.name}</h1>
      <p>${product.price.toFixed(2)}</p>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>

      {/* reuse same UI logic as modal */}
    </main>
  )
}