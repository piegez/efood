import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  size?: 'small' | 'big'
  children: string
  disabled?: boolean
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
      <S.ButtonContainer
        type="button"
        title={title}
        size={size}
        onClick={onClick}
      >
        {children}
      </S.ButtonContainer>
    )
  }
  return (
    <S.ButtonLink
      type="button"
      title={title}
      size={size}
      onClick={onClick}
      to={to as string}
    >
      {children}
    </S.ButtonLink>
  )
}

export default Button
