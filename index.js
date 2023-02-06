const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true }) // in a real app, this parameter should come from a configuration file
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('Error: ', error.message));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema); // creates a class from the schema using mongoose

async function createCourse() {
const course = new Course({ // creates an individual course from the class
    name: 'Node.js Course',
    author: 'Mosh',
    tags: ['node', 'backend'], // this complex value is only possible in a document/noSQL database like MongoDB
    isPublished: true
});
const result = await course.save(); // save to database asynchronously; use await to wait for result
console.log(result);
}

createCourse();