import Button from '@mui/material/Button'

const Deal = (props) => {
	return (
		<Button
			onClick={props.handleDeal}
			disabled={
				props.readingConfig.index === props.readingConfig.indexMax
					? true
					: false
			}
			id="deal"
		>
			<img
				className="tarotCard"
				src={props.currentDeck.cardPreviews[0].imageUrl}
				alt={props.currentDeck.name}
			/>
		</Button>
	)
}

export default Deal
