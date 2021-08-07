import '../../styles/Navbar.css'
import NavbarList from './NavbarList'
export default function Navbar({ navItems }){
  return(
    <div className="container_div">
      <NavbarList navItems={navItems} />
    </div>
  )
}
