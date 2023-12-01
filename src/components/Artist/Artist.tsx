import { Socials } from "..";
import { LinkObjectType } from "../../types/Api";
import './artist.css'

interface Props {
    image_url?: string;
    name?: string;
    upcoming_event_count?: number;
    links?: [LinkObjectType];
    url?: string;
}

const Artist: React.FC<Props> = ({
    image_url,
    name,
    upcoming_event_count,
    links,
    url
}) => (
    <div className="row">
        <div className="column">
            <img
                src={image_url}
                className="artist-img"
            />
        </div>
        <div className="column">
            <p>Name: <b>{name}</b></p>
            <p>Upcoming Events: {upcoming_event_count}</p>
            <br />
            <p>Socials:</p>
            <hr />
            <Socials links={links} url={url} />
        </div>
    </div>
)

export default Artist