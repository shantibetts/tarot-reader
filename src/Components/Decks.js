import TarotCard from './TarotCard'
import pamelaA from '../tarotDecks'

const Decks = () => {
	return (
		<div className="decks">
			<h1>Decks</h1>
			<TarotCard card={pamelaA[1]} />
			<TarotCard card={pamelaA[2]} />
		</div>
	)
}

export default Decks
