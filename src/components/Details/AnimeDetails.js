import Modal from '@mui/material/Modal';
import { Typography, Box, Button } from "@mui/material";

const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#c9c9bd',
    boxShadow: 24,
    p: 4,
    borderRadius: 20,
    textAlign: 'center'
  }

const AnimeDetailsModal = (props) => {
    const { open, onClose } = props
    return(<Modal open={open} onClose={onClose}>
        <Box sx={styles}>
          <Typography variant="h6">Details Coming soon</Typography>
          <Button onClick={onClose}>Close</Button>
        </Box>
      </Modal>
      )
}

export default AnimeDetailsModal