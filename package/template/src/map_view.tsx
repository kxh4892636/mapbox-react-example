import mapboxgl from 'mapbox-gl'
import { useEffect, useRef } from 'react'
import { useMapStore, userPositionStore } from './map_store'

export const MapView = () => {
  const mapContainerRef = useRef<HTMLDivElement>(document.createElement('div'))
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const setMap = useMapStore((state) => state.setMap)
  const position = userPositionStore(state => state.position)
  const setPosition = userPositionStore(state => state.setPosition)

  useEffect(() => {
    if (mapRef.current) return
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken:
        'pk.eyJ1Ijoia3hoNDg5MjYzNiIsImEiOiJjbGFhcWYyNmcwNHF3M25vNXJqaW95bDZsIn0.ID03BpkSU7-I0OcehcrvlQ',
      center: [position[0], position[1]],
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: position[2]
    })
    setMap(mapRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (mapRef.current === null) return
    mapRef.current.on('move', () => {
      const map = mapRef.current as mapboxgl.Map
      setPosition([
        Number(map.getCenter().lng.toFixed(4)),
        Number(map.getCenter().lat.toFixed(4)),
        Number(map.getZoom().toFixed(4))
      ])
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={mapContainerRef}
      style={{ height: '100%', flex: '1 1 0' }}
      className="mapContainer"
    ></div>
  )
}
