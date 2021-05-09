import { ErrorBoundary } from 'react-error-boundary'
import { createGlobalStyle } from 'styled-components'
import ClickCounter from '@components/ClickCounter'
import Link from '@components/Link'
import Title from '@components/Title'
import Error from '@layouts/Error'

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,body {
		width: 100%;
		min-height: 100vh;
		display: grid;
		place-items: center;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
		sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	}
`

const App = () => {
	const errorHandler = (error: Error, info: { componentStack: string }) => {
		console.error('Logging: ', error, info)
	}

	return (
		<ErrorBoundary FallbackComponent={Error} onError={errorHandler}>
			<GlobalStyle />
			<Title>React Typescript Template!</Title>
			<ClickCounter limit={5} />
			<Link link="https://react-typescript-template.netlify.app/">Home</Link>
		</ErrorBoundary>
	)
}

export default App
