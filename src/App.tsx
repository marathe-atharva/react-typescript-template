import { useEffect } from 'react'
import './style.scss'
import ReactGa from 'react-ga'

export const App = () => {
	useEffect(() => {
		ReactGa.initialize(`${process.env.REACT_APP_GA}`)
		ReactGa.pageview('/')
	}, [])

	return <h1 className="app">React Typescript Template! </h1>
}
