import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'

const Deal = (props) => {
	return (
		<Button
			onClick={props.handleDeal}
			disabled={props.threeCards.index === 3 ? true : false}
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
