import { useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import styled from 'styled-components'
import { ClickCounterProps } from '@/interfaces/ClickCounter'
import Button from '@components/Button'
import Title from '@components/Title'

const WrapperStyled = styled.div`
	margin: 2rem 0;
`

const ClickCounter = ({ limit }: ClickCounterProps) => {
	const [count, setCount] = useState(0)

	const handleError = useErrorHandler()

	const handleClick = () => {
		try {
			if (count >= limit) {
				throw new Error(`Count limit exceeded limit (${limit})`)
			} else {
				setCount((count) => count + 1)
			}
		} catch (error) {
			handleError(error)
		}
	}

	return (
		<WrapperStyled>
			<Title>{count.toLocaleString()}</Title>
			<Button clickHandler={handleClick}>Click</Button>
		</WrapperStyled>
	)
}

export default ClickCounter
