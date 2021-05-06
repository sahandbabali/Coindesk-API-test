var oldusp;
var oldeup;

var newusp;
var neweup;


window.onload = getdata;

window.setInterval(getdata, 5000);

function getdata() {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then((data) => {
       newusp = data.bpi.USD.rate;
       neweup = data.bpi.EUR.rate;

      

      document.getElementById("results").innerHTML = "";

      document.getElementById("results").innerHTML += `
                      <h1>${data.chartName}</h1>
                      <p>${data.time.updated}</p>
    
    
    
    
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Currency</th>
          <th scope="col">Price</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td  >${data.bpi.USD.code}</td>
          <td ><span id="usdtable" >${newusp}  ${data.bpi.USD.symbol}</span></td>
      
        </tr>
        <tr>
          <th scope="row">2</th>
          <td >${data.bpi.EUR.code}</td>
          <td ><span id="euptable">${neweup}  ${data.bpi.EUR.symbol}</span></td>
     
        </tr>
    
      </tbody>
    </table>
    
               
    
                      `;



                      // compare old and new values
if (newusp != oldusp) {
  document.getElementById("usdtable").style.backgroundColor = "green";
  document.getElementById("usdtable").style.color = "white";
  setTimeout(() => {  document.getElementById("usdtable").style.backgroundColor = "white";
  document.getElementById("usdtable").style.color = "black";
}, 1000);

}

if (neweup != oldeup) {
  document.getElementById("euptable").style.backgroundColor = "green";
  document.getElementById("euptable").style.color = "white";
  setTimeout(() => {  document.getElementById("euptable").style.backgroundColor = "white";
  document.getElementById("euptable").style.color = "black";
}, 1000);
}


  oldusp = newusp;
  oldeup = neweup;



    });


}
