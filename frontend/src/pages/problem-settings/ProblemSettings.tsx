import * as React from 'react';
import { ChangeEvent } from 'react'
import { FormControl, InputLabel, Select, MenuItem, TextField} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react'
import './ProblemSettings.scss'

const ProblemSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    mode: 'addition',
    difficulty: 'easy',
		numProblems: 1,
		useRemainders: false,
		soundEffects: false
  });

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

	const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		let parsed = parseInt(value)
		
		if (parsed < 1) parsed = 1;
    if (parsed > 10) parsed = 10;
		setSettings((prev) => ({
      ...prev,
      [name]: parsed,
    }));
	}

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
					onChange={handleSelectChange}
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
					onChange={handleSelectChange}
				>
					<MenuItem value="easy">Easy</MenuItem>
					<MenuItem value="medium">Medium</MenuItem>
					<MenuItem value="hard">Hard</MenuItem>
				</Select>
			</FormControl>

			<TextField
        label="Number of Problems"
        type="number"
				name="numProblems"
        value={settings.numProblems}
        onChange={handleNumberChange}
        inputProps={{ min: 1, max: 10 }}
        fullWidth
        sx={{ mt: 2 }}
      />
    </div>
  );
};

export default ProblemSettings;