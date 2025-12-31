import sharp from "sharp"
import fs from "fs"
import path from "path"
import { featuredProducts } from "@/data/products"

const INPUT_IMAGE = path.join("public/raw/featured-products.png")
const OUTPUT_DIR = path.join("public/products")

const TILE_WIDTH = 400
const TILE_HEIGHT = 400

async function cropImages() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  const image = sharp(INPUT_IMAGE)
  const metadata = await image.metadata()

  if (!metadata.width || !metadata.height) {
    throw new Error("Could not read image dimensions")
  }

  const columns = Math.floor(metadata.width / TILE_WIDTH)
  const rows = Math.floor(metadata.height / TILE_HEIGHT)

  console.log(`Image size: ${metadata.width}x${metadata.height}`)
  console.log(`Grid detected: ${columns} columns x ${rows} rows`)

  let index = 0

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      if (index >= featuredProducts.length) return

      const left = col * TILE_WIDTH
      const top = row * TILE_HEIGHT

      const product = featuredProducts[index]
      const outputPath = path.join(
        OUTPUT_DIR,
        `${product.slug}.jpg`
      )

      await image
        .clone()
        .extract({
          left,
          top,
          width: TILE_WIDTH,
          height: TILE_HEIGHT,
        })
        .jpeg({ quality: 90 })
        .toFile(outputPath)

      console.log(`✔ Generated ${product.slug}.jpg`)
      index++
    }
  }
}

cropImages().catch(console.error)
