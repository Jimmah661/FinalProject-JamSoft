import React from 'react';
import "./LoginPortal.css"
class LoginPortal extends React.Component {
    render () {
        return (
          <div id="loginField">
              <form>
                  <div className="form-group">
                    <label for='emailAddress'>Email Address</label>
                    <input type='email' className='form-control' id='emailAddress' placeholder='User.Name@jamSoft.com' />
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="**********" />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
              </form>
          </div>
        )
    }
}

export default LoginPortal;
