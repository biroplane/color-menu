import fs from 'node:fs'
import * as prismic from '@prismicio/client'
import { htmlAsRichText } from '@prismicio/migrate'
import Papa from 'papaparse'
import { repositoryName } from './slicemachine.config.json'
import 'dotenv/config'

console.log('----------------------------')
console.log('Let\'s begin the migration')
console.log('----------------------------')

export interface Category {
  title: string
  featured: string
  visible: string
  images: string
  description: string
  order: string
}
export interface Product {
  id: string
  title: string
  url: string
  body: any
}

const writeToken = process.env.PRISMIC_WRITE_TOKEN

if (!writeToken) {
  throw new Error('PRISMIC_WRITE_TOKEN environment variable is not set.')
}
const writeClient = prismic.createWriteClient(repositoryName, {
  writeToken,
})

const migration = prismic.createMigration()

// grab data from csv
// Add csv-parse package for CSV parsing

// Read and parse CSV file
const categoriesFile = fs.readFileSync('./csv/categories.csv', 'utf-8')
const categoriesData = Papa.parse(categoriesFile, {
  header: true, // Treat first row as headers
  skipEmptyLines: true,
})

// Convert CSV records to JSON
const jsonData: Category[] = categoriesData.data as Category[] // JSON.stringify(records, null, 2)

// Optionally write JSON to file
console.log('JSON DATA', jsonData)
jsonData.forEach((doc) => {
  migration.createDocument({
    type: 'category',
    uid: doc.title,
    lang: 'it-it',
    data: {
      title: 'Vini',
      body: htmlAsRichText(doc.description).result,
      enabled: doc.visible === 'true',
      featured: doc.featured === 'true',
      order: Number.parseInt(doc.order),
      image: null, // doc.images // Make sure this matches the expected type for 'image'
    },
  }, 'Vini')
})

await writeClient.migrate(migration, {
  reporter: event => console.log(event),
})
