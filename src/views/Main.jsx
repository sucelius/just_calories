const React = require("react");
const Layout = require("./Layout");

const Main = ({username}) => {
  return (
    <Layout username={username}>
      <h1 className="row justify-content-center">Just Calories</h1>
      
      <div className="row justify-content-center">  
      <form action='/data' method='POST' id='form' style={{width: '50rem'}}>
        <div className='mb-3'>
          <label htmlFor='mealInput' className="row justify-content-center" >
          What did you eat today?
          </label>
          <input
            name='title'
            type='text'
            className='form-control'
            id='mealInput'
            required
          />
        </div>
        <div ></div>
        <div class="container text-center">
  <div class="row">
    <div class="col">
    <button type='submit' id='submit' className='btn btn-primary'>
          Check nutrition
        </button>
    </div>
    <div class="col">
    {username? (<button type="button" class="btn btn-success  justify-content-between" id ="send_btn">Save your meal</button>): (<span></span>)}
    </div>
  </div>
</div>
  
        
      </form>
       </div>
      <br />
      <div className="container text-center" id="container"  >
      {/* className="container mt-5"
      style={{width: '18rem'}} */}
      </div>
    </Layout>
  );
};

module.exports = Main;
