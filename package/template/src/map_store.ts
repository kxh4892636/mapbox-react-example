import { create } from 'zustand'

interface MapStoreInterface{
    map:mapboxgl.Map|null
    setMap:(value:mapboxgl.Map)=>void
}

export const useMapStore = create<MapStoreInterface>((set) => ({
  map: null,
  setMap: (value) => set({ map: value })
}))

interface PositionStoreInterface{
  position:[number, number, number],
  setPosition:(value:[number, number, number])=>void
}

export const userPositionStore = create<PositionStoreInterface>(set => ({
  position: [118.80242, 32.06465, 11],
  setPosition: (value:[number, number, number]) => {
    set({
      position: value
    })
  }
}))
