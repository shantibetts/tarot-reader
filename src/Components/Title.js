import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const Title = (props) => {
	return (
		<Container sx={{ width: '90%' }}>
			<br />
			<Typography variant="h2">{props.title}</Typography>
			<br />
			<hr style={{ width: '90%' }} />
			<br />
			<Typography variant="body1">{props.text}</Typography>
			<br />
		</Container>
	)
}

export default Title
