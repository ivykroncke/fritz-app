import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import Nav from './Nav';

const StyledLogo = styled.img`
width: 20vw;
`

const StyledList = styled.div`
margin: 5vw;
display: grid;
grid-template-rows: 2fr 2fr 2fr;
grid-template-columns: 2fr 2fr 2fr;
grid-auto-rows: 2fr;
grid-gap: 1vw;
`

const LeagueContainer = styled.div`
margin: 3vh;
`

const CenteredH2 = styled.h2`
text-align: center;
`

export default class ShowOneSport extends Component {

  state = {
    thisSport: []
  }

  componentDidMount = async () => {
    const sportCountryData = await axios.get(`/api/sports/${this.props.match.params.id}`)
    this.setState({ thisSport: sportCountryData.data.countrys})
  }

  render() {
    const thisSportsLeaguesByCountryList = this.state.thisSport.map((country, i) => {
      return (
        <LeagueContainer key={i}>         
          <StyledLogo src={country.strLogo} alt="logo" />
          <div> {country.strLeague} </div>
          <div> Country: {country.strCountry} </div>
          <div> League Since: {country.intFormedYear} </div>
        </LeagueContainer>
      )
    })

    return (
      <div>
        <Nav />
        <div>
          <CenteredH2>Browse Leagues in {this.props.match.params.id} </CenteredH2>
            <StyledList>
              {thisSportsLeaguesByCountryList}
            </StyledList>
        </div>
      </div>
    )
  }
}
