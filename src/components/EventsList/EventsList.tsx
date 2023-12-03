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
                                onShowEvent={onShowEvent}
                            />
                        )
                    })}
                </div> :
                <div>
                    <h4>No upcoming events...</h4>
                </div>
            }
        </>
    )
}

export default EventsList