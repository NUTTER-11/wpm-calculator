import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Typography, TextField, Button, Paper, MenuItem, Select, InputLabel, FormControl, LinearProgress, Switch, AppBar, Toolbar } from '@mui/material';
import { promptsByDuration } from './prompts';

const getRandomPrompt = (duration) => {
  const prompts = promptsByDuration[duration];
  const randomIndex = Math.floor(Math.random() * prompts.length);
  return prompts[randomIndex];
};

const WPMCalculator = () => {
  const [text, setText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [wpm, setWPM] = useState(null);
  const [promptText, setPromptText] = useState("");
  const [duration, setDuration] = useState(1);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setPromptText(getRandomPrompt(duration));
    setProgress(0);
    setTimeLeft(duration * 60);
  }, [duration]);

  useEffect(() => {
    if (text.length === 1 && !startTime) {
      setStartTime(new Date());
    }
  }, [text, startTime]);

  useEffect(() => {
    const progressPercentage = (text.length / promptText.length) * 100;
    setProgress(progressPercentage);
  }, [text, promptText.length]);

  useEffect(() => {
    if (startTime && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleFinish();
    }
  }, [startTime, timeLeft]);

  const handleChange = (e) => {
    setText(e.target.value);

    if (e.target.value === promptText) {
      handleFinish();
    }
  };

  const handleFinish = () => {
    const currentTime = new Date();
    setEndTime(currentTime);

    const timeTaken = (currentTime - startTime) / 1000 / 60;
    const wordCount = promptText.split(' ').length;
    const wpmCalc = Math.round(wordCount / timeTaken);
    setWPM(wpmCalc);
    setTimeLeft(0);
  };

  const resetTest = () => {
    setText("");
    setStartTime(null);
    setEndTime(null);
    setWPM(null);
    setPromptText(getRandomPrompt(duration));
    setProgress(0);
    setTimeLeft(duration * 60);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            WPM Calculator
          </Typography>
          <Switch checked={darkMode} onChange={toggleDarkMode} color="default" />
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
        <Paper elevation={3} style={{ padding: '1rem' }}>
          <Typography variant="h5" gutterBottom>
            Select Test Duration:
          </Typography>
          <FormControl fullWidth style={{ marginBottom: '1rem' }}>
            <InputLabel>Duration</InputLabel>
            <Select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              label="Duration"
            >
              <MenuItem value={1}>1 Minute</MenuItem>
              <MenuItem value={2}>2 Minutes</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h5" gutterBottom>
            Type the following text:
          </Typography>
          <Typography variant="body1" paragraph>
            {promptText}
          </Typography>
          <LinearProgress variant="determinate" value={progress} style={{ marginBottom: '1rem' }} />
          <Typography variant="h6" color={timeLeft <= 10 ? "error" : "textPrimary"} gutterBottom>
            Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={5}
            variant="outlined"
            value={text}
            onChange={handleChange}
            disabled={wpm !== null || timeLeft === 0}
          />
          {wpm !== null && (
            <div style={{ marginTop: '1rem' }}>
              <Typography variant="h6">
                Your typing speed is {wpm} words per minute.
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={resetTest} 
                style={{ marginTop: '1rem' }}
              >
                Try Again
              </Button>
            </div>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default WPMCalculator;
