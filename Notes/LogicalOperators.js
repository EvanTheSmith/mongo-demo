async function grabResult() {
    const result = await ClassName 
    .find() // grabs all objects from given Class

    .or([{ author: 'Mosh' }, { isPublished: true }]) // executes after find() and takes an array of 2 objects
    .and([ { author: 'Mosh', isPublished: true } ]) // executes after find() and takes array of one object

    console.log(result);
}