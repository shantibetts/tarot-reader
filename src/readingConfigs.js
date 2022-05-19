import ThreeCardBasic from './Images/ThreeCardBasic.png'
import FiveCardSpread from './Images/FiveCardSpread.png'

const readingConfigs = () => {
	return [
		{
			name: 'Three Card Spread',
			path: '/threecardspread',
			reading: [
				{
					name: 'emptyCard',
					name_short: 'ec1',
					positionName: 'The Past',
					positionDescription: `This card represents the qurant's past, as it relates to the question asked in this reading`
				},
				{
					name: 'emptyCard',
					name_short: 'ec2',
					positionName: 'The Present',
					positionDescription: `This card represents the qurant's present, as it relates to the question asked in this reading`
				},
				{
					name: 'emptyCard',
					name_short: 'ec3',
					positionName: 'The Future',
					positionDescription: `This card represents the qurant's future, as it relates to the question asked in this reading`
				}
			],
			index: 0,
			indexMax: 3,
			description:
				'A simple reading, where the three cards represent the past, present and future',
			imageUrl: ThreeCardBasic,
			imageAlt: 'Three cards in a row'
		},
		{
			name: 'Five Card Spread',
			path: '/fivecardspread',
			reading: [
				{
					name: 'emptyCard',
					name_short: 'ec1',
					positionName: 'The Situation',
					positionDescription: `This card represents the qurant's situation, and can give insight into the hidden details of the situation.`
				},
				{
					name: 'emptyCard',
					name_short: 'ec2',
					positionName: 'Influences',
					positionDescription: `This card represents the influences on both the qurant and the situation`
				},
				{
					name: 'emptyCard',
					name_short: 'ec3',
					positionName: 'Challenges',
					positionDescription: `This card represents the challenges the qurant will face due to the situation`
				},
				{
					name: 'emptyCard',
					name_short: 'ec4',
					positionName: 'Final Outcome',
					positionDescription: `This card represents the most likely outcome of the situation`
				},
				{
					name: 'emptyCard',
					name_short: 'ec5',
					positionName: 'Theme',
					positionDescription: `This card represents the theme of the situation, and the surrounding cards should be interpreted with this card in mind`
				}
			],
			index: 0,
			indexMax: 5,
			description:
				'A more complex reading, used to gain insite into a situation.',
			imageUrl: FiveCardSpread,
			imageAlt: 'Four cards in a square around a central card'
		}
	]
}

export default readingConfigs
