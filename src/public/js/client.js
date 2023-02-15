// require('dotenv').config()


document.addEventListener('DOMContentLoaded', (e) => {
const button = document.querySelector('#submit')
const form = document.querySelector('#form')



       data = {
        "items": [
          {
            "sugar_g": 13.3,
            "fiber_g": 4,
            "serving_size_g": 283.495,
            "sodium_mg": 8,
            "name": "onion",
            "potassium_mg": 99,
            "fat_saturated_g": 0.1,
            "fat_total_g": 0.5,
            "calories": 126.7,
            "cholesterol_mg": 0,
            "protein_g": 3.9,
            "carbohydrates_total_g": 28.6
          },
          {
            "sugar_g": 2.6,
            "fiber_g": 1.2,
            "serving_size_g": 100,
            "sodium_mg": 4,
            "name": "tomato",
            "potassium_mg": 23,
            "fat_saturated_g": 0,
            "fat_total_g": 0.2,
            "calories": 18.2,
            "cholesterol_mg": 0,
            "protein_g": 0.9,
            "carbohydrates_total_g": 3.9
          }
        ]
      }
form.addEventListener('submit' , async(event) => {
    event.preventDefault();
    const container = document.querySelector('#container')
       const  query = 'tomato'
      


        container.innerHTML = `<div class='card' style={{width: '18rem'}}>
 
        ${data.items.map((element) => {
                    return (

                        `                     <div class='card-header'>${element.name}</div>
                        <ul class='list-group list-group-flush'>
                                    <ul class='list-group list-group-flush'>
                                    <li class='list-group-item'>calories:${element.calories}</li>
                        <li class='list-group-item'>fat_total_g:${element.fat_total_g}</li>
                        <li class='list-group-item'>protein_g:${element.protein_g}</li>
                        <li class='list-group-item'>carbohydrates_total_g:${element.carbohydrates_total_g}</li>
                        <li class='list-group-item'>serving_size_g:${element.serving_size_g}</li>
                        </ul>`
                    )
                    })}
        
      </div> `

        

    
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

    })
    


})