import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'
import TarotCard from './TarotCard'
import Description from './Description'
import Button from '@mui/material/Button'
import readingConfigs from '../readingConfigs'
import Deal from './Deal'
import { shuffleCards, handleDeal, handleNewReading } from './Utils.js'

const ThreeCardSpread = (props) => {
	const [readingCards, setReadingCards] = useState(readingConfigs()[0])
	const [description, setDescription] = useState(null)
	const [shuffledCards, setShuffledCards] = useState([])
	const [expanded, setExpanded] = useState(false)
	const [dialogOpen, setDialogOpen] = useState(false)

	const handleDialog = () => {
		setDialogOpen(!dialogOpen)
	}

	useEffect(() => {
		const newShuffledCards = shuffleCards(props.allCards)
		setShuffledCards(newShuffledCards)
	}, [props.allCards])

	const handleDescription = (card) => {
		setDescription(card)
		setExpanded(false)
	}

	const cardsDisplay = readingCards.reading.map((card, i) => (
		<TarotCard
			key={card.name_short}
			card={card}
			index={i}
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
			<Container id="threeCardSpread">
				<Deal
					handleDeal={() =>
						handleDeal(
							shuffledCards,
							readingCards,
							setShuffledCards,
							setReadingCards
						)
					}
					deck={props.deck}
					readingCards={readingCards}
					sx={{ transform: 'rotate(90deg)' }}
				/>
				{cardsDisplay}
				<Button
					onClick={() =>
						handleNewReading(
							props.allCards,
							setShuffledCards,
							setReadingCards,
							setDescription,
							0
						)
					}
					size="medium"
					variant="outlined"
					sx={{ m: 1, maxWidth: 'fit-content', justifySelf: 'center' }}
					id="newReading"
				>
					New Reading
				</Button>
				{descriptionDisplay}
			</Container>
		</React.Fragment>
	)
}

export default ThreeCardSpread
