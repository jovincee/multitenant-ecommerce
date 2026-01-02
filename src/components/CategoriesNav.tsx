"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation"
import "@/app/home.css"
const categories = [
  { label: "All", value: "all" },
  { label: "CPUs", value: "cpu" },
  { label: "GPUs", value: "gpu" },
  { label: "Motherboards", value: "motherboard" },
  { label: "RAM", value: "ram" },
  { label: "Storage", value: "storage" },
  { label: "PSU", value: "psu" },
  { label: "Cases", value: "case" },
  { label: "Monitors", value: "monitor" },
  { label: "Prebuilt PCs", value: "prebuilt" },

];



export default function CategoriesNav() {
    const searchParams = useSearchParams()
    const activeCategory = searchParams.get("category") ?? "all"
    return(
        <nav aria-label="Product categories" className="categories">
            <ul className="category-list">
                {categories.map(category => {
          const params = new URLSearchParams(searchParams.toString())
          params.set("category", category.value)

          return (
            <li
              key={category.value}
              className={`category-button ${
                activeCategory === category.value ? "active" : ""
              }`}
            >
              <Link href={`/?${params.toString()}`}>
                {category.label}
              </Link>
            </li>
            )
            })}
            </ul>



        </nav>
    )
}