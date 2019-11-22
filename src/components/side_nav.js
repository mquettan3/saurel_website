import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons'

export default function side_nav(props) {
    let showSideNav = props.isShown ? "show" : "";
    return (
        <div className={"side-nav " + showSideNav}>
            <div className="top">
                <a className="close-button" onClick={() => props.setMenuIconClicked(!props.isShown)}>
                    Close <div>x</div>
                </a>
            </div>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Events</li>
                <li>Podcast</li>
            </ul>

            
            <div className="top">

            </div>

            <div className="social-media-links">
                <a href="https://www.linkedin.com">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.facebook.com">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
            </div>
        </div>
    )
}
