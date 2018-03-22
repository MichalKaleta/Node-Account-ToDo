var req = new XMLHttpRequest();
var currentURL = window.location.pathname;
console.log(currentURL)
function makeRequest(id){
 
  var data =JSON.stringify({id: id})
  req.open('DELETE',  currentURL +'/delete', true); 
  req.setRequestHeader("Content-Type", "application/json");
  req.onreadystatechange = function () {
    
    if(req.readyState === XMLHttpRequest.DONE && req.status === 200) {
      
      window.location.replace(currentURL)
    }
  };

  req.send(data);
}