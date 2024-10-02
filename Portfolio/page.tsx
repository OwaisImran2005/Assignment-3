import Link from "next/link"
import style from "../Portfolio/page.module.css"
import git from "../../../images/pngimg.com - github_PNG40.png"
import dic from "../../../images/636e0a6ac3c481f273141736_icon_clyde_black_RGB.png"
import lid from "../../../images/61109.png"


export default function Portfolio() {
  return (
    <div className={style.main}>

      <div className={style.header}>
        <ul className={style.links}>
          <Link href="\" className={style.navp}><li>Home</li></Link>
          <Link href="\Portfolio" className={style.navp}><li>Portfolio</li></Link>
          <Link href="\About" className={style.navp}><li>About</li></Link>
          <Link href="\Contactus" className={style.navp}><li>Contact us</li></Link>
        </ul>
      </div>
      <div className={style.prev}>
        <h1 className={style.txt}>My Previous Project Of Web Designing : </h1>
        <a href="https://icehouse.netlify.app" className={style.lnk}>The IceHouse</a>
      </div>

      <div className={style.footer}>

        <ul className={style.icons}>
          <a href="https://github.com/OwaisImran2005"><img src={git.src} alt="pic1" height={70} width={70} /> </a>
          <a href="https://discord.com/channels/@me"><img src={dic.src} alt="pic2" height={60} width={60} /></a>
          <a href=""><img src={lid.src} alt="pic3" height={50} width={50} /></a>
        </ul>
      </div>


    </div>

  )
}