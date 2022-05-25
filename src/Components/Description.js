import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'

const Description = (props) => {
	const handleExpandClick = () => {
		props.setExpanded(!props.expanded)
	}

	const card = props.description
	let cardDescription = ''
	let descriptionImage = ''
	if (!props.dialogOpen) {
		descriptionImage = (
			<img className="tarotCard" src={card.imageUrl} alt={card.name} />
		)
	}
	if (card && card.name !== 'emptyCard') {
		cardDescription = (
			<React.Fragment>
				{descriptionImage}
				<Typography variant="h4">{card.name}</Typography>
				<div>
					<Typography variant="body1">{card.meaning_up}</Typography>
					<Collapse
						in={props.expanded}
						timeout="auto"
						unmountOnExit
						sx={{ p: 0 }}
					>
						<br />
						<Typography variant="body1">{card.desc}</Typography>
					</Collapse>
					<div className="alignRight">
						<Button
							expand={props.expanded ? 'true' : undefined}
							onClick={handleExpandClick}
							aria-expanded={props.expanded}
							aria-label="show more"
							size="small"
							sx={{ ml: 'auto' }}
						>
							{props.expanded ? 'Read Less' : 'Read More'}
						</Button>
					</div>
				</div>
			</React.Fragment>
		)
	}
	if (card) {
		return (
			<div id="desc" className="displayCard">
				<CssBaseline />
				<Typography variant="h4">{card.positionName}</Typography>
				<Typography variant="body1">{card.positionDescription}</Typography>
				{cardDescription}
				<div>
					<Button onClick={props.done} size="medium" variant="outlined">
						Done
					</Button>
				</div>
			</div>
		)
	}
}

export default Description
