import React from 'react'
import { Spin } from 'antd'
import styled from 'styled-components'

const StyledSpin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default () => {
  return (
    <StyledSpin>
      <Spin tip="Loading..." size="large" />
    </StyledSpin>
  );
};