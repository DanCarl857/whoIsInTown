import { EventMetadataType } from "../../types"
import Card from "../Card/Card"
import './event.css'

interface Props {
    event: EventMetadataType;
    image_url: string | undefined;
    onShowEvent: (event: EventMetadataType) => void
}


const Event: React.FC<Props> = ({ event, image_url, onShowEvent }) => {
    return (
        <Card>
            <div className="card-content" onClick={() => onShowEvent(event)}>
                <img
                    src={image_url}
                    className="event-img"
                />
                <div className="event-content">
                    {event.title && <p>Title: {event.title}</p>}
                    <p>Date:<b> {new Date(event.datetime).toUTCString()}</b></p>
                    <p>
                        Lineup: {
                            event.lineup.map((artist) => {
                                return (
                                    <span key={artist}> {artist} |</span>
                                )
                            })
                        }
                    </p>
                    <hr />
                    <p>Where: {event.venue.city}, {event.venue.country}</p>
                </div>
            </div>
        </Card>
    )
}

export default Event