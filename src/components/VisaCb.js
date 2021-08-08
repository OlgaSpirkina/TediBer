export default function VisaCb({ visaImg, visaName }){
  return(
    <>
      <img src={visaImg} alt="logo Visa"/>
      <p>{visaName.toUpperCase()}</p>
    </>
  )
}
