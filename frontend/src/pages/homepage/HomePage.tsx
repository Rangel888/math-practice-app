import React from 'react';
import Cards from '../../components/MenuCard';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome, Guest</h1>
      <Cards 
        title="Apple Visualizer"
        description="Visualize multiplication and division operations using apples"
        emoji="🍎"
        onClick={() => navigate('/apple-visualizer')}
      />
    </div>
  );
};

export default HomePage;