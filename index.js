const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground') // in a real app, this parameter should come from a configuration file
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('Error: ', error.message));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema); // Paschal case (capitalized first letter)
const course = new Course({ // Camel Case (lowercase first letter)
    name: 'Node.js Course',
    author: 'Mosh',
    tags: ['node', 'backend'] // this complex value is only possible in a document/noSQL database like MongoDB
});