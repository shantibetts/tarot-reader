import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import DeckList from './Components/DeckList'
import Reading from './Components/Reading'
import readingConfigs from './readingConfigs'
import NavBar from './Components/NavBar'
import About from './Components/About'
import tarotDecks from './tarotDecks'

function App() {
	const [allCards, setAllCards] = useState([])
	const [deck, setDeck] = useState(tarotDecks[0])

	useEffect(() => {
		fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/')
			.then((response) => response.json())
			.then(({ cards }) => {
				cards.forEach((card) => {
					card.url = `https://www.sacred-texts.com/tarot/pkt/img/${card.name_short}.jpg`
					card.reversed = false
				})
				setAllCards(cards)
			})
			.catch(() => console.log('Problem with Tarot Cards API fetch'))
	}, [])

	const readingList = readingConfigs().map((reading, index) => (
		<Route
			key={reading.name}
			path={reading.path}
			element={
				<Reading
					index={index}
					reading={reading}
					allCards={allCards}
					deck={deck}
				/>
			}
		/>
	))

	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home setDeck={setDeck} />} />
				<Route path="/decks" element={<DeckList setDeck={setDeck} />} />
				{readingList}
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	)
}

export default App
