import usePlacesServices from "../../services/places"
import { useEffect } from "react"
import Loading from "../../loading/page"

export default function Places() {
    const {
        getAvailablePlaces,
        placesLoading,
        refetchplaces,
        placesList
    } = usePlacesServices()

    useEffect(() => {
        if (refetchplaces) {
            getAvailablePlaces()
        }
    }, [refetchplaces])

    if (placesLoading) {
        return <Loading />
    }

    console.log(placesList)

    return <h1>Places</h1>
}
