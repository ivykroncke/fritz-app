import React, { Component } from 'react'
import axios from 'axios';

export default class ShowOneSport extends Component {

  state = {
    thisSport: []
  }

  componentDidMount = async () => {
    const sportCountryData = await axios.get(`/api/sports/${this.props.match.params.id}`)
    this.setState({ thisSport: sportCountryData.data.countrys})
    console.log(typeof this.state.thisSport)
  }

  render() {

    const thisSportsLeaguesByCountryList = this.state.thisSport.map((country, i) => {
      return (
        <div key={i}>
          <div> {country.strCountry} </div>
        </div>
      )
    })

    return (
      <div>
        merp
        {thisSportsLeaguesByCountryList}
      </div>
    )
  }
}
