import { useState, useEffect } from 'react'

interface Props {
    url: string;
}

const useFetch = ({ url }: Props) => {
    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");
    
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                seterror(data.error)
                setdata(data.joke)
                setloading(false)
            })
    }, [url])
 
  return { data, loading, error }
}

export default useFetch