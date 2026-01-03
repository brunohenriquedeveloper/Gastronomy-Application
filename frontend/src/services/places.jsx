import { useState } from "react";

export default function usePlacesServices() {
    const [placesLoading, setPlacesLoading] = useState(false)
    const [refetchplaces, setRefetchplaces] = useState(true)
    const [placesList, setPlacesList] = useState([])

    const url = 'http://localhost:3000/places'

    const getAvailablePlaces = () => {
        setPlacesLoading(true)

        fetch(`${url}/availables`)
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    setPlacesList(result.body)
                }
            })
            .catch(console.log)
            .finally(() => {
                setPlacesLoading(false)
                setRefetchplaces(false)
            })
    }

    return { getAvailablePlaces, placesLoading, refetchplaces, placesList }
}
