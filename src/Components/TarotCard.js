import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import emptyCard from '../Images/emptyCard.png'
import Button from '@mui/material/Button'

const TarotCard = (props) => {
	if (props.card.name !== 'emptyCard') {
		return (
			<Grid item xs={props.span}>
				<Button
					onClick={() => props.handleDescription(props.card)}
					id="noPadding"
				>
					<img
						className="tarotCard"
						src={props.card.url}
						alt={props.card.name}
					/>
				</Button>
			</Grid>
		)
	} else {
		return (
			<Grid item xs={props.span}>
				<Button
					onClick={() => props.handleDescription(props.card)}
					id="noPadding"
				>
					<img
						className="tarotCard"
						src={emptyCard}
						alt={props.card.name}
						style={{ border: '1px solid black' }}
					/>
				</Button>
			</Grid>
		)
	}
}

export default TarotCard
