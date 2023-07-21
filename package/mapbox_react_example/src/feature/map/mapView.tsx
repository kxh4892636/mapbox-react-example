import mapbox from 'mapbox-gl'
import { useEffect, useRef } from 'react'
import { useMapStore } from '../../store/mapStore'

mapbox.accessToken = 'pk.eyJ1Ijoia3hoNDg5MjYzNiIsImEiOiJjbGFhcWYyNmcwNHF3M25vNXJqaW95bDZsIn0.ID03BpkSU7-I0OcehcrvlQ'

export const MapView = () => {
  const mapContainerRef = useRef<HTMLDivElement>(document.createElement('div'))
  const mapRef = useRef<mapbox.Map>()
  const setMap = useMapStore(state => state.setMap)

  useEffect(() => {
    if (mapRef.current) return
    mapRef.current = new mapbox.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12'
    })
    setMap(mapRef.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={mapContainerRef} style={{ height: '100%' }}></div>
}
