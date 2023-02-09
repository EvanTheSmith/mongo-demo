async function updateCourse(id) { // Query First Approach
    const course = await Course.findById(id);
    if (!course) return;
    course.set({ isPublished: true, author: 'John Stamos' });
    const result = await course.save();
    console.log(result);
} updateCourse('63e09c8c6c661c659810a2e0');

async function updateCourse(id) { // Update First Approach
    const result = await Course.updateOne({ _id: id }, { $set: { author: 'Ricky Stadler', isPublished: false } });
    console.log(result);
} updateCourse('63e09c8c6c661c659810a2e0');

async function updateCourse(id) { // Update First Approach + grab course BEFORE edit
    const course = await Course.findByIdAndUpdate( id, { $set: { author: 'Shamus', isPublished: true } });
    console.log(course);
} updateCourse('63e09c8c6c661c659810a2e0');

async function updateCourse(id) { // Update First Approach + grab course AFTER edit
    const course = await Course.findByIdAndUpdate( id, { $set: { author: 'Shamus', isPublished: true } }, { new: true });
    console.log(course);
} updateCourse('63e09c8c6c661c659810a2e0');