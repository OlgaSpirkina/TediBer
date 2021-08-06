import '../styles/App.css';
import '../styles/Navbar.css'
import Navbar from './Navbar'

const navItems = [
  'https://raw.githubusercontent.com/OlgaSpirkina/TediBer/main/public/logo-text.png',
  'nos produits',
  'le concept',
  'avis',
  'https://raw.githubusercontent.com/OlgaSpirkina/TediBer/main/public/logo-tediber.png',
  'pub tv',
  'mon compte',
  'mag',
  'contactez-nous',
  'https://raw.githubusercontent.com/OlgaSpirkina/TediBer/main/public/shoppingcart.png'
]
console.log(navItems);
function App() {
  return (
    <>
      <div>
        <Navbar navItems={navItems}/>
      </div>
    </>
  )
}

export default App;
