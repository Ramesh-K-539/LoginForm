// Write your JS code here
import './index.css'

const Header = () => (
  <navbar className="nav-bar">
    <img
      className="logo-img"
      alt="website logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
    />
    <ul className="un-ordered-list">
      <li className="list-item btn">Home</li>
      <li className="list-item btn">Products</li>
      <li className="list-item btn">Cart</li>
      <li className="list-item">
        <button type="button" className="custom-btn">
          Logout
        </button>
      </li>
    </ul>
  </navbar>
)

export default Header
