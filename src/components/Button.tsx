import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { ButtonProps } from '@/interfaces/Button'

const ButtonStyled = styled.button`
	display: inline-block;
	background-color: #1f75fe;
	padding: 0.25rem 1rem;
	outline: none;
	border: none;
	border-radius: 0.25rem;
	font: 400 1.25rem -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
		sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	color: white;
	cursor: pointer;
`

const Button: FunctionComponent<ButtonProps> = ({ clickHandler, children }: ButtonProps) => {
	return <ButtonStyled onClick={clickHandler}>{children}</ButtonStyled>
}

export default Button
