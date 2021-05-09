import styled from 'styled-components'
import Title from '@components/Title'

const ErrorStyled = styled.div`
	width: 100%;
	min-height: 100vh;
	display: grid;
	place-items: center;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
		'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`

const Error = () => {
	return (
		<ErrorStyled>
			<Title>Some error has occured ...</Title>
		</ErrorStyled>
	)
}

export default Error
