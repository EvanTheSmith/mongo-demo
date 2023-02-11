// MongoDB does NOT care about validations; only Mongoose does

// No Validations
const courseSchema1 = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

// Validation on Name
const courseSchema2 = new mongoose.Schema({
    name: { type: String, required: true }, // pass object instead of value
});

// Conditional Validations

// price required IF isPublished
const courseSchema3 = new mongoose.Schema({
    isPublished: Boolean,
    price: {
        type: Number,
        required: function() { return this.isPublished; }
    }
});

// price required IF isPublished
const courseSchema3 = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: ['one', 'two', 'three']
    }
});