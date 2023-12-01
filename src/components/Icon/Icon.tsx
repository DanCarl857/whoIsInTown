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
    name: string,
    color?: string
}

const Icon: React.FC<Props> = ({ name, color }) => {

    const Icons: Record<Props["name"], any> = {
        instagram: <IoLogoInstagram size={30} color={color} />,
        twitter: <IoLogoTwitter size={30} color={color} />,
        soundcloud: <IoLogoSoundcloud size={30} color={color} />,
        facebook: <IoLogoFacebook size={30} color={color} />,
        amazon: <IoLogoAmazon size={30} color={color} />,
        tiktok: <IoLogoTiktok size={30} color={color} />,
        twitch: <IoLogoTwitch size={30} color={color} />,
        whatsapp: <IoLogoWhatsapp size={30} color={color} />,
        youtube: <IoLogoYoutube size={30} color={color} />,
        shazam: <SiShazam size={28} color={color} />,
        website: <IoEarthOutline size={30} color={color} />,
        itunes: <SiItunes size={30} color={color} />,
        spotify: <SlSocialSpotify size={28} color={color} />,
        heart: <IoHeartOutline size={28} color={color} />,
        document: <IoDocumentTextOutline size={28} color={color} />
    }
    
    return Icons[name]
}

export default Icon