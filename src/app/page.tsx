
import Link from "next/link";
import Navbar from "./(home)/home/components_pure_css/navbar";
import ProductCard from "@/components/ProductCard";
import CategoriesNav from "@/components/CategoriesNav";
import { featuredProducts } from "@/data/products";
import { getProductsByCategory } from "@/lib/products";
import "./home.css"

import { Product } from "@/types/product";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ category?: string }>

}) {
  let products;
  const { category } = await searchParams;
  if (category === "all"){
    products = featuredProducts
  }
  else {
    products = getProductsByCategory(category)
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

        {/** Categories Navbar section */}
        {/* Categories */}
        {/* <nav className="categories" aria-label="Product categories">
          <ul className="category-list">
          {categories.map(category => (
            <li className="category-button"key={category.id}>
              <Link href={category.link}>
                {category.name}
              </Link>
            </li>
          ))

          }
          </ul>
        </nav> */}
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
  