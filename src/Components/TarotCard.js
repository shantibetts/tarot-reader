import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import emptyCard from '../Images/emptyCard.png'
import Button from '@mui/material/Button'

const TarotCard = (props) => {
	const cardID = 'card' + props.index
	if (props.card.name !== 'emptyCard') {
		return (
			<Button onClick={() => props.handleDescription(props.card)} id={cardID}>
				<img className="tarotCard" src={props.card.url} alt={props.card.name} />
			</Button>
		)
	} else {
		return (
			<Button onClick={() => props.handleDescription(props.card)} id={cardID}>
				<img
					className="tarotCard"
					src={emptyCard}
					alt={props.card.name}
					style={{ border: '1px solid black' }}
				/>
			</Button>
		)
	}
}

export default TarotCard
