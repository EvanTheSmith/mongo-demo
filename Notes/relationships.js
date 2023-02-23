// References (Normalization)

let user = { id: "3", name: "Evan" }
let course = { name: "English", user_id: "3" }

// Embedded Documents (Denormalizatioj)

let course = { user: { name: "Evan" } } // user is embedded in a course

// Hybrid

let user = { id: "3", name: "Evan" } // assume this object has 50+ other properties too
let course = { name: "English", user: { id: "3", name: "Evan" } } // course has user's name, but has ID for all other properties