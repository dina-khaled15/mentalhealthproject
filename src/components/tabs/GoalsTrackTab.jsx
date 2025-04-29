import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  Checkbox,
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function GoalsTrackTab() {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');

  const addGoal = () => {
    if (newGoal.trim()) {
      setGoals([...goals, { text: newGoal, completed: false }]);
      setNewGoal('');
    }
  };

  const toggleGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].completed = !updatedGoals[index].completed;
    setGoals(updatedGoals);
  };

  const chartData = {
    labels: goals.map((_, index) => `Goal ${index + 1}`),
    datasets: [
      {
        label: 'Goals Completed',
        data: goals.map((goal) => (goal.completed ? 1 : 0)),
        fill: false,
        borderColor: '#000',
        tension: 0.4,
      },
    ],
  };

  return (
    <Box sx={{ p: 5, borderRadius: 3, boxShadow: 3, mx: 'auto', Width: '100%' ,height: '100%'}}>
      <Typography variant="h5" fontWeight="bold" mb={4}>
        Goals Tracker
      </Typography>

      {/* Input */}
      <Box sx={{ display: 'flex', gap: 2, mb: 4 ,color:'black'}}>
        <TextField
          fullWidth
          label="Enter your goal..."
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          variant="outlined"
        />
        <Button variant="contained" onClick={addGoal} color='black'>
          Add
        </Button>
      </Box>

      {/* Content Layout: Goals Right, Chart Left */}
      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        {/* Chart (Left) */}
        <Box sx={{ flex: 1, minWidth: 300 }}>
          <Typography variant="h6" mb={2}>
            Progress Chart
          </Typography>
          <Line data={chartData} />
        </Box>

        {/* Goals List (Right) */}
        <Box sx={{ flex: 1, minWidth: 300 }}>
          <Typography variant="h6" mb={2}>
            Your Goals
          </Typography>
          <List>
            {goals.map((goal, index) => (
              <ListItem
                key={index}
                sx={{
                  bgcolor: goal.completed ? 'success.light' : '#f2f0e9',
                  borderRadius: 2,
                  mb: 1,
                  transition: 'background-color 0.3s',
                  '&:hover': {
                    bgcolor: goal.completed ? 'success.main' : '#e0ddd4',
                  },
                }}
              >
                <Checkbox
                  checked={goal.completed}
                  onChange={() => toggleGoal(index)}
                  sx={{ mr: 2 }}
                />
                <ListItemText
                  primary={goal.text}
                  sx={{
                    textDecoration: goal.completed ? 'line-through' : 'none',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}
