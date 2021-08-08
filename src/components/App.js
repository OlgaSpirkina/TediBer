import Navbar from './Navbar/Navbar'
import Shopping from './Shopping/Shopping'
import Banner from './Banner'
import DropdownSection from './Dropdown/DropdownSection'
import DeliveryItemList from './Delivery/DeliveryItemList'
import HelpSection from './HelpSection'
import '../styles/App.css';
import '../styles/Navbar.css'

const dropdownItemsImg = [
  'https://raw.githubusercontent.com/OlgaSpirkina/TediBer/a277b71fd7f5cc8802a8cbf1a95498bbe79da884/public/box.svg',
  'https://raw.githubusercontent.com/OlgaSpirkina/TediBer/a277b71fd7f5cc8802a8cbf1a95498bbe79da884/public/packing.svg',
  'https://raw.githubusercontent.com/OlgaSpirkina/TediBer/a277b71fd7f5cc8802a8cbf1a95498bbe79da884/public/delivery.svg',
  'https://raw.githubusercontent.com/OlgaSpirkina/TediBer/a277b71fd7f5cc8802a8cbf1a95498bbe79da884/public/door.svg'
]
const track = 'Suivi commande';
const refund = 'Informations sur les retours';

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
const arrayOfText = [
  'suivi de commande',
  'informations sur la livraison',
  'informations sur le paement',
  'totoal commande',
  'besoin d\'aide ?'
];
const deliveryInfo = [
  'N° de commande : ',
  'Date de commande : ',
  'Date d’expédition : '
]
const deliverySpan = [
  '405560003',
  '1 mai 2019',
  '3 mai 2019'
]
const bannerText = arrayOfText.map(elem => elem.toUpperCase());
function App() {
  return (
    <>
      <div>
        <Navbar navItems={navItems}/>
      </div>
      <Banner prop={bannerText[0]}/>
      <div className="all-info-shoppingcart">
        <DropdownSection track={track} refund={refund} dropdownItemsImg={dropdownItemsImg} deliveryInfo={deliveryInfo} deliverySpan={deliverySpan}/>
        <Shopping />
      </div>
      <Banner prop={bannerText[1]}/>
      <DeliveryItemList />
      <Banner prop={bannerText[2]}/>
      <Banner prop={bannerText[3]}/>
      <Banner prop={bannerText[4]}/>
      <div className="banner-container">
        <HelpSection />
      </div>
    </>
  )
}

export default App;
