const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true }) // in a real app, this parameter should come from a configuration file
.then(() => console.log('Connected to MongoDB')) // log to console when successful
.catch((error) => console.log('Error: ', error.message)); // or log error if not

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
    name: 'Angular Course',
    author: 'Mosh',
    tags: ['angular', 'frontend'], // this complex value is only possible in a document/noSQL database like MongoDB
    isPublished: true
});
const result = await course.save(); // save to database asynchronously; use await to wait for result
console.log(result);
}

async function getCourses() {
    const courses = await Course // all courses
    .find()
    .countDocuments()
    console.log(courses);
} getCourses()