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
	const [threeCards, setThreeCards] = useState(readingConfigs()[0])
	const [description, setDescription] = useState(null)
	const [shuffledCards, setShuffledCards] = useState([])
	const [expanded, setExpanded] = useState(false)

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
	}, [props.allCards])

	const handleDeal = () => {
		const newShuffledCards = [...shuffledCards]
		const newCard = newShuffledCards.shift()
		let newThreeCards = { ...threeCards }
		newCard.positionName =
			newThreeCards.reading[newThreeCards.index].positionName
		newCard.positionDescription =
			newThreeCards.reading[newThreeCards.index].positionDescription
		newThreeCards.reading.splice(newThreeCards.index, 1, newCard)
		newThreeCards.index++
		setShuffledCards(newShuffledCards)
		setThreeCards(newThreeCards)
	}

	const handleNewReading = () => {
		const newShuffledCards = shuffleCards(props.allCards)
		setShuffledCards(newShuffledCards)
		setThreeCards(readingConfigs()[0])
		setDescription(null)
	}

	const handleDescription = (card) => {
		setDescription(card)
		setExpanded(false)
	}

	const cardsDisplay = threeCards.reading.map((card) => (
		<TarotCard
			key={card.name_short}
			card={card}
			span={4}
			width={88.7}
			height={154}
			handleDescription={handleDescription}
		/>
	))

	let descriptionDisplay = ''
	if (description) {
		descriptionDisplay = (
			<Description
				description={description}
				setDescription={setDescription}
				expanded={expanded}
				setExpanded={setExpanded}
			/>
		)
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="xs">
				<Grid container spacing={2} sx={{ my: 4 }}>
					{cardsDisplay}
				</Grid>

				<Button
					onClick={handleDeal}
					disabled={threeCards.index === 3 ? true : false}
					size="medium"
					variant="outlined"
					sx={{ m: 1 }}
				>
					Deal
				</Button>
				<Button
					onClick={handleNewReading}
					size="medium"
					variant="outlined"
					sx={{ m: 1 }}
				>
					New Reading
				</Button>

				{descriptionDisplay}
			</Container>
		</React.Fragment>
	)
}

export default ThreeCardBasic
