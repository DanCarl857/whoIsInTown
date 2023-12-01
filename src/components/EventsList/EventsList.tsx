import Event from "../Event/Event"
import { EventMetadataType } from "../../types"
import "./eventsList.css"

interface Props {
    eventsData: EventMetadataType[] | undefined,
    onShowEvent: (event: EventMetadataType) => void
}

const EventsList: React.FC<Props> = ({ eventsData, onShowEvent }) => {
    return (
        <>
            <div className="row">
                <div className="column">
                    <h3>Events</h3>
                </div>
            </div>
            {eventsData && eventsData.length > 0 ? 
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
                </div> :
                <div>
                    <button className="button">See Past Events</button>
                </div>
            }
        </>
    )
}

export default EventsList