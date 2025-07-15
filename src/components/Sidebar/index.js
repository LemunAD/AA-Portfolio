import './index.scss'
import LogoS from '../../assets/images/logo-aa.png'
import LogoSubtitle from '../../assets/images/sub1.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faCode, faEnvelope, faHome, faUser, faWrench} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='Logo' />
            <img className='logosub' src={LogoSubtitle} alt='logosub' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faCode} color="4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="4d4d4e"/>
            </NavLink>
        </nav>
        <ul className="social-media">
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/adnane-ait-hamou/'>
                    <FontAwesomeIcon icon={faLinkedin} color="4d4d4e"/>
                </a>
            </li>

            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/adnane-ait-hamou/'>
                    <FontAwesomeIcon icon={faFacebook} color="4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com'>
                    <FontAwesomeIcon icon={faGithub} color="4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/lemun_ad'>
                    <FontAwesomeIcon icon={faInstagram} color="4d4d4e"/>
                </a>
            </li>

            <li>
                <a target="_blank" rel='noreferrer' href='https://twitter.com/Lemun_AD'>
                    <FontAwesomeIcon icon={faXTwitter} color="4d4d4e"/>
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar