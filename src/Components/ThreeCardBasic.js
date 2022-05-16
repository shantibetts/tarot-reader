import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'
import TarotCard from './TarotCard'
import Description from './Description'
import Button from '@mui/material/Button'
import ToggleButton from '@mui/material/ToggleButton'
import readingConfigs from '../readingConfigs'

const ThreeCardBasic = (props) => {
	const [threeCards, setThreeCards] = useState(readingConfigs().threeCardBasic)
	const [description, setDescription] = useState(null)
	const [shuffledCards, setShuffledCards] = useState([])

	const shuffleCards = (cards) => {
		let newShuffledCards = [...cards]
		newShuffledCards = newShuffledCards
			.map((card) => ({ card: card, random: Math.random() }))
			.sort((a, b) => a.random - b.random)
			.map(({ card }) => card)
		return newShuffledCards
	}

	useEffect(() => {
		const newShuffledCards = shuffleCards(props.allCards)
		setShuffledCards(newShuffledCards)
		console.log(newShuffledCards)
	}, [props.allCards])

	const handleDeal = () => {
		const newShuffledCards = [...shuffledCards]
		const newCard = newShuffledCards.shift()
		let [newThreeCards, i] = [...threeCards]
		newThreeCards.splice(i, 1, newCard)
		i++
		setShuffledCards(newShuffledCards)
		setThreeCards([newThreeCards, i])
	}

	const handleNewReading = () => {
		const newShuffledCards = shuffleCards(props.allCards)
		setShuffledCards(newShuffledCards)
		setThreeCards(readingConfigs().threeCardBasic)
	}

	const handleDescription = (card) => {
		setDescription(card)
	}

	const cardsDisplay = threeCards[0].map((card) => (
		<TarotCard
			key={card.name_short}
			card={card}
			span={4}
			width={'25vw'}
			height={'44vw'}
			handleDescription={handleDescription}
		/>
	))

	let descriptionDisplay = ''
	if (description && description.cardDescription) {
		descriptionDisplay = (
			<Description
				titleTop={'Position'}
				textTop={'Past'}
				titleBottom={'Card'}
				textBottom={'emptyCard'}
			/>
		)
	}

	const disableDeal = () => {
		if (threeCards[1] === 2) {
			return true
		} else {
			return false
		}
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="sm">
				<Grid container spacing={2}>
					{cardsDisplay}
				</Grid>
				<ToggleButton
					onClick={handleDeal}
					disabled={threeCards[1] === 3 ? true : false}
					value="deal"
				>
					Deal
				</ToggleButton>
				<Button onClick={handleNewReading} size="medium" variant="contained">
					New Reading
				</Button>
				{descriptionDisplay}
			</Container>
		</React.Fragment>
	)
}

export default ThreeCardBasic
