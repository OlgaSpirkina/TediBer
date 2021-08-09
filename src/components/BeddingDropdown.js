import './Dropdown/Dropdown.css'
const dropdownList = [
  'matelas',
  'oreillers',
  'couette'
]
/* le petit composant de la navbar qui fait partie du premier lien */
export default function BeddingDropdown(){
  return(
    dropdownList.map(bedding => {
      return(
        <a key={bedding} className="dropdown-link" href="/">{bedding}</a>
      )
    })
  )
}
