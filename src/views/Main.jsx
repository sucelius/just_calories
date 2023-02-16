const React = require("react");
const Layout = require("./Layout");

const Main = ({username}) => {
  return (
    <Layout username={username}>
      <h1>Main page</h1>
      <form action='/data' method='POST' id='form' style={{width: '18rem'}}>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Title
          </label>
          <input
            name='title'
            type='text'
            className='form-control'
            id='exampleInputEmail1'
          />
        </div>
        <button type='submit' id='submit' className='btn btn-primary'>
          Submit
        </button>
        {username? (<button type="button" class="btn btn-primary" id ="send_btn">Send to db</button>): (<span></span>)}
      </form>
      <br />
      <div className="container text-center" id="container"  >
      {/* className="container mt-5"
      style={{width: '18rem'}} */}
      </div>
    </Layout>
  );
};

module.exports = Main;
