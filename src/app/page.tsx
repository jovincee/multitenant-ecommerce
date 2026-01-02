
import Link from "next/link";
import Navbar from "./(home)/home/components_pure_css/navbar";
import ProductCard from "@/components/ProductCard";
import CategoriesNav from "@/components/CategoriesNav";
import { featuredProducts } from "@/data/products";
import { getProductsByCategory } from "@/lib/products";
import "./home.css"

import { Product } from "@/types/product";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ category?: string, q?: string }>

}) {
  const { category = "all" , q = "" } = await searchParams;
  let products: Product[] = featuredProducts
  
  // CATEGORY FILTER
  if (category !== "all") {
    products = products.filter(product => product.category === category)
  }


  // 🔍 SEARCH FILTER
  if (q) {
    console.log("searched")
    const query = q.toLowerCase()
    products = products.filter(product =>
      product.name.toLowerCase().includes(query)
    )
  }
  


  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="home">
         {/* Hero Section */}
        <section className="hero" aria-labelledby="hero-heading">
          <h1 id="hero-heading">Big Sale on Gaming Gear</h1>
          <p>Upgrade your setup with top-tier hardware</p>
          <Link href="/products" className="primary-button">
            Shop Now
          </Link>
        </section>
        
        <CategoriesNav/>

        
        

        <section aria-labelledby="featured-products">
          <h2 id="featured-products">Featured Products</h2>

          <ul className="product-grid">
            {products.map(product => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </section>

      </main>
    </>

  );
}
  