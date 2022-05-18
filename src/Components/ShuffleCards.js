const ShuffleCards = (cards) => {
	let newShuffledCards = [...cards]
	newShuffledCards = newShuffledCards
		.map((card) => ({ card: card, random: Math.random() }))
		.sort((a, b) => a.random - b.random)
		.map(({ card }) => card)
	return newShuffledCards
}

export default ShuffleCards
