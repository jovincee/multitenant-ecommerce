import { Product } from "@/types/product"


export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "AMD Ryzen 9 5900X",
    price: 469,
    image: "/products/ryzen.jpg",
    slug: "ryzen-5900x",
    inStock: true,
  },
  {
    id: "2",
    name: "NVIDIA RTX 3080",
    price: 699,
    image: "/products/rtx3080.jpg",
    slug: "rtx-3080",
    inStock: true,
  },
  {
    id: "3",
    name: "27″ Gaming Monitor",
    price: 299,
    image: "/products/monitor.jpg",
    slug: "monitor-27",
    inStock: false,
  },
]