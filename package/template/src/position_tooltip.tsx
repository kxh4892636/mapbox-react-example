
import { styled } from 'styled-components'
import { userPositionStore } from './map_store'

const StyledDiv = styled.div`
  background-color: #fff;
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
`

export const PositionTooltip = () => {
  const position = userPositionStore(state => state.position)
  return (
    <StyledDiv>
      经度:{position[0]} | 纬度:{position[1]} | 缩放等级:{position[2]}
    </StyledDiv>
  )
}
