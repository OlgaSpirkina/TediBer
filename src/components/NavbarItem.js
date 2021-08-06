import '../styles/Dropdown.css'
import '../styles/Navbar.css'
import BeddingDropdown from './BeddingDropdown'
import{FaChevronDown} from 'react-icons/fa';;

export default function NavbarItem({ navItem, linkId }){
  if(linkId === 'link1'){
    return(
      <div id={linkId}>
        <a href="/" className="main-drop-item navbar-text">{navItem.toUpperCase()} <FaChevronDown className="dropdownIcon"/></a>
        <div className="dropdown-link-div">
          <BeddingDropdown />
        </div>
      </div>
    )
  }
  return(
    <div id={linkId}>
      <a href="/" className='navbar-text'>{navItem.toUpperCase()}</a>
    </div>
  )
}
