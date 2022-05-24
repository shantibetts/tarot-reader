import Title from './Title'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const About = (props) => {
	return (
		<div className="about">
			<Title
				title="About"
				text="Tarot Reader is a tool for both new and experienced Tarot readers. Providing the structure of basic Tarot readings and quick guides to the meanings of the positions of the cards and the meanings of the cards themselves, Tarot Reader doesn't create a Tarot reading so much as provide the tools for a reading."
			/>
			<br />
			<Typography variant="body2" sx={{ pt: 2, pb: 4 }}>
				Tarot Reader is copyright © 2021 Shanti Betts
			</Typography>
			<Button
				component={RouterLink}
				to="/"
				size="medium"
				variant="outlined"
				sx={{ m: 1 }}
			>
				Home
			</Button>
			<Button
				target={'_blank'}
				href={'https://shantibetts.github.io/Portfolio/'}
				size="medium"
				variant="outlined"
				sx={{ m: 1 }}
			>
				Portfolio
			</Button>
			<Button
				target={'_blank'}
				href={'https://github.com/shantibetts'}
				size="medium"
				variant="outlined"
				sx={{ m: 1 }}
			>
				GitHub
			</Button>
		</div>
	)
}

export default About
