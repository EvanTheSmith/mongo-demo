const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground') // in a real app, this parameter should come from a configuration file
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('Error: ', error.message));