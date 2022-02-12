import {Component} from 'react'
import Password from '../Password'
import './index.css'

const list = [
  {
    website: 'youtube.com',
    username: 'srikanth',
    password: '125hyt',
  },
]

class Passwordmanager extends Component {
  state = {initiallist: list}

  render() {
    const {initiallist} = this.state
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="logo"
          alt="app logo"
        />
        <div className="uppercontainer">
          <div className="inputcontainer">
            <h2 className="heading">Add New Password</h2>
            <div className="websitecontainer">
              <div className="websiteimgcontainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="websiteimg"
                  alt="website"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Website"
                className="inputwebsite"
              />
            </div>
            <div className="usernamecontainer">
              <div className="usernameimgcontainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="usernameimg"
                  alt="username"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Username"
                className="inputusername"
              />
            </div>
            <div className="passwordcontainer">
              <div className="passwordimgcontainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="passwordimg"
                  alt="password"
                />
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                className="inputpassword"
              />
            </div>
            <div className="buttoncontainer">
              <button type="button" className="button">
                Add
              </button>
            </div>
          </div>
          <div className="imagecontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="passwordmanagerimg"
            />
          </div>
        </div>
        <div className="lowercontainer">
          <div className="lowerheadingdiv">
            <div className="headingcountdiv">
              <h3 className="yourpassword">Your Passwords</h3>
              <div className="count">2</div>
            </div>
            <div className="searchbarcontainer">
              <div className="searchimgcontainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="searchimg"
                />
              </div>

              <input type="search" placeholder="Search" className="searchbar" />
            </div>
          </div>
          <div className="checkboxcontainer">
            <input type="checkbox" className="checkbox" />
            <span className="passwordshowcheckbox">Show passwords</span>
          </div>
          <ul className="unorderedlist">
            {initiallist.map(eachlist => (
              <Password lists={eachlist} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Passwordmanager
