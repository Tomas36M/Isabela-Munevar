import React from 'react'

const Footer = () => {
    return (
        <div className="footer-dark mt-auto">
            <footer>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-md-3 item">
                            <h3><span className='font-text'>Links</span></h3>
                            <ul>
                                <a rel="noreferrer" target="_blank" href='https://drive.google.com/file/d/1-Yni7X1kPxmE9eT-vifE3ahov8u1_5QM/view?usp=sharing'><li><span className='font-text'>CV</span></li></a>
                                <a rel="noreferrer" target="_blank" href="mailto:isabela.munevar@gmail.com"><li><span className='font-text'>email</span></li></a>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3><span className='font-text'>Links</span></h3>
                            <ul>
                                <a rel="noreferrer" target="_blank" href='https://twitter.com/munevar_isabela?lang=en'><li><span className='font-text'>Twiter</span></li></a>
                                <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/isabela-munevar-236240208/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BM1tpHxw%2BSrSWIzkqNbsQPA%3D%3D'><li><span className='font-text'>LinkedIn</span></li></a>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3><span className='font-text'>Crated by Tomas Munevar</span></h3>
                            <ul>
                                <a rel="noreferrer" target="_blank" href='https://www.tomasmunevaresca.com'><li><span className='font-text'>Web Site</span></li></a>
                                <a rel="noreferrer" target="_blank" href='mailto:tomasmunevar36@gmail.com'><li><span className='font-text'>¿Want a web page? email me</span></li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer