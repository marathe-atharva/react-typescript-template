import 'styled-components'

declare module '*.png'
declare module '*.svg' {
	const content: string
	export default content
}

declare module 'styled-components' {
	export interface DefaultTheme {
		borderRadius: string

		colors: {
			main: string
			secondary: string
		}
	}
}
