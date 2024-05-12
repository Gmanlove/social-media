// Import required modules
const express = require('express');
const ejs = require('ejs');

// Create an Express application
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route handler for rendering the index page
app.get('/', (req, res) => {
    // Assume you have logic here to fetch user data from a database or elsewhere
    const user = {
        notifications: 5,
        inbox: 10,
        // Other properties...
    };

    // Render the index.ejs template and pass the user object to it
    res.render('index', { user });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
