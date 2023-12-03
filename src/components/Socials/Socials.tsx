import { Icon } from ".."
import { LinkObjectType } from "../../types/Api"
import "./socials.css"

interface Props {
    links: [LinkObjectType] | undefined,
    url: string | undefined
}

const Socials: React.FC<Props> = ({ links, url }) => (
    <>
        {
            links &&
            <div className="icons">
                {links.map((link) => {
                    return (
                        <a key={link.url} href={link.url} target='_blank'>
                            <Icon name={link.type} />
                        </a>
                    )
                })}
            </div>
        }
        {url && <p><a target='_blank' href={url}>BandsInTown Homepage</a></p>}
    </>
)

export default Socials