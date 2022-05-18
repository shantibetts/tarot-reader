import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const Title = (props) => {
	return (
		<Container sx={{ width: '90%' }}>
			<Typography variant="h2" sx={{ py: 3 }}>
				{props.title}
			</Typography>
			<hr style={{ width: '90%' }} />
			<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
				{props.text}
			</Typography>
		</Container>
	)
}

export default Title
