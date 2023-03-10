const React = require("react");

const Layout = ({ children, username }) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"/>
        <script src="/js/client.js"/>
        <link rel="stylesheet" href="/css/index.css"/>
        <title>Just Calories</title>
      </head>
      <nav className="navbar navbar-expand-sm bg-light">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home Page
                </a>
              </li>
              {username ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/personal">
                      Personal Page
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/signout">
                      Sign out
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Hello, { username }
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/signin">
                      Sign in
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/signup">
                      Sign up
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>
      <body>
      {children}
      </body>
    </html>
  );
};

module.exports = Layout;