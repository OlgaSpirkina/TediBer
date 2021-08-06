import '../styles/Dropdown.css'
import BeddingDropdown from './BeddingDropdown'

export default function NavbarItem({ navItem, linkId }){
  if(linkId === 'link1'){
    return(
      <div id={linkId}>
        <p className="main-drop-item">{navItem}</p>
        <div className="dropdown-link-div">
          <BeddingDropdown />
        </div>
      </div>
    )
  }
  return(
    <div id={linkId}>
      <p>{navItem}</p>
    </div>
  )
}
