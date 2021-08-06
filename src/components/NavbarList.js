import NavbarItem from './NavbarItem'
import Image from './Image'

export default function NavbarList({ navItems, navItem }){
  return(
    navItems.map((item, index) => {
      if(item.includes('https')){
        return (<Image key={index} navItem={item} />)
      }
    return( <NavbarItem key={index} navItem={item} />)
    })
  )
}
