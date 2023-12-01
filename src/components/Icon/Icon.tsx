import {
    IoLogoInstagram,
    IoLogoTwitter,
    IoLogoSoundcloud,
    IoLogoFacebook,
    IoLogoAmazon,
    IoLogoTiktok,
    IoLogoTwitch,
    IoLogoWhatsapp,
    IoLogoYoutube,
    IoEarthOutline,
    IoHeartOutline,
    IoDocumentTextOutline
} from 'react-icons/io5'
import { SiShazam, SiItunes } from 'react-icons/si'
import { SlSocialSpotify } from 'react-icons/sl'

interface Props {
    name: string
}

const Icon: React.FC<Props> = ({ name }) => {

    const Icons: Record<Props["name"], any> = {
        instagram: <IoLogoInstagram size={30} />,
        twitter: <IoLogoTwitter size={30} />,
        soundcloud: <IoLogoSoundcloud size={30} />,
        facebook: <IoLogoFacebook size={30} />,
        amazon: <IoLogoAmazon size={30} />,
        tiktok: <IoLogoTiktok size={30} />,
        twitch: <IoLogoTwitch size={30} />,
        whatsapp: <IoLogoWhatsapp size={30} />,
        youtube: <IoLogoYoutube size={30} />,
        shazam: <SiShazam size={28} />,
        website: <IoEarthOutline size={30} />,
        itunes: <SiItunes size={30} />,
        spotify: <SlSocialSpotify size={28} />,
        heart: <IoHeartOutline size={28} />,
        document: <IoDocumentTextOutline size={28} />
    }
    
    return Icons[name]
}

export default Icon