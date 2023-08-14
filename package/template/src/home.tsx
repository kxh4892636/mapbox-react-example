import { styled } from 'styled-components'
import { MapView } from './map_view'
import { PositionTooltip } from './position_tooltip'

const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Header = styled.div`
  font-size: 1.4rem;
  line-height: 1.4rem;
  padding: 1rem 1.2rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid #d9d9d9;
`

const Content = styled.div`
  display: flex;
  flex:1 1 0;
  flex-direction: row;
  position: relative;
`

const Slide = styled.div`
  display: flex;
  position: relative;
  width: 300px;
  border-right: 1px solid #d9d9d9;
`

const Footer = styled.div`
  font-size: 1rem;
  line-height: 1rem;
  padding: 0.8rem 1rem;
  background-color: #f5f5f5;
  border-top: 1px solid #d9d9d9;
`

const App = () => {
  return (
    <Layout>
      <Header>Mapbox - React - Example</Header>
      <Content>
        <Slide>Slide</Slide>
        <Content>
          <MapView></MapView>
          <PositionTooltip></PositionTooltip>
        </Content>
      </Content>
      <Footer>工具栏</Footer>
    </Layout>
  )
}

export default App
