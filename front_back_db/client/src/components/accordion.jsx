import * as React from 'react';
import './accordion.css';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper': {
    borderRadius: '50%',
    border: '1px solid rgba(0,0,0, 0.54)',
    width: '25px',
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '& .MuiSvgIcon-root': {
    fill: 'inherit !important' 
  },
  '& .MuiAccordionSummary-expandIconWrapper:hover svg' : {
    fill: 'red !important'
  },
  '.MuiAccordionSummary-expandIconWrapper:hover': {
    border: '1px solid red',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions(props) {
  const { projects } = props;
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange =
    (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      {projects.map(story => {
        return (
        <Accordion key={story.id} expanded={expanded === story.id} onChange={handleChange(story.id)}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
              <Box className='progress'>23%</Box>
              <Typography>{story.name}</Typography>
            </Box>
            <Chip sx={{ mr: 1 }} label={story.project} variant="outlined" />
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
              <Box className='progress'>23%</Box>
              <Typography>{story.name}</Typography>
            </Box>
            <Chip sx={{ mr: 1 }} label={story.project} variant="outlined" />
          </AccordionDetails>
        </Accordion>
        )
      })}
    </div>
  );
}
