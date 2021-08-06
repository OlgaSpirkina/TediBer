import NavbarItem from './NavbarItem'
import Image from './Image'

export default function NavbarList({ navItems, navItem, imgId, linkId }){
  return(
    navItems.map((item, index) => {
      if(item.includes('https')){
        return (<Image key={index} navItem={item} imgId={'img'+index} />)
      }
    return( <NavbarItem key={index} navItem={item} linkId={'link'+index} />)
    })
  )
}
