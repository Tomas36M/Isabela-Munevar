import React from 'react'
import HeroPic from "../assets/foto-bela.jpg"

const Hero = () => {
    return (
        <div className="row featurette p-4">
            <div className="col-md-5 order-md-1">
                <img src={HeroPic} alt='img' width='100%' height='100%' />
            </div>
            <div className="col-md-7 order-md-2 p-3 text-center">
                <h2 className="featurette-heading fw-normal lh-1 pt-4"><span className='font-text'><strong>Isabela Munevar Escalante</strong></span></h2>
                <p className="lead pt-4 px-2"><span className='font-text'>As an economist and Ph.D. candidate, I am devoted to researching and shaping education and labor market
                    policies, particularly emphasizing in gender, and income equality. I possess expertise in international
                    development and academia, aiming to connect academic research with actionable policy design. <br /><br /> I pride myself
                    on being a creative, resourceful individual with strong networking and collaboration abilities. My talent lies in
                    effectively communicating ideas and persuading others to join in bringing them to fruition.<br /><br /> Fields: Education, labor and development economics.</span>
                </p>
            </div>
        </div>
    )
}

export default Hero