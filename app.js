

document.getElementById("fetchbut").addEventListener("click", function() {
      fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(data => 
            {
                  console.log(data)
                  console.log()

                  document.getElementById("results").innerHTML="";

                  document.getElementById("results").innerHTML += 
                  `
                  <h1>${data.chartName}</h1>
                  <p>${data.time.updated}</p>



                  <div class="row alert alert-primary" role="alert">
                  <div class="col">
                  ${data.bpi.USD.code}${data.bpi.USD.symbol}:
                  </div>
                  <div class="col">
                  ${data.bpi.USD.rate}
                  </div>
                  </div>

                  <div class="row alert alert-primary" role="alert">
                  <div class="col">
                  ${data.bpi.EUR.code}${data.bpi.EUR.symbol}:
                  </div>
                  <div class="col">
                  ${data.bpi.EUR.rate}
                  </div>
                  </div>





                  `



                  
            }
            );


    });






