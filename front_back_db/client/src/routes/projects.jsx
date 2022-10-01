import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AbcIcon from '@mui/icons-material/Abc';
import BatteryCharging80Icon from '@mui/icons-material/BatteryCharging80';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
  '& .MuiSvgIcon-root': {
    fill: '#ff3d47 !important'
  },
});

export default function Projects () {
  const [value, setValue] = React.useState(2);
  const actions = [
    { icon: <AbcIcon sx={{fill: 'red !important'}} />, name: 'Name' },
    { icon: <CalendarMonthIcon sx={{fill: 'red !important'}} />, name: 'Date' },
    { icon: <StarBorderIcon sx={{fill: 'red !important'}} />, name: 'Rating' },
    { icon: <BatteryCharging80Icon sx={{fill: 'red !important'}} />, name: 'Progress' },
  ];


  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        { 
          [1,2,3,4,5,6,7,8,9].map((project, index) => {
            return (
              <Grid item xs={3} sm={4} md={4} key={index}>
                <Card sx={{ maxWidth: 345, minWidth: 200 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="./contemplative-reptile.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', justifyContent: 'space-between'}}>
                        Lizard
                        <StyledRating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            )
          })
        }
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<FilterAltIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
          />
        ))}
      </SpeedDial>
    </Grid>
  )
}