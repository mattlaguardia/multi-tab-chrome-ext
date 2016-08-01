var localStorageName = "urls";

function loadUrls(){
  // fetch urls from text area and load them //
  var urls = localStorage[localStorageName];

  if(urls == undefined){
    urls = "";
  } else {
    urls = JSON.parse(urls);
  }

  document.getElementById("urls").value = urls;

}
function saveUrls(){
  // fetch urls and save it in chrome storage //
  var str = document.getElementById("urls").value;
  var urls = str.slit(/\r\n?/g);

  localStorage[localStorageName] = JSON.stringify(urls);
}

document.getElementById("button").addEventListener("click", loadUrls);
document.getElementById("button").addEventListener("click", saveUrls);
