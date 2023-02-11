// SYNCHRONOUS
const courseSchema4 = new mongoose.Schema({
    tags: {
        type: Array,
        validate: {
            validator: function(value) {
                return value && value.length>0;
            },
            message: 'a course must have at least one tag'
        }
    }
});

// A-SYNCHRONOUS
const courseSchema4 = new mongoose.Schema({
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function(value, callback) {
                setTimeout(() => {
                    // Async Code Goes Here
                    const result = value && value.length>0;
                    callback(result);
                }, 1000);
            },
            message: 'a course must have at least one tag'
        }
    }
});