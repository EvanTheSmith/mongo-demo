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

// Conditional Validation
const courseSchema3 = new mongoose.Schema({
    isPublished: Boolean,
    price: {
        type: Number,
        required: function() { return this.isPublished; } // price is required IF isPublished is true
    }
});