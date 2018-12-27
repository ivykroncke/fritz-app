import React, { Component } from 'react'
import styled from 'styled-components'

const NavContainer = styled.div`
background-color: black;
color: white;
padding: 10vh;
`

export default class Nav extends Component {
  render() {
    return (
      <NavContainer>
        The Fritz App!
      </NavContainer>
    )
  }
}
