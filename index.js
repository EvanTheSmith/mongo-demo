const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground') // in a real app, this parameter should come from a configuration file
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('Error: ', error.message));

const course = {
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
};

const courseSchema = new mongoose.Schema(course);