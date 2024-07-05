class FoodItem {
  description: string
  image: string
  title: string
  link: string

  constructor(description: string, image: string, title: string, link: string) {
    this.description = description
    this.image = image
    this.title = title
    this.link = link
  }
}

export default FoodItem
