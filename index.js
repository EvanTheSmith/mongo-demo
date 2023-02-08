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
    .or([{ author: 'Mosh' }, { isPublished: true }]) // logical operator, executes after find() and takes an array of 2 objects
    // find({ tags: 'node' }) // filter for specific course(s)
    // .find({ price: { $gt: 10 } }) // theoretical find which would capture all courses with a price "greater than" 10
    // .find({ price: { $in: [10, 15, 20] } }) // captures courses that have exactly 10, 15 or 20 as price
    //.limit(10) // would limit the results to 10
    //.sort({ name: 1 }) // would sort by name in ascending order (-1 is desecending) 
    // .select({ name: 1 }); // would only select name property from resulting object(s)
    console.log(course);
}

getCourses();

// MongoDB Query Operators:
// $eq: (equal)
// $ne: (not equal)
// $gt: (greater than)
// $gte: (greater than OR equal)
// $lt: (less than)
// $lte: (less than OR equal)
// $in: (in)
// $nin: (not in)