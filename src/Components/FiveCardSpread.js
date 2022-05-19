import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'
import TarotCard from './TarotCard'
import Description from './Description'
import Button from '@mui/material/Button'
import readingConfigs from '../readingConfigs'
import Deal from './Deal'
import { shuffleCards, handleDeal, handleNewReading } from './Utils'

const FiveCardSpread = (props) => {
	const [readingCards, setReadingCards] = useState(readingConfigs()[1])
	const [description, setDescription] = useState(null)
	const [shuffledCards, setShuffledCards] = useState([])
	const [expanded, setExpanded] = useState(false)

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
			index={i}
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
		<Container id="readingContainer">
			<CssBaseline />
			<Container id="fiveCardSpread">
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
				/>
				{cardsDisplay}

				<Button
					onClick={() =>
						handleNewReading(
							props.allCards,
							setShuffledCards,
							setReadingCards,
							setDescription,
							1
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
		</Container>
	)
}

export default FiveCardSpread
