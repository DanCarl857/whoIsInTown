import { useMemo } from 'react'
import debounce from 'lodash.debounce'

import './searchbox.css'
import { getData } from '../../helpers/getData'
import * as constants from '../../constants'
import { ArtistMetadataType } from '../../types'

interface Props {
    placeholder: string;
    setArtistData: (data: ArtistMetadataType | undefined | void) => void;
    setEventsData: (data: any) => void;
}

const Searchbox: React.FC<Props> = ({ 
    placeholder,
    setArtistData,
    setEventsData,
}) => {
    const debounceChangeHandler = useMemo(() => debounce((event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault()
        let value = (event.target as HTMLInputElement).value
        getAllData(value)
    }, 500), [])

    // const getArtistsData = async (name: string) => {
    //     if (!name) {
    //         setArtistData(undefined)
    //         return
    //     }
    //     let url = `${constants.BASE_URL}/artists/${name}?app_id=${constants.API_KEY}`
    //     const data = await getData(url)
    //     if (data) {
    //         setQuery(name)
    //         setArtistData(data)
    //     } else {
    //         setArtistData(undefined)
    //     }
    // }

    const getAllData = async (name: string) => {
        let url = `${constants.BASE_URL}/${name}?app_id=${constants.API_KEY}`
        let eventsUrl = `${constants.BASE_URL}/${name}/events?app_id=${constants.API_KEY}&date=all`

        try {
            const [artistMetaData, events] = await Promise.all([
                await getData(url),
                await getData(eventsUrl)
            ])
            setArtistData(artistMetaData)
            setEventsData(events)
        } catch (error) {
            // TODO: display error to user
            console.log(error)
        }
    }

    return (
        <input
            className="input-field"
            placeholder={placeholder}
            type="text"
            onChange={debounceChangeHandler}
        />
    )
}

export default Searchbox