import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'

const TarotCard = (props) => {
	console.log(props)
	if (props.card.name) {
		return (
			<Card sx={{ width: '100px', height: '170px' }}>
				<CardActionArea>
					<CardMedia
						component="img"
						image={props.card.url}
						alt={props.card.name}
					/>
				</CardActionArea>
			</Card>
		)
	} else {
		return (
			<Card sx={{ width: '100px', height: '170' }}>
				<CardActionArea>
					<CardContent />
				</CardActionArea>
			</Card>
		)
	}
}

export default TarotCard
