// MongoDB Query Operators:

let equal = { $eq: 'equal' }
let not_equal = { $ne: 'not equal'}
let greater_than = { $ge: 'greater than'}
let less_than = { $lt: 'less than'}
let less_than_OR_equal = { $lte: 'less than or equal to'}
let inside = { $in: 'in' }
let not_inside = { $nin: 'not in' }

// you would pass the object to a find() method, with the value being the value you're filtering by