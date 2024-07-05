import HeaderStore from '../../components/HeaderStore'
import ProductListStore from '../../components/ProductsListStore'
import FoodItem from '../../models/FoodItem'
import bannerladolce from '../../assets/images/bannerLaDolce.png'
import BannerInt from '../../components/BannerInt'
import pizza from '../../assets/images/pizza.png'
import lasagna from '../../assets/images/lasagna.png'
import risoto from '../../assets/images/risoto.png'
import espinafre from '../../assets/images/espinafre.png'
import ossobuco from '../../assets/images/ossobuco.png'
import carpacio from '../../assets/images/carpacio.png'

const pratos: FoodItem[] = [
  {
    title: 'Pizza Marguerita',
    description:
      'Molho de tomate suculento, mussarela derretida, manjericão fresco colhido à mão e um generoso toque de azeite de oliva extravirgem. Um prato que combina sabor autêntico com a simplicidade elegante da culinária italiana.',
    image: pizza,
    link: '/'
  },
  {
    title: 'Lasanha',
    description:
      'Camadas de massa de lasanha cuidadosamente montadas e intercaladas com um rico molho de carne, queijo ricota cremoso, molho de tomate caseiro e queijo parmesão gratinado, criando uma textura que é simplesmente irresistível.',
    image: lasagna,
    link: '/'
  },
  {
    title: 'Risoto alla Milanese',
    description:
      'Um risoto cremoso feito com arroz arbóreo, caldo de carne, açafrão e finalizado com manteiga e queijo parmesão, originário de Milão, conhecido por sua cor amarela vibrante e sabor rico.',
    image: risoto,
    link: '/'
  },
  {
    title: 'Ravioli di Ricotta e Spinaci',
    description:
      'Pequenos raviólis recheados com uma mistura de ricota fresca, espinafre refogado, noz-moscada e temperos, servidos com molho de tomate fresco ou manteiga de sálvia.',
    image: espinafre,
    link: '/'
  },
  {
    title: 'Osso Buco',
    description:
      'Um prato de carne de vitela cozida lentamente. O osso buco é servido com um molho de vinho branco, caldo de carne, tomates, cenouras, aipo e ervas, geralmente acompanhado de risoto.',
    image: ossobuco,
    link: '/'
  },
  {
    title: 'Carpaccio',
    description:
      'Finas fatias de carne bovina crua marinadas em azeite, suco de limão, lascas de queijo parmesão, alcaparras e rúcula fresca, criando um prato leve e elegante, ideal como antepasto.',
    image: carpacio,
    link: '/'
  }
]

const LaDolce = () => (
  <>
    <HeaderStore />
    <BannerInt
      title={'La Dolce Vita Trattoria'}
      description={'Italiana'}
      image={bannerladolce}
    />
    <ProductListStore restaurante={pratos} />
  </>
)

export default LaDolce
