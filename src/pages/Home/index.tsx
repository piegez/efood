import Header from '../../components/Header'
import ProductList from '../../components/ProductsList'
import Restaurant from '../../models/Restaurant'
import sushi from '../../assets/images/sushi.png'
import pasta from '../../assets/images/pasta.png'
import india from '../../assets/images/taste.png'
import french from '../../assets/images/french.png'
import mexican from '../../assets/images/mexican.png'
import fusion from '../../assets/images/fusion.png'

const pratos: Restaurant[] = [
  {
    title: 'Hioki Sushi',
    rating: '4,9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    link: '/ladolce'
  },
  {
    title: 'La Dolce Vita Trattoria',
    rating: '4,6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pasta,
    infos: ['Italiana'],
    link: '/ladolce'
  },
  {
    title: 'Taste of India',
    rating: '4,9',
    description:
      'Uma viagem gastronômica à Índia sem sair da cidade. O Taste of India apresenta pratos tradicionais como curry de frango, biryani aromático e samosas crocantes, todos preparados com especiarias autênticas e ingredientes frescos.',
    image: india,
    infos: ['Indiana'],
    link: '/'
  },
  {
    title: 'Chez Pierre',
    rating: '5,0',
    description:
      'Conhecido por sua elegância e sofisticação, o Chez Pierre combina a tradição culinária francesa com ingredientes locais frescos, oferecendo desde foie gras até crème brûlée impecavelmente preparados.',
    image: french,
    infos: ['Francesa'],
    link: '/'
  },
  {
    title: 'Sabor Mexicano',
    rating: '4,3',
    description:
      'Um ponto de encontro vibrante para os amantes da culinária mexicana. Do guacamole fresco às enchiladas suculentas, cada prato é uma explosão de sabores autênticos.',
    image: mexican,
    infos: ['Mexicana'],
    link: '/'
  },
  {
    title: 'Fusion',
    rating: '4,1',
    description:
      'O Fusion Bistro é conhecido por sua abordagem criativa e inovadora na culinária, combinando influências de diversas culturas gastronômicas. Dos sushi rolls com toque brasileiro a pratos de fusão mediterrânea, cada refeição é uma aventura culinária única e deliciosa.',
    image: fusion,
    infos: ['Fusion'],
    link: '/'
  }
]
const Home = () => (
  <>
    <Header />
    <ProductList restaurante={pratos} />
  </>
)

export default Home
