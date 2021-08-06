import '../styles/App.css';
import '../styles/Navbar.css'
import Navbar from './Navbar'

const navItems = [
  '/../../public/logo-text.png',
  'nos produits',
  'le concept',
  'avis',
  '../../public/logo-tediber.png',
  'pub tv',
  'mon compte',
  'mag',
  'contactez-nous',
  // '../../public/shoppingcart.png'
  'https://raw.githubusercontent.com/OlgaSpirkina/Nextjs_Cryptocurrencies/main/public/logoshayp.png'
]
console.log(navItems);
function App() {
  return (
    <>
      <div className="container_div">
        <Navbar navItems={navItems}/>
      </div>
    </>
  )
}

export default App;
