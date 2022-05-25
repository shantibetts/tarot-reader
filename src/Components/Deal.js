import Button from '@mui/material/Button'
import { useContext } from 'react'

const Deal = (props) => {
	return (
		<Button
			onClick={props.handleDeal}
			disabled={
				props.readingCards.index === props.readingCards.indexMax ? true : false
			}
			id="deal"
		>
			<img
				className="tarotCard"
				src={props.currentDeck.cardPreviews[0].url}
				alt={props.currentDeck.name}
			/>
		</Button>
	)
}

export default Deal
