import { create } from 'zustand'

interface MapStore{
    map?:mapboxgl.Map;
    setMap:(value:mapboxgl.Map)=>void;
}

export const useMapStore = create<MapStore>((set) => ({
  map: undefined,
  setMap: (value) => set({ map: value })
}))
