const React = require("react");
const Layout = require("./Layout");

function Personal({ username , userProducts ,user }) {
  //JS Code
  console.log('data =>>>>>' , user )
    let currentDate = new Date().toJSON().slice(0, 10);
    let currentUserProduct = []
    if(userProducts.length !== 0){
         currentUserProduct = userProducts.map((element) => {
            if(element.createdAt.toJSON().slice(0, 10) === currentDate) {
                return element
            }
        })
    }
  
    const protein = currentUserProduct.map(element => element.protein).reduce((acc, el) => acc + el, 0)
    const fat = currentUserProduct.map(element => element.fat).reduce((acc, el) => acc + el, 0)
    const carbo = currentUserProduct.map(element => element.carbohydrates).reduce((acc, el) => acc + el, 0)
    const calories = currentUserProduct.map(element => element.calories).reduce((acc, el) => acc + el, 0)
    const caloriesForMan =  Math.round(88.6 + (13.4 * user.weight) + (4.8 * user.height) - (5.7 * user.age))
    const caloriesForWoman =  Math.round(447.6 + (9.2 * user.weight) + (3.1 * user.height) - (4.3* user.age))
    const proteinPerDay = Math.round((user.gender === 'male' ? caloriesForMan :caloriesForWoman) * 0.3 / 4 )
    const fatPerDay = Math.round((user.gender === 'male' ? caloriesForMan :caloriesForWoman)* 0.3 / 9 )
    const carbPerDay = Math.round((user.gender === 'male' ? caloriesForMan :caloriesForWoman)* 0.4 / 4 )
    const percentOfDayCalories = Math.round((calories / (user.gender === 'male' ? caloriesForMan :caloriesForWoman) ) * 100)
    const percentOfDayProtein  = Math.round((protein / proteinPerDay * 100))
    const percentOfDayFat  = Math.round((fat / fatPerDay * 100))
    const percentOfDayCarb  = Math.round((carbo / carbPerDay * 100))
    
    
  return (
    <Layout username={username}>
    
    <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
      <ul class="list-group list-group-flush">
    <li class="list-group-item">Age:{user.age}</li>
    <li class="list-group-item">Height:{user.height}</li>
    <li class="list-group-item">Weight:{user.weight}</li>
    <li class="list-group-item">Gender:{user.gender}</li>
  </ul>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <ul class="list-group list-group-flush">
    <li class="list-group-item">Required calories per day: {user.gender === 'male' ? caloriesForMan :caloriesForWoman }</li>
    <li class="list-group-item">Required protein per day: {proteinPerDay}</li>
    <li class="list-group-item">Required fat per day: {fatPerDay}</li>
    <li class="list-group-item">Required carbohydrates per day: {carbPerDay}</li>
  </ul>
      </div>
    </div>
  </div>
</div>
      


      <div class='container overflow-hidden text-center'>
        <div class='row gy-5'>
          <div class='col-6'>
          <div class='p-3'>
              <div class='p-3'>
              <div
                class='progress'
                role='progressbar'
                ria-label="Success example"
                aria-valuenow='0'
                aria-valuemin='0'
                aria-valuemax='100'
                style={{height: '30px'}}
              >
                <div class="progress-bar bg-success" style={{ width: percentOfDayProtein +"%" }}>
                <span style={{ "font-size": "1.2em" ,color:"white" , "font-weight": "bold"}}> Proteins : {userProducts.length === 0 ? 0 : protein}</span>
                </div>
                
              </div>
              </div>
            </div>
          </div>
          <div class='col-6'>
            <div class='p-3'>
              <div class='p-3'>
              <div
                class='progress'
                role='progressbar'
                aria-label="Info example"
                aria-valuenow='0'
                aria-valuemin='0'
                aria-valuemax='100'
                style={{height: '30px'}}
              >
                <div class="progress-bar bg-info" style={{ width: percentOfDayFat +"%" }}>
                <span style={{ "font-size": "1.2em" ,color:"white" , "font-weight": "bold"}}>Fat:{  userProducts.length === 0 ? 0 : fat}</span>
                 
                </div>
              </div>
              </div>
            </div>
          </div>
          <div class='col-6'>
            <div class='p-3'>
              <div class='p-3'>
              <div
                class='progress'
                role='progressbar'
                aria-label="Warning example"
                aria-valuenow='0'
                aria-valuemin='0'
                aria-valuemax='100'
                style={{height: '30px'}}
              >
                <div class="progress-bar bg-warning" style={{ width: percentOfDayCarb +"%" }}>
                <span style={{ "font-size": "1.2em" ,color:"white" , "font-weight": "bold"}}> Carbohydrates: {userProducts.length === 0 ? 0 : carbo  }</span>
                  
                </div>
              </div>
              </div>
            </div>
          </div>
          <div class='col-6'>
            <div class='p-3'>
            <div
                class='progress'
                role='progressbar'
                aria-label='Danger example'
                aria-valuenow='0'
                aria-valuemin='0'
                aria-valuemax='100'
                style={{height: '30px'}}
              >
                <div class="progress-bar bg-danger" style={{ width: percentOfDayCalories +"%" }}>
                <span style={{ "font-size": "1.2em" ,color:"white" , "font-weight": "bold"}}> Calories: {userProducts.length === 0 ? 0 :  calories}</span>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Personal;
