import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'

const Description = (props) => {
	const handleExpandClick = () => {
		props.setExpanded(!props.expanded)
	}

	const card = props.description
	let cardDescription = ''
	let descriptionImage = ''
	if (!props.dialogOpen) {
		descriptionImage = (
			<img className="tarotCard" src={card.url} alt={card.name} />
		)
	}
	if (card && card.name !== 'emptyCard') {
		cardDescription = (
			<React.Fragment>
				{descriptionImage}
				<Typography variant="h4" sx={{ py: 2 }}>
					{card.name}
				</Typography>
				<Typography variant="body1" sx={{ py: 2 }}>
					{card.meaning_up}
				</Typography>
				<Collapse
					in={props.expanded}
					timeout="auto"
					unmountOnExit
					sx={{ p: 0 }}
				>
					<Divider variant="middle" />
					<Typography variant="body1" sx={{ py: 2 }}>
						{card.desc}
					</Typography>
				</Collapse>
				<Button
					expand={props.expanded ? 'true' : undefined}
					onClick={handleExpandClick}
					aria-expanded={props.expanded}
					aria-label="show more"
					size="small"
					sx={{ mb: 4, alignSelf: 'right' }}
				>
					{props.expanded ? 'Read Less' : 'Read More'}
				</Button>
			</React.Fragment>
		)
	}
	if (card) {
		return (
			<Container id="desc" sx={{ px: 1, py: 4 }}>
				<CssBaseline />
				<Typography variant="h4" sx={{ pt: 2 }}>
					{card.positionName}
				</Typography>
				<Typography variant="body1" sx={{ py: 4 }}>
					{card.positionDescription}
				</Typography>
				{cardDescription}
				<Container>
					<Button
						onClick={props.done}
						size="medium"
						variant="outlined"
						sx={{ m: 1 }}
					>
						Done
					</Button>
				</Container>
			</Container>
		)
	}
}

export default Description
