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

const ThreeCardBasic = (props) => {
	const [threeCards, setThreeCards] = useState([
		[
			{ name: 'emptyCard', name_short: 'ec1' },
			{ name: 'emptyCard', name_short: 'ec2' },
			{ name: 'emptyCard', name_short: 'ec3' }
		],
		0
	])
	const [description, setDescription] = useState(null)
	const [shuffledCards, setShuffledCards] = useState([])

	useEffect(() => {
		let newShuffledCards = [...props.allCards]
		newShuffledCards = newShuffledCards
			.map((card) => ({ card: card, random: Math.random() }))
			.sort((a, b) => a.random - b.random)
			.map(({ card }) => card)
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

	const descriptionDisplay = () => {
		if (description && description.cardDescription) {
			return (
				<Description
					titleTop={'Position'}
					textTop={'Past'}
					titleBottom={'Card'}
					textBottom={'emptyCard'}
				/>
			)
		}
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="sm">
				<Grid container spacing={2}>
					{cardsDisplay}
				</Grid>
				<Button onClick={handleDeal} size="medium" variant="contained">
					Deal
				</Button>
			</Container>
		</React.Fragment>
	)
}

export default ThreeCardBasic
