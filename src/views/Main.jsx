const React = require("react");
const Layout = require("./Layout");

const Main = () => {
  return (
    <Layout>
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
      </form>
      <br />
      <div id="container" style={{width: '18rem'}}>

      </div>
      {/* <div class='card' style={{width: '18rem'}}>
        <div class='card-header'>Featured</div>
        <ul class='list-group list-group-flush'>
          <li class='list-group-item'>calories:</li>
          <li class='list-group-item'>serving_size_g:</li>
          <li class='list-group-item'>A third item</li>
        </ul>
      </div> */}
    </Layout>
  );
};

module.exports = Main;
