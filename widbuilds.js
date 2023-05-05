
function scrolll(){
    var left = document.querySelector(".gallery");
    left.scrollBy(350,0)
  }
  function scrollr(){
    var right = document.querySelector(".gallery");
    right.scrollBy(-350,0)
  }
  
  const hamburger=document.querySelector(".hamburger")
  const nav_links=document.querySelector(".nav_links")
  hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    nav_links.classList.toggle("active");
  })
  
  document.querySelectorAll(".nlink").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    nav_links.classList.remove("active");
  }))
  /*
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  
  
  <div class="card" style="width: 18rem;">
      <img src="images/testimage.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">HEADER</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button>BUTTON</button>
      </div>
    </div>
    */