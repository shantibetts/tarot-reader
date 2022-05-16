import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import CardContent from '@mui/material/CardContent'
import { useState } from 'react'

const Description = (props) => {
	const [expanded, setExpanded] = useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	if (props.description.name !== 'emptyCard') {
		return (
			<React.Fragment>
				<CssBaseline />
				<Container maxWidth="sm">
					<br />
					<hr style={{ width: '60%' }} />
					<Typography variant="h4">{props.description.positionName}</Typography>
					<Typography variant="p" gutterBottom>
						{props.description.positionDescription}
					</Typography>
					<hr style={{ width: '40%' }} />
					<br />
					<Typography variant="h4">{props.description.name}</Typography>
					<Typography variant="p">{props.description.meaning_up}</Typography>
					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<CardContent>
							<hr style={{ width: '40%' }} />
							<br />
							<Typography paragraph>{props.description.desc}</Typography>
						</CardContent>
					</Collapse>
					<hr style={{ width: '60%' }} />
					<br />
					<CardActions>
						<Button
							expand={expanded ? `${expanded}` : undefined}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label="show more"
							size="medium"
							variant="outlined"
						>
							{expanded ? 'Read Less' : 'Read More'}
						</Button>
						<Button
							onClick={() => props.setDescription(null)}
							size="medium"
							variant="outlined"
						>
							Done
						</Button>
					</CardActions>
				</Container>
			</React.Fragment>
		)
	} else {
		return (
			<React.Fragment>
				<CssBaseline />
				<Container maxWidth="sm">
					<br />
					<hr style={{ width: '60%' }} />
					<Typography variant="h4">{props.description.positionName}</Typography>
					<Typography variant="p" gutterBottom>
						{props.description.positionDescription}
					</Typography>
					<hr style={{ width: '60%' }} />
					<br />
					<Button
						onClick={() => props.setDescription(null)}
						size="medium"
						variant="outlined"
					>
						Done
					</Button>
				</Container>
			</React.Fragment>
		)
	}
}

export default Description
