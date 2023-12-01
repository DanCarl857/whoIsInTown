import { useState } from 'react'

import './home.css'
import { ArtistMetadataType, EventMetadataType } from '../../types'
import { VSection } from '..'
import { Searchbox, Card, Artist, Event, Icon } from '../../components'

const Home: React.FC = () => {
    const [artistData, setArtistData] = useState<ArtistMetadataType | undefined | void>()
    const [eventsData, setEventsData] = useState<[EventMetadataType]>()
    const [selectedEvent, setSelectedEvent] = useState<EventMetadataType>()
    console.log(artistData)

    if (artistData) {
        console.log(eventsData)
    }

    const onShowEvent = (event: EventMetadataType) => setSelectedEvent(event)

    return (
        <div className='container'>
            <div className='main'>
                <Searchbox
                    placeholder='Enter artist name'
                    setArtistData={setArtistData}
                    setEventsData={setEventsData}
                />
                {artistData ? 
                    <>
                        <Card>
                            <Artist
                                image_url={artistData?.image_url}
                                name={artistData?.name}
                                links={artistData?.links}
                                url={artistData?.url}
                                upcoming_event_count={artistData?.upcoming_event_count}
                            />
                        </Card>
                        <div className="row">
                            <div className="column">
                                <h3>Events</h3>
                            </div>
                        </div>
                        <div className="events-container">
                            {eventsData && eventsData.map(event => {
                                return (
                                    <Event
                                        key={event.id}
                                        event={event}
                                        image_url={eventsData[0].artist?.image_url}
                                        onShowEvent={onShowEvent}
                                    />
                                )
                            })}
                        </div>
                    </> :
                    <div>Enter an artist name to see their upcoming events...</div>}
            </div>

            <VSection>
                <h3>Selected event information</h3>
                {selectedEvent && 
                    <Card>
                        {selectedEvent.title && <p>Title: {selectedEvent.title}</p>}
                        <p>Date:<b> {new Date(selectedEvent.datetime).toUTCString()}</b></p>
                        <p>
                            Lineup: {
                                selectedEvent.lineup.map((artist) => {
                                    return (
                                        <span key={artist}> {artist} |</span>
                                    )
                                })
                            }
                        </p>
                        {selectedEvent.offers.length > 0 && <p>
                            Offers: {
                                selectedEvent.offers.map((offer) => {
                                    return (
                                        <a key={offer.url} href={offer.url} target='_blank'>
                                            <span> {offer.type.toUpperCase()}</span> |
                                        </a>
                                    )
                                })
                            }
                        </p>}
                        <hr />
                        <p>Where: {selectedEvent.venue.city}, {selectedEvent.venue.country} - {selectedEvent.venue.name}</p>
                        {selectedEvent.venue.street_address && 
                            <p>Street Address: {selectedEvent.venue.street_address}</p>
                        }
                        <hr />
                        {selectedEvent.starts_at && <p>Event starts at: <b>{selectedEvent.starts_at}</b></p>}
                        <p>Ticket sales begin: {new Date(selectedEvent.on_sale_datetime).toUTCString()}</p>
                        <div className="row">
                            <div>
                                <Icon name="heart" />
                            </div>
                            <a href={selectedEvent.url} target='_blank'>
                                <Icon name="document" />
                            </a>
                        </div>
                    </Card>
                }
            </VSection>

            <VSection>
                <h3>Favorites</h3>
            </VSection>
        </div>
    )
}

export default Home
