import { useState } from 'react'
import { ColorRing } from 'react-loader-spinner'

import './searchbox.css'
import { getData } from '../../helpers/getData'
import * as constants from '../../constants'
import { ArtistMetadataType } from '../../types'
import { processQuery } from '../../helpers/processQuery'

interface Props {
    placeholder: string,
    setArtistData: (data: ArtistMetadataType | undefined | void) => void,
    setEventsData: (data: any) => void,
    clearSelectedEvent: () => void
}

const Searchbox: React.FC<Props> = ({ 
    placeholder,
    setArtistData,
    setEventsData,
    clearSelectedEvent
}) => {
    const [artist, setArtist] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const onChangeHandler = (event: React.SyntheticEvent<EventTarget>) => {
        event?.preventDefault()
        setArtist((event.target as HTMLInputElement).value)
    }

    const getAllData = async () => {
        console.log('Getting data for...', artist)
        clearSelectedEvent()
        setIsLoading(true)
        let processedName = processQuery(artist)
        if (artist) {
            let url = `${constants.BASE_URL}/${processedName}?app_id=${constants.API_KEY}`
            let eventsUrl = `${constants.BASE_URL}/${processedName}/events?app_id=${constants.API_KEY}&date=upcoming`

            try {
                const [artistMetaData, events] = await Promise.all([
                    await getData(url),
                    await getData(eventsUrl)
                ])
                setArtistData(artistMetaData)
                setEventsData(events)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
                setIsLoading(false)
            }
        }
    }

    return (
        <div className="row">
            <input
                className="input-field"
                placeholder={placeholder}
                type="text"
                value={artist}
                onChange={onChangeHandler}
            />
            <button onClick={() => getAllData()} className="button">
                {isLoading ? 
                    <ColorRing
                        visible={true}
                        height="40"
                        width="40"
                        ariaLabel="blocks-loading"
                        colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
                    /> : 
                    'Search'
                }
            </button>
        </div>
    )
}

export default Searchbox