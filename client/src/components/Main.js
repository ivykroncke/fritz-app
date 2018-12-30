import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MainContainer = styled.div`
margin: 5vw;
display: grid;
grid-template-rows: 2fr 2fr 2fr;
grid-template-columns: 2fr 2fr 2fr;
grid-auto-rows: 2fr;
grid-gap: 1vw;
`

const StyledImg = styled.img`
width: 100%;
`

const StyledSport = styled.div`
position: relative;
bottom: 50%;
text-align: center;
color: white;
`

export default class Main extends Component {
    state = {
        sports: []
    }

    componentDidMount = async () => {
        const response = await axios.get('/api/sports')
        this.setState({ sports: response.data.sports })
    }


  render() {

    const sportsList = this.state.sports.map((sport, i) => {
        return (
            <Link to={`/${sport.strSport}`} key={i}>
                <StyledImg src={sport.strSportThumb} />
                <StyledSport>{sport.strSport}</StyledSport>
            </Link>
        )
    })

    return (
      <MainContainer>
        {sportsList}   
      </MainContainer>
    )
  }
}