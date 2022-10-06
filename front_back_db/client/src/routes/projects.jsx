import { useState } from 'react'; 
import { useLoaderData } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ProjectCard from '../components/project-card/project-card';
import CreateProjectDialog from '../components/create-project-dialog/create-project-dialog';
import buildClient from '../api/buildClient';


export async function loader() {
  const client = buildClient();
  try {
    const { data } = await client.get('/api/v1/projects');

    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

const fabStyle = {
  position: 'fixed',
  bottom: 16,
  right: 16,
}

export default function Projects (props) {
  const projects = useLoaderData();
  console.log('projects', projects)
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addProject = () => {
    
  }
  
  return (
    <>
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
      <CreateProjectDialog open={open} handleClose={handleClose} addProject={addProject}/>
    </>
  )
}