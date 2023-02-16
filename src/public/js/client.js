// require('dotenv').config()

document.addEventListener("DOMContentLoaded", (e) => {
  const button = document.querySelector("#submit");
  const form = document.querySelector("#form");
  // const sendButton = document.querySelector

  data = {
    items: [
      {
        sugar_g: 13.3,
        fiber_g: 4,
        serving_size_g: 283.495,
        sodium_mg: 8,
        name: "onion",
        potassium_mg: 99,
        fat_saturated_g: 0.1,
        fat_total_g: 0.5,
        calories: 126.7,
        cholesterol_mg: 0,
        protein_g: 3.9,
        carbohydrates_total_g: 28.6,
      },
      {
        sugar_g: 2.6,
        fiber_g: 1.2,
        serving_size_g: 100,
        sodium_mg: 4,
        name: "tomato",
        potassium_mg: 23,
        fat_saturated_g: 0,
        fat_total_g: 0.2,
        calories: 18.2,
        cholesterol_mg: 0,
        protein_g: 0.9,
        carbohydrates_total_g: 3.9,
      },
      {
        sugar_g: 2.6,
        fiber_g: 1.2,
        serving_size_g: 100,
        sodium_mg: 4,
        name: "tomato",
        potassium_mg: 23,
        fat_saturated_g: 0,
        fat_total_g: 0.2,
        calories: 18.2,
        cholesterol_mg: 0,
        protein_g: 0.9,
        carbohydrates_total_g: 3.9,
      },
      
    ],
  };
  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const container = document.querySelector("#container");
    const query = "tomato";

    // <div class="col-sm-3">
    //     <div class="quiz_card_area">
    //         <input class="quiz_checkbox" type="checkbox" id="1" value="1" checked="checked" />
    //         <div class="single_quiz_card">
    //             <div class="quiz_card_content">
    //                 <div class="quiz_card_icon">
    //                     <div class="quiz_icon quiz_icon1"></div>
    //                 </div><!-- end of quiz_card_media -->

    //                 <div class="quiz_card_title">
    //                         <h3><i class="fa fa-check" aria-hidden="true"></i> Title gose Here</h3>
    //                 </div><!-- end of quiz_card_title -->
    //             </div><!-- end of quiz_card_content -->
    //         </div><!-- end of single_quiz_card -->
    //     </div><!-- end of quiz_card_area -->
    // </div><!-- end of col3  -->


//     container.innerHTML = `
    
//     <div class="col-sm-12">
//       <div class="quiz_content_area">
//           <h1 class="quiz_title">Food data</h1>
//           <div class="row">
//               ${data.items
//                       .map((element) => {
//                         return `

//               <div class="col-sm-3">
//               <div class="quiz_card_area">
//                   <input class="quiz_checkbox" type="checkbox" id="1" value="1" checked="checked" />
//                   <div class="single_quiz_card">
//                       <div class="quiz_card_content">
//                           <div class="quiz_card_icon">
//                               <div class="quiz_icon quiz_icon1"></div>
//                           </div><!-- end of quiz_card_media -->
//                           <div class="quiz_card_title">
//                           <h3><i class="fa fa-check" aria-hidden="true"></i> ${element.name}</h3>
//                           </div><!-- end of quiz_card_title -->
//                           <p class="card-text"> ${element.calories}</p>
//                           <p class="card-text">${element.fat_total_g}</p>
//                           <p class="card-text"> ${element.protein_g}</p>
//                           <p class="card-text"> ${element.carbohydrates_total_g}</p>
//                           <p class="card-text"> ${element.serving_size_g}</p>
//                       </div><!-- end of quiz_card_content -->
//                   </div><!-- end of single_quiz_card -->
//               </div><!-- end of quiz_card_area -->
//           </div><!-- end of col3  -->

//                         `
//                       })
//                       .join(" ")}
//               <div class="col-sm-12">
//                   <div class="quiz_next">
//                       <button type="submit" class="quiz_continueBtn" id="continue">Continue</button>
//                   </div><!-- end of quiz_next -->
//               </div><!-- end of col12 -->

//           </div><!-- end of quiz_card_area -->
//       </div><!-- end of quiz_content_area -->

//   </div><!-- end of col12 -->
// </div><!-- end of row -->
// </div><!-- end of container -->
// </section><!-- end of quiz_section -->
    // `

    container.innerHTML = `
         
         <div class="row">
          
         
 
        ${data.items
          .map((element) => {
            return `
                        <div class="col">
                         <div class='card' style={{width: '18rem'}}>
                                            <div class='card-header'>${element.name}</div>
                        <ul class='list-group list-group-flush'>
                                    <ul class='list-group list-group-flush'>
                                    <li class='list-group-item'>calories:${element.calories}</li>
                        <li class='list-group-item'>fat_total_g:${element.fat_total_g}</li>
                        <li class='list-group-item'>protein_g:${element.protein_g}</li>
                        <li class='list-group-item'>carbohydrates_total_g:${element.carbohydrates_total_g}</li>
                        <li class='list-group-item'>serving_size_g:${element.serving_size_g}</li>
                        </ul>
                        </div> 
                        </div>
                        `;
          })
          .join(" ")}
        
                 
                
                 </div>
               
                 `;

    // try {

    //     const response = await fetch('https://api.calorieninjas.com/v1/nutrition?query=tomato' , {
    //         // credentials: 'include',
    //         // mode: 'no-cors',
    //         method: 'GET',
    //         headers: {
    //             'X-Api-Key': 'NlZvGvEqHd0KuM/4LLszow==59f1osjRjPQo7wmd',
    //             'Content-Type': 'application/json'

    //         },

    //     }) ;

    //     const result = await response.json()
    //     console.log(result.items[0])
    //     // const datForContainer = result.items.map((element) => {
    //     //     `<li class='list-group-item'>${element}</li>`
    //     // })
    //     // console.log(datForContainer)

    //     container.innerHTML = `<div class='card' style={{width: '18rem'}}>
    //     <div class='card-header'>${result.items[0].name}</div>
    //     <ul class='list-group list-group-flush'>
    //     <li class='list-group-item'>fat_total_g:${result.items[0].fat_total_g}</li>
    //     <li class='list-group-item'>protein_g:${result.items[0].protein_g}</li>
    //     <li class='list-group-item'>carbohydrates_total_g:${result.items[0].carbohydrates_total_g}</li>
    //     <li class='list-group-item'>serving_size_g:${result.items[0].serving_size_g}</li>
    //     </ul>
    //   </div> `

    // } catch (error) {
    //     console.log('error from event listner  =>>>' , error)
    // }
  });

  
  
  
  
  const send_btn = document.querySelector("#send_btn")
  
  send_btn?.addEventListener('click',async (event) => {
  console.log(data)
  const send = await fetch('\data' , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),

  })
  })
  
});
