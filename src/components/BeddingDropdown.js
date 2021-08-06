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
        <a className="dropdown-link" href="/">{bedding}</a>
      )
    })
  )
}
