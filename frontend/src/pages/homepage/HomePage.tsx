import React from 'react';
import Cards from '../../components/MenuCard';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import SettingsIcon from '@mui/icons-material/Settings';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome, Guest</h1>
      <Grid container spacing={1}>
        <Grid>
          <Cards 
            title="Apple Visualizer"
            description="Visualize multiplication and division operations using apples"
            icon="🍎"
            onClick={() => navigate('/apple-visualizer')}
          />
        </Grid>
        <Grid>
          <Cards 
            title="Problem Generator"
            description="Generate random math problems for practice"
            icon={
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ fontSize: '3rem' }}>➕➖✖️➗</span>
              </div>
            }
          />
        </Grid>
        <Grid>
          <Cards 
            title="Problem Settings"
            description="Set custom settings for Problem Generator"
            icon={
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <SettingsIcon sx={{ fontSize: 100 }} />
              </div>
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;