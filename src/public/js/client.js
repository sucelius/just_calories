// require('dotenv').config()

document.addEventListener("DOMContentLoaded", (e) => {
  const button = document.querySelector("#submit");
  const form = document.querySelector("#form");
  // const sendButton = document.querySelector
  const container = document.querySelector("#container");

 let data = []
  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = document.querySelector("#mealInput").value;
    console.log(query);

    try {
      const response = await fetch(
        "https://api.calorieninjas.com/v1/nutrition?query=" + query,
        {
          // credentials: 'include',
          // mode: 'no-cors',
          method: "GET",
          headers: {
            "X-Api-Key": "NlZvGvEqHd0KuM/4LLszow==59f1osjRjPQo7wmd",
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      console.log(result.items.length)
      

      if (result.items.length === 0 ) {
        container.innerHTML = ` <h3>Try to enter the correct name of the dish or product</h3>`
      } else {
        
        container.innerHTML = `
         
        <div class="row">
         
        

       ${result.items
         .map((element) => {
           return `
                       <div class="col">
                        <div class='card' style={{width: '18rem'}}>
                                           <div class='card-header'>${element.name}</div>
                    <ul class='list-group list-group-flush'>
                      <ul class='list-group list-group-flush'>
                        <li class='list-group-item'>Calories:${element.calories}</li>
                       <li class='list-group-item'>Fat:${element.fat_total_g} g</li>
                       <li class='list-group-item'>Protein:${element.protein_g} g</li>
                       <li class='list-group-item'>Carbohydrates:${element.carbohydrates_total_g} g</li>
                       <li class='list-group-item'>Size:${element.serving_size_g} g</li>
                       </ul>
                       </div> 
                       </div>
                       `;
         })
         .join(" ")}
       
                
               
                </div>
              
                `;
        
      }

      const send_btn = document.querySelector("#send_btn");
    
      send_btn?.addEventListener("click", async (event) => {
        console.log(result.items);
        try {
          const send = await fetch("data", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(result.items),
          });
          

          console.log( 'data' , send)
          container.innerHTML = `<h3>Saved, check your personal page<h/3>`
    
        } catch (error) {
          console.log('Save meal error =>> ' , error)
        }
      });
      
    } catch (error) {
      console.log("error from event listner  =>>>", error);
    }
  });

});
