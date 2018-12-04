import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {
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
            <div key={i}>{sport.strSport}</div>
        )

    })

    return (
      <div>
        {sportsList}   
      </div>
    )
  }
}
