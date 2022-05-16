const readingConfigs = () => {
	return [
		{
			name: 'Three Card Basic',
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
			description:
				'a simple reading, where the three cards represent the past, present and future',
			imageUrl:
				'https://via.placeholder.com/600x200?text=Three+Card+Basic+Reading',
			imageAlt: 'Three cards in a row'
		}
	]
}

export default readingConfigs
