const tarotDecks = [
	{
		imageFetchUrls: {
			prepend: 'http://www.sacred-texts.com/tarot/pkt/img/',
			append: '.jpg'
		},
		cardPreviews: [
			{
				name: 'Verso',
				name_short: 'verso',
				imageUrl: 'https://www.sacred-texts.com/tarot/pkt/img/verso.jpg'
			},
			{
				name: 'The Magician',
				name_short: 'ar01',
				imageUrl: 'https://www.sacred-texts.com/tarot/pkt/img/ar01.jpg'
			}
		],
		name: 'Rider-Waite-Smith',
		descriptionShort:
			'The Rider-Waite-Smith deck, the classic Tarot deck from the early 1900s, with descriptions from the 1909 Pictoral Key to the Tarot.',
		description: `The best known Tarot deck is the Rider-Waite-Smith deck. There are
	hundreds of others, but the images of the RWS Tarot are the ones which
	are instantly recognizable. Holly Voley has graciously scanned a set
	of vintage Tarot cards for sacred-texts.com, the earliest in her
	collection, which are the images displayed here. These Tarot card images are unambiguously in the public
	domain in the United States, and differ only slightly from the US
	Games Tarot deck. This deck is the one known as the 'Pamela-A' deck
	with the dried mud pattern on the back of the cards.`,
		links: [
			{ name: 'Sacred-Texts', url: 'https://www.sacred-texts.com/tarot/' },
			{
				name: 'Purchase',
				url: 'https://www.amazon.com/Rider-Tarot-Arthur-Edward-Waite/dp/091386613X'
			},
			{
				name: 'Select'
			}
		]
	},
	{
		imageFetchUrls: {
			prepend: 'http://www.simplytarot.com/wp-content/uploads/2015/04/',
			append: '-tarot-card.png'
		},
		cardPreviews: [
			{
				name: 'Verso',
				name_short: 'verso',
				imageUrl: 'https://www.sacred-texts.com/tarot/pkt/img/verso.jpg'
			},
			{
				name: 'The Magician',
				name_short: 'ar01',
				imageUrl:
					'https://www.simplytarot.com/wp-content/uploads/2015/04/the-magician-tarot-card.png'
			}
		],
		name: 'Tarot House Deck',
		descriptionShort:
			'The Tarot House Deck is a lovely, handpainted deck graciously on loan from Patricia at SimplyTarot.com. The deck is matched with her own meanings of the cards.',
		description: `A beautifully hand painted deck, the Tarot House Deck has been graciously loaned to us from Patricia at SimplyTarot.com. A modern interpretation on these ancient cards, the Tarot House Deck is a joy to use, with it's bright images and wonderful descriptions. Some of the changes are subtle - for example, the star in the pentacles is six pointed instead of the traditional five - a small change intended to open the Tarot to all people, and to avoid the tendancy to link pendagrams with witchcraft.`,
		links: [
			{ name: 'SimplyTarot', url: 'https://www.simplytarot.com/' },
			{
				name: 'Purchase',
				url: 'https://www.simplytarot.com/shop/tarot-cards-for-sale/'
			},
			{
				name: 'Select'
			}
		]
	}
]

export default tarotDecks
