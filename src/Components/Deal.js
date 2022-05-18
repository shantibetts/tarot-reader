import Button from '@mui/material/Button'

const Deal = (props) => {
	return (
		<Button
			onClick={props.handleDeal}
			disabled={
				props.readingCards.index === props.readingCards.indexMax ? true : false
			}
		>
			<img
				className="tarotCard"
				src={props.deck.cardPreviews[0].url}
				alt={props.deck.name}
			/>
		</Button>
	)
}

export default Deal
