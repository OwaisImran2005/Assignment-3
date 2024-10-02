import Link from "next/link"
import style from "../About/page.module.css"
import git from "../../../images/pngimg.com - github_PNG40.png"
import dic from "../../../images/636e0a6ac3c481f273141736_icon_clyde_black_RGB.png"
import lid from "../../../images/61109.png"
import pers from"../../../images/WhatsApp Image 2024-09-30 at 23.38.07_850e14a9.jpg"

export default function About() {
  return (

    <div className={style.main}>

      <div className={style.header}>
        <ul className={style.links}>
          <Link href="\" className={style.nava}><li>Home</li></Link>
          <Link href="\Portfolio" className={style.nava}><li>Portfolio</li></Link>
          <Link href="\About" className={style.nava}><li>About</li></Link>
          <Link href="\Contactus" className={style.nava}><li>Contact us</li></Link>
        </ul>
      </div>

       <div className={style.img}>
        <img src={pers.src} alt="pic" width={200} height={200}/>
        <h2 className={style.about}>I am Muhammad Owais Imran. I am currently completing Next JS. <br />I love to code and play games</h2>
       </div>


      <div className={style.footer}>

        <ul className={style.icons}>
          <a href="https://github.com/OwaisImran2005"><img src={git.src} alt="pic1" height={70} width={70} /> </a>
          <a href="https://discord.com/channels/@me"><img src={dic.src} alt="pic2" height={60} width={60} /></a>
          <a href=""><img src={lid.src} alt="pic3" height={50} width={50}/></a>
        </ul>
      </div>
    </div>
  )
}