console.log("Hello World!");


var imageObject;
var imageURL;
var fetchedData;
console.log("After declaring the 3 variables");

function fetchRandomImage () {
  let randomNum = Math.floor(Math.random() * 101);
  
  async function fetchImage() {
    var tempImageURL;
    let junk = await fetch('https://api.imgflip.com/get_memes')
    .then(response => {
      //handle response
      fetchedData = response.json();
      console.log(fetchedData);
      fetchedData.then((data) => {
          console.log(data);
          console.log("Image:");
          console.log(data["data"]["memes"]["0"]);
          imageObject = data["data"]["memes"]["0"];       // problem cannot assign global imageObject or imageURl
          console.log(imageObject);
          console.log(data["data"]["memes"]["0"]["url"]);
          imageURL = data["data"]["memes"]["0"]["url"];
          tempImageURL = data["data"]["memes"][randomNum.toString()]["url"];
          console.log(imageURL);
          console.log(tempImageURL);
          document.getElementById("meme").style.display = "inline";
          document.getElementById("meme").src = tempImageURL;
      });
    });
    //imageURL = tempImageURL;
    console.log(tempImageURL);
  }

  fetchImage();

};

console.log("After calling fetchImage function");






console.log("after fetchImage function");


document.getElementById("getMemeBtn").onclick = fetchRandomImage;

//console.log(imageObject);
//console.log(imageURL);
//console.log(fetchedData);