import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { Typography } from '@mui/material';
import './update-list.css';
import BadgeAvatar from './avatar/avatar';

export default function UpdateList (props) {
  // const { lastUpdates } = props;
  return (
    <Stack direction="column" spacing={2} className='update-list__container'>
      {
        ['1', 2].map(item => {
          return (
          <Box className='update-list__item'>
            <BadgeAvatar></BadgeAvatar>
            <Box>
              <Box className='update-list__name'>
                <Typography variant="caption" color="text.secondary">
                  <Typography variant="caption" component="body1" fontWeight="bold">
                    Mark P.
                  </Typography>
                  add an image into wordla
                </Typography>
              </Box>
              <Box className='update-list__time'>
                <Typography variant="caption" color="text.secondary">
                  TODAY, 10:30 PM
                </Typography>
              </Box>
            </Box>
          </Box>
          )
        })
      }
    </Stack>
  )
}