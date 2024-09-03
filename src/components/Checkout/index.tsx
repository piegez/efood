import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'

import Card from '../Card'
import Button from '../Button'

import { close, clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'

import { getTotalPrice, parseToBrl } from '../../utils'

import * as S from './styles'

interface CheckoutProps {
  onBackToCart?: () => void
}

const Checkout: React.FC<CheckoutProps> = ({ onBackToCart }) => {
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const [currentState, setCurrentState] = useState('delivery')

  const { items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      postCode: '',
      houseNumber: '',
      addressTwo: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      postCode: Yup.string()
        .min(9, 'O campo precisa ter 9 caracteres')
        .max(10, 'O campo precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      houseNumber: Yup.string().required('O campo é obrigatório'),
      addressTwo: Yup.string(),
      cardDisplayName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),

    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            descricao: values.address,
            city: values.city,
            zipCode: values.postCode,
            number: Number(values.houseNumber),
            complement: values.addressTwo
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  const closeCart = () => {
    dispatch(close())
  }
  const goToHome = () => {
    navigate('/')
    window.location.reload()
    closeCart()
  }

  const areDeliveryFieldsFilled = () => {
    const requiredFields: (keyof typeof form.values)[] = [
      'fullName',
      'address',
      'city',
      'postCode',
      'houseNumber'
    ]
    return requiredFields.every((field) => form.values[field].trim() !== '')
  }

  const arePaymentFieldsFilled = () => {
    const paymentFields: (keyof typeof form.values)[] = [
      'cardDisplayName',
      'cardNumber',
      'cardCode',
      'expiresMonth',
      'expiresYear'
    ]
    return paymentFields.every((field) => form.values[field].trim() !== '')
  }

  const checkInputHasError = (field: string) => {
    return (
      form.touched[field as keyof typeof form.values] &&
      !!form.errors[field as keyof typeof form.values]
    )
  }

  return (
    <S.Content className="container">
      {isSuccess && data ? (
        <>
          <Card title={`Pedido realizado - ${data.orderId}`}>
            <>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <br />
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <br />
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <br />
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </>
          </Card>
          <Button onClick={goToHome} type="button" title="Concluir">
            Concluir
          </Button>
        </>
      ) : (
        <>
          {currentState === 'delivery' && (
            <form>
              <Card title="Entrega">
                <>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="fullName">Quem irá receber</label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={form.values.fullName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('fullName') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="address">Endereço</label>
                      <input
                        id="address"
                        type="text"
                        name="address"
                        value={form.values.address}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('address') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="city">Cidade</label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('city') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="postCode">CEP</label>
                      <InputMask
                        id="postCode"
                        type="text"
                        name="postCode"
                        value={form.values.postCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('postCode') ? 'error' : ''
                        }
                        mask="99999-999"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="houseNumber">Número</label>
                      <input
                        id="houseNumber"
                        type="text"
                        name="houseNumber"
                        value={form.values.houseNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('houseNumber') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="addressTwo">Complemento</label>
                      <input
                        id="addressTwo"
                        type="text"
                        name="addressTwo"
                        value={form.values.addressTwo}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </S.InputGroup>
                  </S.Row>
                </>
              </Card>
              <S.Row>
                <Button
                  type="button"
                  title="Ir para pagamento"
                  onClick={() => {
                    if (areDeliveryFieldsFilled()) {
                      setCurrentState('payment')
                    } else {
                      alert('Preencha todos os campos obrigatórios.')
                    }
                  }}
                  disabled={!areDeliveryFieldsFilled()}
                >
                  Ir para pagamento
                </Button>
              </S.Row>
              <S.Row>
                <Button
                  type="button"
                  onClick={onBackToCart}
                  title="Voltar para o carrinho"
                >
                  Voltar para o carrinho
                </Button>
              </S.Row>
            </form>
          )}
          {currentState === 'payment' && (
            <form onSubmit={form.handleSubmit}>
              <Card
                title={`Pagamento - Valor a pagar ${parseToBrl(
                  getTotalPrice(items)
                )}`}
              >
                <>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardDisplayName">Nome no cartão</label>
                      <input
                        id="cardDisplayName"
                        type="text"
                        name="cardDisplayName"
                        value={form.values.cardDisplayName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardDisplayName') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <InputMask
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="9999 9999 9999 9999"
                        className={
                          checkInputHasError('cardNumber') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardCode">Código de segurança</label>
                      <InputMask
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="999"
                        className={
                          checkInputHasError('cardCode') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expiresMonth">Mês de validade</label>
                      <InputMask
                        id="expiresMonth"
                        type="text"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="99"
                        className={
                          checkInputHasError('expiresMonth') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expiresYear">Ano de validade</label>
                      <InputMask
                        id="expiresYear"
                        type="text"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="9999"
                        className={
                          checkInputHasError('expiresYear') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                </>
              </Card>
              <S.Row>
                <Button
                  type="button"
                  title="Finalizar pedido"
                  disabled={!arePaymentFieldsFilled()}
                  onClick={form.handleSubmit}
                >
                  Finalizar pedido
                </Button>
              </S.Row>
              <S.Row>
                <Button
                  type="button"
                  onClick={() => setCurrentState('delivery')}
                  title="Voltar para o carrinho"
                >
                  Voltar para a edição de endereço
                </Button>
              </S.Row>
            </form>
          )}
        </>
      )}
    </S.Content>
  )
}

export default Checkout
