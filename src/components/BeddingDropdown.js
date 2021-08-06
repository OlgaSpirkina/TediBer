import '../styles/Dropdown.css'
const dropdownList = [
  'matelas',
  'oreillers',
  'couette'
]

export default function BeddingDropdown(){
  return(
    dropdownList.map(bedding => {
      return(
        <a key={bedding} className="dropdown-link" href="/">{bedding}</a>
      )
    })
  )
}
