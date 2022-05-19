import emptyCard from '../Images/emptyCard.png'
import Button from '@mui/material/Button'

const TarotCard = (props) => {
	const handleDescription = (e) => props.handleDescription(e, props.card)

	const cardID = 'card' + props.index
	if (props.card.name !== 'emptyCard') {
		return (
			<Button onClick={handleDescription} id={cardID}>
				<img className="tarotCard" src={props.card.url} alt={props.card.name} />
			</Button>
		)
	} else {
		return (
			<Button onClick={handleDescription} id={cardID}>
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
