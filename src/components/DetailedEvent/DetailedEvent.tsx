import { Icon, Card } from ".."
import { useFavoritesStore } from "../../store"
import { EventMetadataType } from "../../types"
import "./detailedEvent.css"

interface Props {
    selectedEvent: EventMetadataType,
    onToggleFavorite: (event: EventMetadataType) => void
}

const DetailedEvent: React.FC<Props> = ({ selectedEvent, onToggleFavorite }) => {
    const { isFavorited } = useFavoritesStore()
    return (
        <Card>
            {selectedEvent.title && <p>Title: {selectedEvent.title}</p>}
            <p>Date:<b> {new Date(selectedEvent.datetime).toUTCString()}</b></p>
            <p>
                Lineup: {
                    selectedEvent.lineup.map((artist) => (<span key={artist}> {artist} |</span>))
                }
            </p>
            {selectedEvent.offers.length > 0 && <p>
                Offers: {
                    selectedEvent.offers.map((offer) => (
                            <a key={offer.url} href={offer.url} target='_blank'>
                                <span> {offer.type.toUpperCase()}</span> |
                            </a>
                        )
                    )
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
            <div className="icon-container">
                <div onClick={() => onToggleFavorite(selectedEvent)}>
                    <Icon name="heart" color={isFavorited(selectedEvent)? 'red': ''} />
                </div>
                <a href={selectedEvent.url} target='_blank'>
                    <Icon name="document" />
                </a>
            </div>
        </Card>
    )
}

export default DetailedEvent