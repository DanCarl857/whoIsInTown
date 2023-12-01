import { useState } from 'react'

import './home.css'
import { ArtistMetadataType, EventMetadataType } from '../../types'
import { VSection } from '..'
import { Searchbox, Card, Artist, Event, DetailedEvent, EventsList } from '../../components'
import { useFavoritesStore } from '../../store'

const Home: React.FC = () => {
    const [artistData, setArtistData] = useState<ArtistMetadataType | undefined | void>()
    const [eventsData, setEventsData] = useState<EventMetadataType[]>()
    const [selectedEvent, setSelectedEvent] = useState<EventMetadataType>()
    const {favorites: favoriteEvents, updateFavorites} = useFavoritesStore()

    const onShowEvent = (event: EventMetadataType) => setSelectedEvent(event)
    const onToggleFavorite = (event: EventMetadataType) => updateFavorites(event)
    const clearSelectedEvent = () => setSelectedEvent(undefined)

    return (
        <div className='container'>
            <div className='main'>
                <Searchbox
                    placeholder='Enter artist name'
                    setArtistData={setArtistData}
                    setEventsData={setEventsData}
                    clearSelectedEvent={clearSelectedEvent}
                />
                {artistData?.error ? 
                    <p>No artist found with that name</p> :
                    (artistData ?  
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
                            <EventsList 
                                eventsData={eventsData}
                                onShowEvent={onShowEvent}
                            />
                        </> : <div>Enter an artist name to see their upcoming events...</div>
                    )}
            </div>

            <VSection>
                <h3>Selected event information</h3>
                {selectedEvent && 
                    <DetailedEvent
                        selectedEvent={selectedEvent}
                        onToggleFavorite={(selectedEvent) => onToggleFavorite(selectedEvent)}
                    />
                }
            </VSection>

            <VSection>
                <h3>Favorites</h3>
                <div className="events-container">
                    {favoriteEvents && favoriteEvents.map(event => {
                        return (
                            <Event
                                key={event.id}
                                event={event}
                                image_url={favoriteEvents[0].artist?.image_url}
                                onShowEvent={onShowEvent}
                            />
                        )
                    })}
                </div>
            </VSection>
        </div>
    )
}

export default Home
