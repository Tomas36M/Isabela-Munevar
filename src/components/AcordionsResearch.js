import React from 'react'
import researchData from '../data/ResearchData'
import Accordion from './Accordion';

const AcordionsResearch = () => {

    const data = researchData;

    return (
        <div className='acordion-section'>
            
                {data.map(outerElement => (
                    <div key={outerElement.id}>
                        <h3 className='publication p-0 ps-3 py-3 text-left '><span className='font-text'><strong>{outerElement.publication}</strong></span></h3>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                        {outerElement.papers.map((innerElement, i) => (
                            <Accordion
                                target={innerElement.target}
                                key={innerElement.id}
                                id={innerElement.id}
                                title={innerElement.title}
                                text={innerElement.text}
                                src={innerElement.src}
                            />
                        ))}
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default AcordionsResearch