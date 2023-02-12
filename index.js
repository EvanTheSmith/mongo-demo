const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true }) // in a real app, this parameter should come from a configuration file
.then(() => console.log('Connected to MongoDB')) // log to console when successful
.catch((error) => console.log('Error: ', error.message)); // or log error if not

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: String,
    category: {
        type: String,
        required: true,
        enum: ['one', 'two', 'three']
    },
    price: {
        type: Number,
        get: v => Math.round(v), // this one isn't working for unknown reasons
        set: v => Math.round(v)
    },
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema); // creates a class from the schema using mongoose

async function createCourse() {
const course = new Course({ // creates an individual course from the class
    name: 'Angular Course',
    category: 'one',
    price: '15.5',
    author: 'Evan',
    tags: ['SQL', 'backend'], // this complex value is only possible in a document/noSQL database like MongoDB
    isPublished: true
});
 try {
    const result = await course.save(); // save to database asynchronously; use await to wait for result
    console.log(result);
 }
 catch(exception) { // block is executed in event of validation error or any failure in try block
    for (error in exception.errors) {
        console.log(exception.errors[error].message);
    }
 }
}

async function getCourse(id) {
    const course = await Course.findById(id);
    console.log(course);
}

getCourse('63e829d051f2419124e7db98');