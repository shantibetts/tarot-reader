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
import houseDeckData from './houseDeckData'

function App() {
	const [currentDeck, setCurrentDeck] = useState(tarotDecks[0])

	useEffect(() => {
		fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/')
			.then((response) => response.json())
			.then(({ cards }) => {
				cards.forEach((card) => {
					card.imageUrl =
						tarotDecks[0].imageFetchUrls.prepend +
						card.name_short +
						tarotDecks[0].imageFetchUrls.append
					card.isReversed = false
				})
				tarotDecks[0].allCards = cards
				setCurrentDeck(tarotDecks[0])
			})
			.catch(() => console.log('Problem with Tarot Cards API fetch'))
		const houseDeckCards = houseDeckData.map((card) => {
			const newCard = {}
			if (card.name === 'ten-of-wands') {
				newCard.imageUrl =
					'https://www.simplytarot.com/wp-content/uploads/2015/04/ten-of-wands-tarot-care.png'
			} else {
				newCard.imageUrl =
					tarotDecks[1].imageFetchUrls.prepend +
					card.name +
					tarotDecks[1].imageFetchUrls.append
			}
			newCard.isReversed = false
			newCard.name_short = card.name
			newCard.value = card.card_index
			newCard.meaning_up = card.upright
			newCard.meaning_rev = card.reversed
			newCard.desc = card.full_meaning
			const capNameArray = card.name.split('-').map((word) => {
				const capWord = word.charAt(0).toUpperCase() + word.slice(1)
				return capWord
			})
			const capName = capNameArray.reduce(
				(previous, current) => previous + ' ' + current
			)
			newCard.name = capName
			return newCard
		})
		tarotDecks[1].allCards = houseDeckCards
	}, [])

	const readingList = readingConfigs().map((reading, index) => (
		<Route
			key={reading.name}
			path={reading.path}
			element={<Reading index={index} currentDeck={currentDeck} />}
		/>
	))

	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={
						<Home currentDeck={currentDeck} setCurrentDeck={setCurrentDeck} />
					}
				/>
				<Route
					path="/decks"
					element={
						<DeckList
							currentDeck={currentDeck}
							setCurrentDeck={setCurrentDeck}
						/>
					}
				/>
				{readingList}
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	)
}

export default App
