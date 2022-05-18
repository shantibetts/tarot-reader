import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'
import TarotCard from './TarotCard'
import Description from './Description'
import Button from '@mui/material/Button'
import readingConfigs from '../readingConfigs'
import Deal from './Deal'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

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

	if (useMediaQuery('(min-width:900px)')) {
		return (
			<React.Fragment>
				<CssBaseline />
				<Grid container spacing={4} sx={{ my: 4, pr: 4, pl: 4 }}>
					<Grid item container xs={3}>
						<Container maxWidth="xs" sx={{ padding: 0 }} id="noPadding">
							<Deal
								handleDeal={handleDeal}
								deck={props.deck}
								threeCards={threeCards}
							/>
							<Button
								onClick={handleNewReading}
								size="medium"
								variant="outlined"
								sx={{ m: 1 }}
							>
								New Reading
							</Button>
						</Container>
					</Grid>
					<Grid item xs={9}>
						<Container>
							<Grid container spacing={2}>
								{cardsDisplay}
							</Grid>
						</Container>
					</Grid>
					<Grid item container spacing={2} xs={12}>
						{descriptionDisplay}
					</Grid>
				</Grid>
			</React.Fragment>
		)
	} else {
		return (
			<React.Fragment>
				<CssBaseline />
				<Container>
					<Container maxWidth="sm">
						<Grid container spacing={2} sx={{ my: 4 }}>
							{cardsDisplay}
						</Grid>
					</Container>
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
					<Container maxWidth="sm">{descriptionDisplay}</Container>
				</Container>
			</React.Fragment>
		)
	}
}

export default ThreeCardBasic
