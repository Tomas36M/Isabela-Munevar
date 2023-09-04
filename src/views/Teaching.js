import React from 'react'

const Teaching = () => {
    return (
        <section>
            <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item mb-3">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Columbia University - NewYork, USA
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <ul>
                                <li>Aug 2019 – Dec 2019 - Teacher Assistant of the Professor Judith Scott-Clayton, Economics and Education (Master’slevel). Teachers College, Columbia University, New York, United States.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Los Andes University - Bogota, Colombia
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            <ul>
                                <li>Jan 2015 – June 2017 - Teacher Assistant of the Professor Guillermo Perry, Introduction to Colombian Economy(Undergraduate level), Los Andes University, Bogotá, Colombia.</li>
                                <li>Aug 2014 – Dec 2015 - Teacher Assistant of the Professor David Bardey, Introduction to Microeconomics
                                    Undergraduate level), Los Andes University, Bogotá, Colombia.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Teaching