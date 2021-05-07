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
          <td ><span class="colorchange" id="usdtable" >${newusp}  ${data.bpi.USD.symbol}</span></td>
      
        </tr>
        <tr>
          <th scope="row">2</th>
          <td >${data.bpi.EUR.code}</td>
          <td ><span class="colorchange" id="euptable">${neweup}  ${data.bpi.EUR.symbol}</span></td>
     
        </tr>
    
      </tbody>
    </table>
    
               
    
                      `;




if (newusp > oldusp) {

  let all = document.getElementsByClassName('colorchange');
  for (var i = 0; i < all.length; i++) {

    all[i].style.backgroundColor = "green";
    all[i].style.color = "white";

    setTimeout(() => {  all[i].style.backgroundColor = "white";
    all[i].style.color = "black";
  }, 1000);

  }





}



if (newusp < oldusp) {

  let all = document.getElementsByClassName('colorchange');
  for (var i = 0; i < all.length; i++) {

    all[i].style.backgroundColor = "red";
    all[i].style.color = "white";

    setTimeout(() => {  all[i].style.backgroundColor = "white";
    all[i].style.color = "black";
  }, 1000);

  }





}


oldusp = newusp;
oldeup = neweup;




    });


}
