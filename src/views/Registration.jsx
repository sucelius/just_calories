const React = require('react');
const Layout = require('./Layout');

function Registraton({ username }) {
  return (
    <Layout username={username}>
      <div className="container mt-5" style={{width: '18rem'}}>
        <h2>Registration</h2>
        <form id="signupForm" method="POST" action="/signup">
          <div className="form-group">
            <label htmlFor="username">Login:</label>
            <input
              id="username"
              className="form-control"
              name="name"
              type="text"
              required
              pattern="[A-Za-z]\w+"
              minLength={4}
              title="Латинские буквы, цифры. Имя должно начинаться с буквы"
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
              minLength={3}
            />
          </div>
          <div className="form-group">
            <label htmlFor="height">Height:</label>
            <input
              id="height"
              className="form-control"
              name="height"
              type="number"
              required
            //   pattern="[A-Za-z]\w+"
            //   minLength={4}
              title="Латинские буквы, цифры. Имя должно начинаться с буквы"
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight:</label>
            <input
              id="weight"
              className="form-control"
              name="weight"
              type="number"
              required
            //   pattern="[A-Za-z]\w+"
            //   minLength={4}
              title="Латинские буквы, цифры. Имя должно начинаться с буквы"
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              id="age"
              className="form-control"
              name="age"
              type="number"
              required
            //   pattern="[A-Za-z]\w+"
            //   minLength={4}
              title="Латинские буквы, цифры. Имя должно начинаться с буквы"
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <input
              id="gender"
              className="form-control"
              name="gender"
              type="text"
              required
              pattern="[A-Za-z]\w+"
              minLength={4}
              title="Латинские буквы, цифры. Имя должно начинаться с буквы"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg">
          Signup
          </button>
        </form>
        {/*<script src='/js/signup.js'/>*/}
      </div>
    </Layout>
  );
}

module.exports = Registraton;