"use client"

// src/components/storefront/ProductCard.tsx
import Image from "next/image"
import { Product } from "@/types/product"
import useModalStore from "@/app/stores/useModalStore"
import { useIsMobile } from "@/hooks/use-mobile"
import { useRouter } from "next/navigation"

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
    const router = useRouter()
  const isMobile = useIsMobile()
  const openProductModal = useModalStore((state) => state.openProductModal);

    const handleViewDetails = () => {
    if (isMobile) {
      console.log("yes")
      // 📱 Mobile → page navigation
      router.push(`/products/${product.slug}`)
    } else {
      // 🖥 Desktop → modal
      console.log("ok")
      openProductModal(product)
    }
  }

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

      <button
        
        className="secondary-button"
        onClick={handleViewDetails}
      >
        View Details
      </button>
    </article>
  )
}