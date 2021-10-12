"use strict"

window.onload = () => {
  console.log("page loaded");
  //oefening 1 - 3
  let mytext = document.getElementById("myText");

  document.getElementById("form").addEventListener("submit", event => {
    event.prevaultDefault(); //zorgt ervoor dat de pagina niet refresht
    /*
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let order = document.getElementById("order").value;
    console.log(name);
    console.log(email);
    console.log(order);
    mytext.innerHTML = `The order for the customer ${name} is the following:  ${order}. The customer may be notified by email:  ${email}`;
    */
    //oefening 4 - 7
  
    let order = {
      name = document.getElementById("name").value,
      email = document.getElementById("email").value,
      order = document.getElementById("order").value
    }

    printOrder(order);

  })
  
  function printOrder(orderdetails) {
    let {name,email,order} = orderdetails;
    mytext.innerHTML = `The order for the customer ${name} is the following:  ${order}. The customer may be notified by email:  ${email}`;
  }
}