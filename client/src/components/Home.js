import React, { Component } from 'react'
import Nav from './Nav';
import Main from './Main';
import styled from 'styled-components'

const StyledHome = styled.div`
a {
  color: inherit;
  text-decoration: none;
}
`

export default class Home extends Component {
  render() {
    return (
      <StyledHome>
        <Nav />
        <Main />
      </StyledHome>
    )
  }
}

