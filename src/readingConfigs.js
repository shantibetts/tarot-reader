const readingConfigs = () => {
	return {
		threeCardBasic: [
			[
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
			0
		]
	}
}

export default readingConfigs
