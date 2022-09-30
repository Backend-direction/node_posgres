import Box from '@mui/material/Box';
import './projects-board.css';
import CustomizedAccordions from './accordion'

export default function ProjectBoard () {
  return (
    <Box className='projects-board__container'>
      <CustomizedAccordions />
    </Box>
  )
}