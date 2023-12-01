import React from 'react'
import { VSection } from '..'
import { Searchbox } from '../../components'
import './home.css'

const Home: React.FC = () => {
    return (
        <div className='container'>
            <VSection>
                <Searchbox placeholder='Enter artist name' />
                <div className="card">
                    <div className="row">
                        <div className="column">
                            
                        </div>
                        <div className="column"></div>
                    </div>
                </div>
            </VSection>

            <VSection>
                <h3>Selected event information</h3>
            </VSection>

            <VSection>
                <h3>Favorites</h3>
            </VSection>
        </div>
    )
}

export default Home
