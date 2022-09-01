console.log("Hello World!");


fetchedData = fetch ('https://api.imgflip.com/get_memes')
console.log(fetchedData);

fetchedData.then (
    function(result) { console.log("Promise has been resolved") },
    function(error) { /* handle an error */ }
);