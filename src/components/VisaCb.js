export default function VisaCb({ visaImg, visaName }){
  // section-bannière sur le paement
  return(
    <>
      <img src={visaImg} alt="logo Visa"/>
      <p>{visaName.toUpperCase()}</p>
    </>
  )
}
