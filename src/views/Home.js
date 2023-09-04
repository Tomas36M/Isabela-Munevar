import React from 'react'
import Hero from '../components/Hero'
import { Helmet } from 'react-helmet'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Isabela Munevar Escalante</title>
                <meta name="description" content="Isabela Munevar Escalante" />
                <meta name="author" content="Isabela Munevar Escalante"></meta>
            </Helmet>
            <h1 className='heading-blind'>Isabela Munevar Escalante</h1>
            <Hero />
        </div>
    )
}

export default Home