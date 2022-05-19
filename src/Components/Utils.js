import readingConfigs from '../readingConfigs'

const handleDeal = (
	shuffledCards,
	readingCards,
	setShuffledCards,
	setReadingCards,
	setDialogOpen,
	setDescription
) => {
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

const shuffleCards = (cards) => {
	let newShuffledCards = [...cards]
	newShuffledCards = newShuffledCards
		.map((card) => ({ card: card, random: Math.random() }))
		.sort((a, b) => a.random - b.random)
		.map(({ card }) => card)
	return newShuffledCards
}

const handleNewReading = (
	allCards,
	setShuffledCards,
	setReadingCards,
	setDescription,
	i
) => {
	const newShuffledCards = shuffleCards(allCards)
	setShuffledCards(newShuffledCards)
	setReadingCards(readingConfigs()[i])
	setDescription(null)
}

export { shuffleCards, handleDeal, handleNewReading }
