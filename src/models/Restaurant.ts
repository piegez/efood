class Restaurant {
  description: string
  image: string
  infos: string[]
  title: string
  rating: string

  constructor(
    description: string,
    image: string,
    infos: string[],
    title: string,
    rating: string
  ) {
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.rating = rating
  }
}

export default Restaurant
