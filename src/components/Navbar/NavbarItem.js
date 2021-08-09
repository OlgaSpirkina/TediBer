import '../Dropdown/Dropdown.css'
import './Navbar.css'
import BeddingDropdown from '../BeddingDropdown'
import{FaChevronDown} from 'react-icons/fa';

export default function NavbarItem({ navItem, linkId }){
  if(linkId === 'link1'){
    return(
      <div id={linkId}>
{/* le premièr lien de la navbar est un sous-menu, on rajoute une icone du chevron
FaChevronDown est activé avec css et non les fonctions js
*/}
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
