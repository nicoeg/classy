export class Product {
	public name: string
	public brand: string
	public thumbnail: string

	public images: Array<string>
	public colors: Array<string>
	public sizes: Array<number>

	public price: number
	public sales: number

	public sale: boolean
	public featured: boolean

	public created_at: Date
}
