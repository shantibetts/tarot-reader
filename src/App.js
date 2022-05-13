import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
	useEffect(() => {
		fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/')
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
			})
			.catch(() => console.log('Problem with Tarot Cards API fetch'))
	}, [])
	return <div className="App"></div>
}

export default App
