var localStorageName = "urls";

function loadUrls(){
  // fetch urls from text area and load them //
  var urls = localStorage[localStorageName];
  if (urls == undefined){
    urls = "";
  } else {
    urls = urls.split(",");
  }
  document.getElementById("urls").value = urls;
}

function addUrls () {
  var selector = document.getElementById("urls").value;
  localStorage.setItem("urls", selector);
}

document.getElementById("button").addEventListener("click", addUrls);
document.getElementById("button").addEventListener("click", loadUrls);
