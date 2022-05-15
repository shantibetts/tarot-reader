import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'

const TarotCard = (props) => {
	if (props.card.name !== 'emptyCard') {
		return (
			<Grid item xs={props.span}>
				<Card sx={{ width: props.width, height: props.height }}>
					<CardActionArea onClick={() => props.handleDescription(props.card)}>
						<CardMedia
							component="img"
							image={props.card.url}
							alt={props.card.name}
						/>
					</CardActionArea>
				</Card>
			</Grid>
		)
	} else {
		return (
			<Grid item xs={props.span}>
				<Card sx={{ width: props.width, height: props.height }}>
					<CardActionArea>
						<CardContent />
					</CardActionArea>
				</Card>
			</Grid>
		)
	}
}

export default TarotCard
