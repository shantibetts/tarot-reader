import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import DeckList from './Components/DeckList'
import ThreeCardSpread from './Components/ThreeCardSpread'
import FiveCardSpread from './Components/FiveCardSpread'
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
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/decks" element={<DeckList />} />
				<Route
					path="/threeCardSpread"
					element={<ThreeCardSpread allCards={allCards} deck={deck} />}
				/>
				<Route
					path="/fiveCardSpread"
					element={<FiveCardSpread allCards={allCards} deck={deck} />}
				/>
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	)
}

export default App
