import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'
import TarotCard from './TarotCard'
import Description from './Description'
import Button from '@mui/material/Button'
import Deal from './Deal'
import CardDialog from './CardDialog'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useLocation } from 'react-router-dom'

const Reading = (props) => {
	const [readingCards, setReadingCards] = useState(props.reading)
	const [description, setDescription] = useState(null)
	const [shuffledCards, setShuffledCards] = useState([])
	const [expanded, setExpanded] = useState(false)
	const [dialogOpen, setDialogOpen] = useState(false)
	let desktop = useMediaQuery('(min-width:600px)')

	useEffect(() => {
		const newShuffledCards = shuffleCards()
		setShuffledCards(newShuffledCards)
	}, [props.allCards])

	useEffect(() => {
		handleNewReading()
	}, [useLocation().pathname])

	const handleDeal = () => {
		const newShuffledCards = [...shuffledCards]
		const newCard = newShuffledCards.shift()
		let newReadingCards = { ...readingCards }
		newCard.positionName =
			newReadingCards.reading[newReadingCards.index].positionName
		newCard.positionDescription =
			newReadingCards.reading[newReadingCards.index].positionDescription
		newReadingCards.reading.splice(newReadingCards.index, 1, newCard)
		newReadingCards.index++
		setShuffledCards(newShuffledCards)
		setReadingCards(newReadingCards)
		setDescription(newCard)
		setDialogOpen(true)
	}

	const shuffleCards = () => {
		let newShuffledCards = [...props.allCards]
		newShuffledCards = newShuffledCards
			.map((card) => ({ card: card, random: Math.random() }))
			.sort((a, b) => a.random - b.random)
			.map(({ card }) => card)
		return newShuffledCards
	}

	const handleNewReading = () => {
		const newShuffledCards = shuffleCards()
		setShuffledCards(newShuffledCards)
		setReadingCards(props.reading)
		setDescription(null)
	}

	const handleDescription = (e, card) => {
		setExpanded(false)
		setDescription(card)
		e.detail === 2 || !desktop ? setDialogOpen(true) : setDialogOpen(false)
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

	const readingId = props.reading.path.substring(1)

	return (
		<React.Fragment>
			<CssBaseline />
			<Container id={readingId}>
				<Deal
					handleDeal={handleDeal}
					deck={props.deck}
					readingCards={readingCards}
				/>
				{cardsDisplay}
				<Button
					onClick={handleNewReading}
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

export default Reading
