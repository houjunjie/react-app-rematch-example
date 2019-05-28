import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { TitleContext } from '../context'

const StyledText = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Text extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”
  render() {
    return (
      <StyledText>
        <Button type="primary" loading={this.context.loading}>{this.context.title}</Button>
      </StyledText>
    )
  }
}

Text.contextType = TitleContext

export default  Text