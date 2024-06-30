import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  size?: 'small' | 'big'
  children: string
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  size = 'small'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        size={size}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink
      type="button"
      title={title}
      size={size}
      onClick={onClick}
      to={to as string}
    >
      {children}
    </ButtonLink>
  )
}

export default Button
