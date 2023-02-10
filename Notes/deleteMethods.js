async function deleteCourse(id) { // delete one course
    const result = await Course.deleteOne({ _id: id });
    console.log(result);
} deleteCourse('63e09c8c6c661c659810a2e0');

async function deleteCourses(id) { // delete many courses
    const course = await Course.deleteMany(id);
    console.log(course);
} deleteCourses('63e09c8c6c661c659810a2e0');

async function deleteCourseAndReturn(id) { // delete one course AND return course in the terminal
    const course = await Course.findByIdAndRemove({ _id: id });
    console.log(course);
} deleteCourseAndReturn('63e09c8c6c661c659810a2e0');