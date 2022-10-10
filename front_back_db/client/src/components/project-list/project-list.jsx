import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ProjectCard from '../project-card/project-card';


const fabStyle = {
  position: 'fixed',
  bottom: 16,
  right: 16,
}

export default function ProjectList ({ projects, handleClickOpen }) {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      { 
        projects.map((project, index) => {
          return (
            <Grid item xs={3} sm={4} md={4} key={index}>
              <ProjectCard project={project} />
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
  )
}