class Restaurant {
  description: string
  image: string
  infos: string[]
  title: string
  rating: string
  link: string

  constructor(
    description: string,
    image: string,
    infos: string[],
    title: string,
    rating: string,
    link: string
  ) {
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.rating = rating
    this.link = link
  }
}

export default Restaurant
