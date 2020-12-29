import React from 'react'

const SocialMediaButton = () => (
    <div>
        <h3>Follow Us</h3>
        <div style={{padding: "10px"}}>
            <a href="https://www.instagram.com/shpeutd/?hl=en" style={{margin: "10px"}}>
                <i className="fab fa-instagram" style={{fontSize: "2em", color: "#001F5B"}}></i>
            </a>
            <a href="https://twitter.com/shpeUTD" style={{margin: "10px"}}>
                <i className="fab fa-twitter" style={{fontSize: "2em", color: "#001F5B"}}></i>
            </a>
            <a href="https://www.linkedin.com/company/shpe-utd/" style={{margin: "10px"}}>
                <i className="fab fa-linkedin" style={{fontSize: "2em", color: "#001F5B"}}></i>
            </a>
        </div>
    </div>
)

export default SocialMediaButton