import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

const ThreeCardBasic = (props) => {
	const allCards = props.allCards.map((card) => {
		return (
			<Card key={card.name_short}>
				<CardMedia component="img" image={card.url} alt={card.name} />
			</Card>
		)
	})
	return (
		<div className="threeCardBasic">
			<h1>3 Card Basic</h1>
			{allCards}
		</div>
	)
}

export default ThreeCardBasic
