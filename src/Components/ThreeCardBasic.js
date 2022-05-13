import Card from '@mui/material/Card'

const ThreeCardBasic = (props) => {
	const allCards = props.allCards.map((card) => {
		return (
			<Card key={card.name_short}>
				<img src={card.url} alt={card.name} />
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
