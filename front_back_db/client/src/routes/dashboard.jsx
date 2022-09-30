import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import ProjectBoard from '../components/projects-board';
import UpdateList from '../components/update-list';

export async function loader(params) {
  console.log('params',params)
  return [];
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3, height: '100%'  }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function Dashboard () {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{display: 'flex', height: 'calc(100vh - 112px)' }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Active Projects" />
            <Tab label="Messenger" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} style={{ height: 'calc(100% - 49px)' }}>
          <Box sx={{ display: 'flex', height: '100%' }}>
            <ProjectBoard></ProjectBoard>
            <UpdateList></UpdateList>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Here will messages
        </TabPanel>
      </Box>
    </div>
  )
}