/*
     File name: app.ejs
     Student's name: Sukhjinder Kaur
     Student ID: 301087895
     Date: 10/10/2020
*/

//IIFEE-Immediately Invoked Function Expresssion
(function (){
function Start(){
     console.log("Application started......");
     let deleteButtons = document.querySelectorAll('.btn-danger')

     for (button of deleteButtons) {
          button.addEventListener('click', (event) => {

               if (!confirm("Are you sure?")) {
                    event.preventDefault();
                    window.location.assign('/business-list');
               }
          });
     }
}
window.addEventListener("load", Start);
})();
