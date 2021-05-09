import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { LinkProps } from '@/interfaces/Link'

const LinkStyled = styled.a`
	display: block;
	position: relative;
	cursor: pointer;
	font: 600 1.25rem -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
		sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	margin: 0.25rem 0;

	&:link,
	&:visited,
	&:hover,
	&:focus,
	&:active {
		color: black;
		text-decoration: none;
		letter-spacing: -0.05rem;
	}

	span {
		display: inline-block;
		padding-bottom: 0.75rem;
		position: relative;

		&::after {
			content: '';
			width: 100%;
			height: 2px;
			top: calc(100% - 0.75rem);
			position: absolute;
			left: 0;
			background: black;
			transition: transform 0.2s;
			transform-origin: 100% 0;
		}

		&:hover::after {
			transform: scale3d(0, 1, 1);
		}
	}
`

const Link: FunctionComponent<LinkProps> = ({ link, children }: LinkProps) => {
	return (
		<LinkStyled href={link}>
			<span>{children}</span>
		</LinkStyled>
	)
}

export default Link
