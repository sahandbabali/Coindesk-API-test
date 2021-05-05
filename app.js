window.onload = getdata;

document.getElementById("fetchbut").addEventListener("click", getdata );

function getdata() {
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log();
    
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
          <td>${data.bpi.USD.code}</td>
          <td>${data.bpi.USD.rate}${data.bpi.USD.symbol}</td>
      
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>${data.bpi.EUR.code}</td>
          <td>${data.bpi.EUR.rate}${data.bpi.EUR.symbol}</td>
     
        </tr>
    
      </tbody>
    </table>
    
               
    
                      `;
        });
    }