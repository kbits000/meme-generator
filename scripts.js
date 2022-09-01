console.log("Hello World!");


async function f() {
    var fetchedData = await fetch ('https://api.imgflip.com/get_memes')
    console.log("fdfd " + fetchedData);

    let data = await fetchedData.json(); // read response body and parse as JSON
    console.log(data);
    console.log(data["data"]["memes"][0]);
}

f();