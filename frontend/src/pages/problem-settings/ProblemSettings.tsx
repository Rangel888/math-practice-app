import * as React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react'
import './ProblemSettings.scss'

const ProblemSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    mode: 'addition',
    difficulty: 'easy',
  });

  const handleChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="wrapper">
			<FormControl fullWidth sx={{ mt: 2 }}>
				<InputLabel id="mode-label">Select Mode</InputLabel>
				<Select
					labelId="mode-label"
					id="mode-select"
					name="mode"
					value={settings.mode}
					label="Select Mode"
					onChange={handleChange}
				>
					<MenuItem value="addition">Addition</MenuItem>
					<MenuItem value="subtraction">Subtraction</MenuItem>
					<MenuItem value="multiplication">Multiplication</MenuItem>
					<MenuItem value="division">Division</MenuItem>
					<MenuItem value="random">Random</MenuItem>
				</Select>
			</FormControl>

			<FormControl fullWidth sx={{ mt: 2 }}>
				<InputLabel id="difficulty-label">Select Difficulty</InputLabel>
				<Select
					labelId="difficulty-label"
					id="difficulty-select"
					name="difficulty"
					value={settings.difficulty}
					label="Select Difficulty"
					onChange={handleChange}
				>
					<MenuItem value="easy">Easy</MenuItem>
					<MenuItem value="medium">Medium</MenuItem>
					<MenuItem value="hard">Hard</MenuItem>
				</Select>
			</FormControl>
    </div>
  );
};

export default ProblemSettings;