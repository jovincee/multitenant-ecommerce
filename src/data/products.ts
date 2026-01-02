// src/data/featuredProducts.ts
import { Product } from "@/types/product"

export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "AMD Ryzen 9 5900X",
    price: 469,
    image: "/products/ryzen-5900x.jpg",
    slug: "amd-ryzen-9-5900x",
    inStock: true,
    category: "cpu"
  },
  {
    id: "2",
    name: "AMD Ryzen 7 5800X",
    price: 349,
    image: "/products/ryzen-5800x.jpg",
    slug: "amd-ryzen-7-5800x",
    inStock: true,
    category: "cpu"
  },
  {
    id: "3",
    name: "Intel Core i9-13900K",
    price: 589,
    image: "/products/intel-i9-13900k.jpg",
    slug: "intel-core-i9-13900k",
    inStock: true,
    category: "cpu"
  },
  {
    id: "4",
    name: "Intel Core i7-13700K",
    price: 419,
    image: "/products/intel-i7-13700k.jpg",
    slug: "intel-core-i7-13700k",
    inStock: false,
    category: "cpu"
  },
  {
    id: "5",
    name: "NVIDIA RTX 3080",
    price: 699,
    image: "/products/rtx-3080.jpg",
    slug: "nvidia-rtx-3080",
    inStock: true,
    category: "gpu"
  },
  {
    id: "6",
    name: "NVIDIA RTX 4070 Ti",
    price: 799,
    image: "/products/rtx-4070-ti.jpg",
    slug: "nvidia-rtx-4070-ti",
    inStock: true,
    category: "gpu"
  },
  {
    id: "7",
    name: "AMD Radeon RX 7900 XT",
    price: 749,
    image: "/products/rx-7900-xt.jpg",
    slug: "amd-radeon-rx-7900-xt",
    inStock: true,
    category: "gpu"
  },
  {
    id: "8",
    name: "ASUS ROG B550 Motherboard",
    price: 189,
    image: "/products/asus-b550.jpg",
    slug: "asus-rog-b550",
    inStock: true,
    category: "motherboard"
  },
  {
    id: "9",
    name: "MSI Z790 Motherboard",
    price: 249,
    image: "/products/msi-z790.jpg",
    slug: "msi-z790",
    inStock: true,
    category: "motherboard"
  },
  {
    id: "10",
    name: "Corsair Vengeance 32GB DDR4 RAM",
    price: 129,
    image: "/products/corsair-32gb-ram.jpg",
    slug: "corsair-vengeance-32gb-ddr4",
    inStock: true,
    category: "ram"
  },
  {
    id: "11",
    name: "G.Skill Trident Z 16GB DDR5 RAM",
    price: 139,
    image: "/products/gskill-ddr5.jpg",
    slug: "gskill-trident-z-16gb-ddr5",
    inStock: true,
    category: "ram"
  },
  {
    id: "12",
    name: "Samsung 980 Pro 1TB NVMe SSD",
    price: 109,
    image: "/products/samsung-980-pro.jpg",
    slug: "samsung-980-pro-1tb",
    inStock: true,
    category: "storage"
  },
  {
    id: "13",
    name: "WD Black SN850X 2TB NVMe SSD",
    price: 189,
    image: "/products/wd-sn850x.jpg",
    slug: "wd-black-sn850x-2tb",
    inStock: false,
    category: "storage"
  },
  {
    id: "14",
    name: "Seagate Barracuda 4TB HDD",
    price: 89,
    image: "/products/seagate-4tb.jpg",
    slug: "seagate-barracuda-4tb",
    inStock: true,
    category: "storage"
  },
  {
    id: "15",
    name: "Corsair RM850x Power Supply",
    price: 159,
    image: "/products/corsair-rm850x.jpg",
    slug: "corsair-rm850x-850w",
    inStock: true,
    category: "psu"
  },
  {
    id: "16",
    name: "NZXT H510 Mid-Tower Case",
    price: 99,
    image: "/products/nzxt-h510.jpg",
    slug: "nzxt-h510-case",
    inStock: true,
    category: "case"
  },
  {
    id: "17",
    name: "27\" 144Hz Gaming Monitor",
    price: 299,
    image: "/products/27inch-144hz.jpg",
    slug: "27-inch-144hz-gaming-monitor",
    inStock: true,
    category: "monitor"
  },
  {
    id: "18",
    name: "34\" Ultrawide Curved Monitor",
    price: 499,
    image: "/products/34inch-ultrawide.jpg",
    slug: "34-inch-ultrawide-monitor",
    inStock: true,
    category: "monitor"

  },
  {
    id: "19",
    name: "Pre-Built Gaming PC (RTX 4070)",
    price: 1799,
    image: "/products/prebuilt-rtx4070.jpg",
    slug: "prebuilt-gaming-pc-rtx-4070",
    inStock: true,
    category: "prebuilt"
  },
  {
    id: "20",
    name: "Pre-Built Workstation PC",
    price: 2199,
    image: "/products/prebuilt-workstation.jpg",
    slug: "prebuilt-workstation-pc",
    inStock: false,
    category: "prebuilt"
  },
]
