// No Validations

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

// Validation on Name

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true }, // pass object instead of value
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});