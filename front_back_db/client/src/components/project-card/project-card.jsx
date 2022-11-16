import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '../rating/rating';

export default function ProjectCard({ project }) {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`/api/${project.image}`}
          alt="project_image"
          sx={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', justifyContent: 'space-between'}}>
            {project.name}
            <Rating />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}