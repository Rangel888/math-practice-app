import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';

interface MenuCardProps {
  title: string;
  description: string;
  emoji?: string
  onClick?: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, description, emoji, onClick}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={onClick}>
        <Box
          sx={{
            height: 120,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '5rem',
            userSelect: 'none',
          }}
        >
          {emoji}
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{title}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MenuCard;