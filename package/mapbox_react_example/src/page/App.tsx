import { MapView } from '../feature/map/mapView'
import { SideBar } from '../feature/sidebar/sidebar'

const App = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className='flex items-center h-14 bg-gray-50 text-2xl pl-3 border-b border-gray-300'>Mapbox - React 示例</div>
      <div className="flex flex-1 flex-row">
        <SideBar>
        </SideBar>
        <div className="flex-1"><MapView/></div>
      </div>
      <div className="h-8 text-2xl">工具栏</div>
    </div>
  )
}

export default App
