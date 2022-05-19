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
import CardDialog from './CardDialog'
import useMediaQuery from '@mui/material/useMediaQuery'

const ThreeCardSpread = (props) => {
	const [readingCards, setReadingCards] = useState(readingConfigs()[0])
	const [description, setDescription] = useState(null)
	const [shuffledCards, setShuffledCards] = useState([])
	const [expanded, setExpanded] = useState(false)
	const [dialogOpen, setDialogOpen] = useState(false)
	let desktop = useMediaQuery('(min-width:600px)')

	useEffect(() => {
		const newShuffledCards = shuffleCards(props.allCards)
		setShuffledCards(newShuffledCards)
	}, [props.allCards])

	const handleDescription = (card) => {
		setExpanded(false)
		setDialogOpen(!desktop)
		setDescription(card)
	}

	const cardsDisplay = readingCards.reading.map((card, i) => (
		<TarotCard
			key={card.name_short}
			card={card}
			index={i}
			handleDescription={handleDescription}
			setDialogOpen={setDialogOpen}
		/>
	))

	let descriptionDisplay = ''
	if (description && desktop && !dialogOpen) {
		descriptionDisplay = (
			<Description
				description={description}
				done={() => setDescription(null)}
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
							setReadingCards,
							setDialogOpen,
							setDescription
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
				<CardDialog
					dialogOpen={dialogOpen}
					setDialogOpen={setDialogOpen}
					description={description}
					setDescription={setDescription}
					expanded={expanded}
					setExpanded={setExpanded}
				/>
			</Container>
		</React.Fragment>
	)
}

export default ThreeCardSpread
