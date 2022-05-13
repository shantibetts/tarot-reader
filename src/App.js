import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Decks from './Components/Decks'
import ThreeCardBasic from './Components/ThreeCardBasic'
import NavBar from './Components/NavBar'

function App() {
	useEffect(() => {
		fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/')
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
			})
			.catch(() => console.log('Problem with Tarot Cards API fetch'))
	}, [])
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/decks" element={<Decks />} />
				<Route path="/threecardbasic" element={<ThreeCardBasic />} />
			</Routes>
			<NavBar />
		</div>
	)
}

export default App
