import React, { Component } from 'react'
import styled from 'styled-components'

const NavContainer = styled.div`
height: 15vh;
background-image: url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
background-size: cover;
background-position: 25%;
color: white;
padding: 5vh;
display: flex;
align-items: center;
justify-content: space-around;
`

const NavItemContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const NavItem = styled.div`
padding-left: 2vw;
`

export default class Nav extends Component {
  render() {
    return (
      <NavContainer>
        <h1>FritzBall</h1>
        <NavItemContainer>
          <NavItem>MyFritz</NavItem>
          <NavItem>Store</NavItem>
        </NavItemContainer>
      </NavContainer>
    )
  }
}
