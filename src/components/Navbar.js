// import styles from '../styles/Navbar.css'
import NavbarList from './NavbarList'
export default function Navbar({ navItems }){
  return(
    <div>
      <NavbarList navItems={navItems} />
    </div>
  )
}
