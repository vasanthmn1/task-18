
let div = document.createElement("div")
div.classList.add("container");
let row = document.createElement("div")
row.classList.add("row", "bg-dark")
div.append(row)


async function restcountery() {
  let url = await fetch("https://restcountries.com/v2/all")
  let data1 = await url.json()
  console.log(data1);


  let crerr = document.createElement("span")
  let Latlng = document.querySelector(".Latlng")
  console.log(Latlng);


  for (var i = 0; i < data1.length; i++) {

    if (data1[i].latlng == undefined) {
      console.log("err");
      data1[i] = "heloo"
      console.log(Latlng);
    } else {

      console.log("ok");
    }

    row.innerHTML += `<div class=" text-center col-lg-4 mb-5 col-md-12">
  <div class="card m-4 h-100 ">
      <div class="card-header py-3 bg-black text-white">
      ${data1[i].name}
      </div>
      <div class="card-body card1 text-white ">
      <div class="h-50 border border-primary">
      <img src=${data1[i].flag} class="img-fluid px-3  my-4" alt="..." style=width:250px;height:150px;>
      </div>
          <h6>Capital: ${data1[i].capital}</h6>
          <h6>Region: ${data1[i].region}</h6>
          <h6>Country code: ${data1[i].alpha3Code}</h6>
          <h6 class ="Latlng">Latlng: ${data1[i].latlng[0]} , ${data1[i].latlng[1]}</h6>
          <button class="btn text-white">click for Weather</button>
      </div>
      </div>
      </div>
  </div> `;

    document.body.append(div);
  }
  btnadd()
}
restcountery()



