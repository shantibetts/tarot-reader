import Title from './Title'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@mui/material/Button'

const About = (props) => {
	return (
		<div className="about">
			<Title
				title="About"
				text="Tarot Reader is a tool for both new and experienced Tarot readers. Providing the structure of basic Tarot readings and quick guides to the meanings of the positions of the cards and the meanings of the cards themselves, Tarot Reader doesn't create a Tarot reading so much as provide the tools for a reading."
			/>
			<br />
			<Button component={RouterLink} to="/" size="medium" variant="outlined">
				Home
			</Button>
		</div>
	)
}

export default About
