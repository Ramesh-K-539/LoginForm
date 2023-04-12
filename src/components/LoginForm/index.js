// Write your JS code here
import './index.css'

import {Component} from 'react'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: '', showSubmitError: false}

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitSuccessful = () => {
    const {history} = this.props

    history.replace('/')
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccessful()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsg, showSubmitError} = this.state
    return (
      <div className="login-form-container">
        <img
          className="login-logo"
          alt="website login"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        />
        <form className="form-container" onSubmit={this.onFormSubmit}>
          <img
            className="website-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <div className="bar-containers">
            <label className="label-text" htmlFor="nameInput">
              USERNAME
            </label>
            <input
              type="text"
              className="input-bar"
              id="nameInput"
              placeholder="Username"
              value={username}
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="bar-containers">
            <label className="label-text" htmlFor="passwordInput">
              PASSWORD
            </label>
            <input
              type="password"
              className="input-bar"
              id="passwordInput"
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
