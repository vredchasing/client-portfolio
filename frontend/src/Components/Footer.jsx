function Footer (){
    return (
        <section className="footer-wrapper">
            <div className="footer-left">
                <div className="logo-footer-container">
                    <img className="logo-footer" src="core.gif"></img>
                </div>
                <div className="footer-project-info-container">
                    <h1 className="footer-project-info">
                        Designed by VISIO Studio
                    </h1>
                </div>
            </div>
            <div className="footer-right">
                <div className="contact-icons-wrapper">
                    <div className="contact-info-icon-container">
                        <img className="contact-icon" src="instagram.webp"></img>
                    </div>
                    <div className="contact-info-icon-container-x">
                        <img className="contact-icon" src="xlogo.webp"></img>
                    </div>
                    <div className="contact-info-icon-container">
                        <img className="contact-icon" src="linkedin.webp"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer