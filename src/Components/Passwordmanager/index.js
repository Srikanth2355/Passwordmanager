import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import Password from '../Password'
import './index.css'

const list = []

class Passwordmanager extends Component {
  state = {
    initiallist: list,
    inputwebsite: '',
    inputusername: '',
    inputpassword: '',
    showpassword: false,
    search: '',
  }

  websitename = e => {
    this.setState({inputwebsite: e.target.value})
  }

  username = e => {
    this.setState({inputusername: e.target.value})
  }

  password = e => {
    this.setState({inputpassword: e.target.value})
  }

  imagecontainer = () => {
    // eslint-disable-next-line
    const {initiallist} = this.state
    return (
      <div className="nopasswordcontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          className="Nopasswordimg"
          alt="no passwords"
        />
        <p className="nopasswords">No Passwords Saved Yet.</p>
      </div>
    )
  }

  senddata = () => {
    const {inputwebsite, inputusername, inputpassword} = this.state
    if (inputwebsite === '' || inputusername === '' || inputpassword === '') {
      alert('website,username,password are manadatory')
    } else {
      const newlist = {
        id: uuidv4(),
        inputwebsite,
        inputusername,
        inputpassword,
      }
      this.setState(prevstate => ({
        initiallist: [...prevstate.initiallist, newlist],
        inputwebsite: '',
        inputusername: '',
        inputpassword: '',
      }))
    }
  }

  delete = id => {
    const {initiallist} = this.state
    const finallist = initiallist.filter(eachlist => eachlist.id !== id)
    this.setState({
      initiallist: finallist,
    })
  }

  checkboxclicked = () => {
    this.setState(prevstate => ({
      showpassword: !prevstate.showpassword,
    }))
  }

  search = e => {
    // const {initiallist} = this.state
    const searchitem = e.target.value.toLowerCase()

    this.setState({search: searchitem})
  }

  renderlist = () => {
    const {showpassword, initiallist, search} = this.state
    const finallist = initiallist.filter(eachlist =>
      eachlist.inputwebsite.toLowerCase().includes(search),
    )
    return finallist.map(eachlist => (
      <Password
        lists={eachlist}
        password={showpassword}
        key={eachlist.id}
        deleted={this.delete}
      />
    ))
  }

  render() {
    const {
      initiallist,
      inputwebsite,
      inputusername,
      inputpassword,
      search,
    } = this.state
    const finallist = initiallist.filter(eachlist =>
      eachlist.inputwebsite.toLowerCase().includes(search),
    )
    const length = finallist.length === 0
    const count = finallist.length
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
                onChange={this.websitename}
                value={inputwebsite}
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
                onChange={this.username}
                value={inputusername}
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
                onChange={this.password}
                value={inputpassword}
              />
            </div>
            <div className="buttoncontainer">
              <button type="button" className="button" onClick={this.senddata}>
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
              <div className="count">{count}</div>
            </div>
            <div className="searchbarcontainer">
              <div className="searchimgcontainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="searchimg"
                />
              </div>

              <input
                type="search"
                placeholder="Search"
                className="searchbar"
                onChange={this.search}
              />
            </div>
          </div>
          <div className="checkboxcontainer">
            <input
              type="checkbox"
              className="checkbox"
              onClick={this.checkboxclicked}
            />
            <span className="passwordshowcheckbox">Show passwords</span>
          </div>
          <ul className="unorderedlist">
            {length ? this.imagecontainer() : this.renderlist()}
          </ul>
        </div>
      </div>
    )
  }
}

export default Passwordmanager
