import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { TitleProps } from '@/interfaces/Title'

const TitleStyled = styled.span`
	display: block;
	font: 400 2rem -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
		sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`

const Title: FunctionComponent<TitleProps> = ({ children }: TitleProps) => {
	return <TitleStyled>{children}</TitleStyled>
}

export default Title
