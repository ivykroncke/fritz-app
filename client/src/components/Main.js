import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components'

const MainContainer = styled.div`
margin: 5vw;
display: grid;
grid-template-rows: 2fr 2fr 2fr;
grid-template-columns: 2fr 2fr 2fr;
grid-auto-rows: 2fr;
grid-gap: 1vw;
`

const StyledImg = styled.img`
width: 25vw;
`

const StyledSport = styled.div`
position: relative;
bottom: 50%;
color: white;
`

export default class Main extends Component {
    state = {
        sports: []
    }

    componentDidMount = async () => {
        const response = await axios.get('/api/sports')
        this.setState({ sports: response.data.sports })
        console.log(response)
    }


  render() {

    const sportsList = this.state.sports.map((sport, i) => {
        return (
            <div key={i}>
                <StyledImg src={sport.strSportThumb} />
                <StyledSport>{sport.strSport}</StyledSport>
            </div>
        )
    })

    return (
      <MainContainer>
        {sportsList}   
      </MainContainer>
    )
  }
}