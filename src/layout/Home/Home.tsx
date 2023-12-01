import { useState } from 'react'

import './home.css'
import { ArtistMetadataType, EventMetadataType } from '../../types'
import { VSection } from '..'
import { Searchbox } from '../../components'

const Home: React.FC = () => {
    const [artistData, setArtistData] = useState<ArtistMetadataType | undefined | void>()
    const [eventsData, setEventsData] = useState<[EventMetadataType]>()
    console.log(artistData)

    if (artistData) {
        console.log(eventsData)
    }

    return (
        <div className='container'>
            <div className='main'>
                <Searchbox
                    placeholder='Enter artist name'
                    setArtistData={setArtistData}
                    setEventsData={setEventsData}
                />
                <div className="card">
                    <div className="row">
                        <div className="column">
                            <img
                                src={artistData?.image_url}
                                className="artist-img"
                            />
                        </div>
                        <div className="column">
                            <p>Name: {artistData?.name}</p>
                            <p>Upcoming Events: {artistData?.upcoming_event_count}</p>
                        </div>
                    </div>
                </div>
            </div>

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
