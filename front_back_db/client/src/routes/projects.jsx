import { useState } from 'react'; 
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ProjectCard from '../components/project-card/project-card';
import CreateProjectDialog from '../components/create-project-dialog/create-project-dialog';

const fabStyle = {
  position: 'fixed',
  bottom: 16,
  right: 16,
}

export default function Projects () {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        { 
          [1,2,3,4,5,6,7,8,9].map((project, index) => {
            return (
              <Grid item xs={3} sm={4} md={4} key={index}>
                <ProjectCard />
              </Grid>
            )
          })
        }
        <Fab 
          color="primary" 
          aria-label="add" 
          sx={fabStyle}
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
      </Grid>
      <CreateProjectDialog open={open} handleClose={handleClose}/>
    </>
  )
}