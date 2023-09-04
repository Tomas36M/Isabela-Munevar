import React from 'react'

const Accordion = ({
    id,
    title,
    text,
    src,
    target
}) => {
    return (
        <div className='pb-2'>
        <div className="accordion-item">
            <h2 className="accordion-header" id={`heading`}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={'#' + id} aria-expanded={id === 'One' ? false : true} aria-controls={id}>
                    <span className='font-text'><strong>{title}</strong></span>
                </button>
            </h2>
            <div id={id} className={id === 'One' ? `accordion-collapse collapse show` : 'accordion-collapse collapse'} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p><span className='font-text'>{text}</span></p>
                    <a target='_blank' rel="noreferrer" href={src}><span className='font-text'>Link to papaer</span></a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Accordion