import './index.css'

const Password = props => {
  const {lists, password, deleted} = props
  const {id, inputwebsite, inputusername, inputpassword} = lists
  const deleteitem = () => {
    deleted(id)
  }
  return (
    <li className="individuallist">
      <div className="profilecontainer">{inputwebsite[0].toUpperCase()}</div>
      <div className="detailscontainer">
        <p className="websitedetails">{inputwebsite}</p>
        <p className="usernamedetails">{inputusername}</p>
        {password ? (
          <p className="passwordshow">{inputpassword}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            className="starimg"
            alt="stars"
          />
        )}
      </div>
      <div className="deletecontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete"
          alt="delete"
          onClick={deleteitem}
        />
      </div>
    </li>
  )
}
export default Password
