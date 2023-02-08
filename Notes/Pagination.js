async function grabResult() {
    const pageNumber = 2; // hard-coded value which would normally come from the URL or elsewhere
    const pageSize = 10; // hard-coded value which would normally come from the URL or elsewhere

    const result = await ClassName

    .skip((pageNumber -1) * pageSize) // skip method which is used for 'pagination'
    .limit(pageSize) // would limit the results to hard-coded pageSize

    console.log(result);
}