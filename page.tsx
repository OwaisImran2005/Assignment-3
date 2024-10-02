// import Image from "next/image";
import Link from "next/link";
import git from "../../images/pngimg.com - github_PNG40.png"
import dic from "../../images/636e0a6ac3c481f273141736_icon_clyde_black_RGB.png"
import lid from "../../images/61109.png"
import pers from"../../images/WhatsApp Image 2024-09-30 at 23,38,07_850e14a9-photoaidcom-cropped.jpg"


export default function Home() {
  return (
    <div className="main">

      <div className="left">
        <img className="imgo" src={pers.src} alt="" height={70} width={200} />
        <h1 className="ftext">
          Muhammad Owais
        </h1>
        <hr className="hr" />
        <p className="bio">Karachi , Malir</p>
        <p className="bio">owaisimran55555@gmail.com</p>
        <p className="bio"> 03312620324</p>
        <h2 className="skill">
          Skills :
        </h2>
        <ul className="list">
          <li>Web Designing</li>
          <li>Typescript</li>
          <li>C++</li>
          <li>Next js & React js</li>
          <li>Ms Word & Excel</li>
        </ul>

        <ul className="icons">
          <a href="https://github.com/OwaisImran2005"><img src={git.src} alt="pic1" height={55} width={65} /> </a>
          <a href="https://discord.com/channels/@me"><img src={dic.src} alt="pic2" height={50} width={60} /></a>
          <a href=""><img src={lid.src} alt="pic3" height={40} width={50} /></a>
        </ul>

      </div>
      <div className="header">
          <ul className="links">
            <Link href="\Portfolio" className="navlinksh"><li>Portfolio</li></Link>
            <Link href="\About" className="navlinksh"><li>About</li></Link>
            <Link href="\Contactus" className="navlinksh"><li>Contact us</li></Link>
          </ul>
        </div>
      <div className="edu">
        
        <h1 className="eduheads">EDUCATION</h1>
        <hr className="hr2" />
        <h2 className="subedu">Higher Education :</h2>

        <ul className="edulist">
          <li className="education">My Little World School | 2007-2016</li>
          <li className="education">Army Public School | 2016-2019</li>
        </ul>

        <h2 className="subedu">Secondary & Intermediate :</h2>
        <ul className="edulist">
          <li className="education">Karachi Public School | 2019-2021</li>
          <li className="education">Govt Degree College Malir Cantt | 2021-2023</li>
        </ul>

        <h2 className="subedu">Batchelors :</h2>

        <ul className="edulist">
          <li className="education">Btech Software Engineering Technology from UIT | 2023-2024</li>
          <li className="education">Web Cloud Developing | 2023-completing</li>
        </ul>

        <h1 className="eduheads">HOBBIES</h1>

        <hr />

        <ul className="edulist">
          <li className="education">Circket</li>
          <li className="education">Badminton</li>
          <li className="education">Snooker</li>
          <li className="education">Gaming</li>
        </ul>

      </div>
    </div>

  );
}
