import './index.css'

const Password = props => {
  const {lists} = props
  const {website, username, password} = lists
  return (
    <li className="individuallist">
      <div className="profilecontainer">{website[0].toUpperCase()}</div>
      <div className="detailscontainer">
        <p className="websitedetails">{website}</p>
        <p className="usernamedetails">{username}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          className="starimg"
          alt="stars"
        />
      </div>
      <div className="deletecontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete"
          alt="delete"
        />
      </div>
    </li>
  )
}
export default Password
