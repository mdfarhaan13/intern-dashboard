# intern-dashboard
This project is a full-stack web application featuring an intern performance dashboard. The application is built with a Node.js Express backend that serves data from a local JSON file and a React frontend that consumes and displays this data in a clean, responsive user interface.
Key Features:

Dummy Login Page: A simple, unauthenticated login screen to simulate a user's entry point.

Dynamic Dashboard: A single-page dashboard displaying key metrics like donations raised, rewards progress, and a leaderboard.

REST API: A lightweight Node.js API to provide the application data.

JSON Data Storage: The backend reads data from a local interns.json file, making it easy to update without code changes.

Screenshots
Here are two mock screenshots to give you a visual idea of the application.

Login Page
A clean, centered login page with input fields for a username and password, along with a "Login" button.

Dashboard
The main dashboard page, showing the intern's name, referral code, and total donations. On the right, a scrollable leaderboard ranks other interns by donations raised.

Getting Started
Follow these steps to set up and run the project on your local machine.

Prerequisites
Node.js (version 14 or higher)

npm (comes with Node.js)

1. Clone the Repository
Bash

git clone https://github.com/your-username/intern-dashboard-project.git
cd intern-dashboard-project
2. Set Up the Backend
The backend serves the data for the application.

Bash

# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Start the server. The API will be available at http://localhost:3001
npm start
Note: The server must be running for the frontend to function.

3. Set Up the Frontend
The frontend is the React application that you will see in your browser. Open a new terminal window for this step.

'''Bash'''

# Navigate to the frontend directory
cd ../frontend

# Install dependencies
npm install

# Start the React development server. It will open in your browser at http://localhost:3000
npm start
The application will now be fully functional.
