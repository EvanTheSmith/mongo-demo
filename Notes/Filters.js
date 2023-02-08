async function grabResult() {
    const result = await ClassName

    .find({ tags: 'node' }) // filter for objects including the 'node' tag in their tags array
    .find({ price: { $gt: 10 } }) // captures all objects with a price "greater than" 10
    .find({ price: { $in: [10, 15, 20] } }) // captures objects that have exactly 10, 15 or 20 as price
    .limit(10) // would limit the results to 10
    .sort({ name: 1 }) // would sort by name in ascending order (-1 is desecending) 
    .select({ name: 1 }); // would only select name property from resulting object(s)

    console.log(result);
}