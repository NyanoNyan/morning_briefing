import "../style/style.css";

const SignIn = () => {
    return (
<>
  <title>Animated Login Form</title>
  <link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <img className="wave" src="img/wave.png" />
  <div className="container">
    <div className="img">
      <img src="img/bg.svg" />
    </div>
    <div className="login-content">
      <form action="index.html" method="post">
        <h2 className="title">Sign in</h2>
        <div className="input-div one">
          <div className="i">
            <i className="fas fa-user" />
          </div>
          <div className="div">
            <h5>Username</h5>
            <input type="text" className="input" />
          </div>
        </div>
        <div className="input-div pass">
          <div className="i">
            <i className="fas fa-lock" />
          </div>
          <div className="div">
            <h5>Password</h5>
            <input type="password" className="input" />
          </div>
        </div>
        <a className="forgot-password" href="#">Forgot Password?</a>
        <input type="submit" className="btn" defaultValue="login" />
        <a className="create-account" href="#">Don't have an account? </a>
      </form>
    </div>
  </div>
</>
    )
}

export default SignIn;