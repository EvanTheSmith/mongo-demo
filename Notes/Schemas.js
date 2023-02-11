// MongoDB does NOT care about validations; only Mongoose does

// NO VALIDATIONS ///////////////////////////////////////////////////////////
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

// CONDITIONAL VALIDATIONS //////////////////////////////////////////////////

// price required IF isPublished
const courseSchema3 = new mongoose.Schema({
    isPublished: Boolean,
    price: {
        type: Number,
        required: function() { return this.isPublished; }
    }
});

// category must be one of the values in the array
const courseSchema3 = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: ['one', 'two', 'three']
    }
});

// price must be no lower than 10 and no higher than 100
const courseSchema3 = new mongoose.Schema({
    category: {
        type: Number,
        required: true,
        min: 10,
        max: 100
    }
});