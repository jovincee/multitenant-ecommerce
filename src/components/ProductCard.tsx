// src/components/storefront/ProductCard.tsx
import Link from "next/link"
import Image from "next/image"
import { Product } from "@/types/product"

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <article className="product-card">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
      />

      <h3>{product.name}</h3>

      <p className="price">${product.price.toFixed(2)}</p>

      <p
        className={`stock ${product.inStock ? "in" : "out"}`}
        aria-label={product.inStock ? "In stock" : "Out of stock"}
      >
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>

      <Link
        href={`/products/${product.slug}`}
        className="secondary-button"
      >
        View Details
      </Link>
    </article>
  )
}