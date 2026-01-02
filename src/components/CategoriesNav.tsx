"use client";

import Link from "next/link";
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
    return(
        <nav aria-label="Product categories" className="categories">
            <ul className="category-list">
                {categories.map((category)=>(
                    <li className="category-button" key={category.value}>
                        <Link href={`/?category=${category.value}`}>
                            {category.label}
                        </Link>   

                    </li>
                ))}
            </ul>



        </nav>
    )
}