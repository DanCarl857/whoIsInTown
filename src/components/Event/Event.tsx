import { EventMetadataType } from "../../types"
import Card from "../Card/Card"
import './event.css'

interface Props {
    event: EventMetadataType;
    onShowEvent: (event: EventMetadataType) => void
}


const Event: React.FC<Props> = ({ event, onShowEvent }) => {
    return (
        <Card>
            <div className="card-content" onClick={() => onShowEvent(event)}>
                <div className="event-content">
                    {event.title && <p>Title: {event.title}</p>}

                    <p>Date:<b> {new Date(event.datetime).toUTCString()}</b></p>
                    <p>
                        Lineup: {
                            event.lineup.map((artist) => {
                                return (
                                    <span key={artist}> <b>{artist}</b> |</span>
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