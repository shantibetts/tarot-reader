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
import Divider from '@mui/material/Divider'

const Description = (props) => {
	const handleExpandClick = () => {
		props.setExpanded(!props.expanded)
	}

	if (props.description.name !== 'emptyCard') {
		return (
			<React.Fragment>
				<CssBaseline />
				<Grid container spacing={2} sx={{ px: 0, py: 4 }}>
					<Grid item xs={12} md={6}>
						<Typography variant="h4" sx={{ pt: 2 }}>
							{props.description.positionName}
						</Typography>
						<Typography variant="body1" sx={{ py: 4 }}>
							{props.description.positionDescription}
						</Typography>
						<Divider variant="middle" className="smallDivider" />
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant="h4" sx={{ py: 2 }}>
							{props.description.name}
						</Typography>
						<Typography variant="body1" sx={{ py: 2 }}>
							{props.description.meaning_up}
						</Typography>
						<Collapse
							in={props.expanded}
							timeout="auto"
							unmountOnExit
							sx={{ p: 0 }}
						>
							<Divider variant="middle" sx={{ py: 2 }} />
							<Typography variant="body1" sx={{ py: 2 }}>
								{props.description.desc}
							</Typography>
						</Collapse>
						<Button
							expand={props.expanded ? 'true' : undefined}
							onClick={handleExpandClick}
							aria-expanded={props.expanded}
							aria-label="show more"
							size="small"
							sx={{ mb: 4 }}
						>
							{props.expanded ? 'Read Less' : 'Read More'}
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Button
							onClick={() => props.setDescription(null)}
							size="medium"
							variant="outlined"
							sx={{ m: 1 }}
						>
							Done
						</Button>
					</Grid>
				</Grid>
			</React.Fragment>
		)
	} else {
		return (
			<React.Fragment>
				<CssBaseline />
				<Container maxWidth="sm" sx={{ px: 0, py: 4 }}>
					<Typography variant="h4" sx={{ pt: 2, pb: 4 }}>
						{props.description.positionName}
					</Typography>
					<Typography variant="body1" sx={{ pb: 2 }}>
						{props.description.positionDescription}
					</Typography>
					<CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
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
	}
}

export default Description
