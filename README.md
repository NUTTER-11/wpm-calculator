Here’s a README file for your WPM Calculator application that includes information about its features, setup, and usage.

---

# WPM Calculator

A typing speed test application that calculates words per minute (WPM) based on user input. The app includes features like dynamic prompts, a countdown timer, a progress bar, and dark mode support.

## Features

- **Dynamic Prompts:** Users receive different prompts based on their chosen test duration (1 or 2 minutes).
- **Progress Bar:** Visual representation of the user's progress as they type.
- **Countdown Timer:** Shows how much time is left in the test.
- **Dark Mode Toggle:** Option to switch between light and dark themes.
- **WPM Calculation:** Calculates and displays typing speed in words per minute based on user input.

## Setup

To run this application locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/wpm-calculator.git
   cd wpm-calculator
   ```

2. **Install Dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Then, run:
   ```bash
   npm install
   ```

3. **Run the Application:**
   Start the development server with:
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Configuration

### Changing Prompts

Prompts are configured in the `prompts.js` file. You can modify the prompts based on different durations (1 minute, 2 minutes) by editing the `promptsByDuration` object.

### Themes

The application supports light and dark themes. You can toggle between them using the switch in the app bar. The theme is managed using MUI's `ThemeProvider` and `createTheme`.

## Usage

1. **Select Test Duration:**
   Choose the duration of the typing test (1 or 2 minutes) from the dropdown menu.

2. **Start Typing:**
   Type the provided prompt text in the text area. The progress bar will fill as you type, and the countdown timer will show how much time is left.

3. **Finish Test:**
   The test will automatically end when you complete the prompt or when the timer runs out. Your typing speed in WPM will be displayed.

4. **Try Again:**
   Click the "Try Again" button to reset the test and start over with a new prompt.

## Example

Here's a sample view of the WPM Calculator:

![WPM Calculator Screenshot](link-to-screenshot)

## Contributing

Feel free to submit issues or pull requests to contribute to the development of this application. For any questions or suggestions, please contact [your-email@example.com](mailto:your-email@example.com).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the information in this README file, including the repository URL, your email address, and any additional details specific to your project.
