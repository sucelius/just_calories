const React = require('react');
const Layout = require('./Layout');

function Login({ username, name }) {
  //JS Code

  return (
    <Layout username={username}>
      <div className="container mt-5" style={{width: '18rem'}}>
        <h2>Sign in</h2>
        <form id="signinForm" method="POST" action="/signin">
          <div className="form-group">
            <label htmlFor="username">Name:</label>
            <input
              id="username"
              className="form-control"
              name="name"
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              className="form-control"
              name="password"
              type="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-light">
            Go!
          </button>
        </form>
        {/*<script src="/js/signin.js" />*/}
      </div>
    </Layout>
  );
}

module.exports = Login;