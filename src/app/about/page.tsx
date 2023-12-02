import CompanyTanble from "./CompanyTable";
import style from "./style.module.css";


export default function Page(){
  return (
     <div className={style.test}>
     <h1>About</h1>
     <CompanyTanble />
     <CompanyTanble />
     <CompanyTanble />
     <CompanyTanble />
     <CompanyTanble />
     <CompanyTanble />
     </div>
  )
}