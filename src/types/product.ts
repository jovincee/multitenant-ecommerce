export type ProductCategory =
  | "cpu"
  | "gpu"
  | "motherboard"
  | "ram"
  | "storage"
  | "psu"
  | "case"
  | "monitor"
  | "prebuilt";


export interface Product {
    id: string
    name: string
    price: number
    image: string
    slug: string
    inStock: boolean
    category: "cpu" | "gpu" | "motherboard" | "ram" | "storage" | "monitor" | "prebuilt" | "psu" | "case"
}