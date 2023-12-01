import { useState } from 'react'

import './home.css'
import { ArtistMetadataType, EventMetadataType } from '../../types'
import { VSection } from '..'
import { Searchbox, Card, Artist } from '../../components'

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
                <Card>
                    <Artist
                        image_url={artistData?.image_url}
                        name={artistData?.name}
                        links={artistData?.links}
                        url={artistData?.url}
                        upcoming_event_count={artistData?.upcoming_event_count}
                    />
                </Card>
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
