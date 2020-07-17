import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RestaurantCard from "../components/restaurant-card.component"

import styled from 'styled-components';

const Restaurant = styled.div`
  color: whitesmoke;

  h2 {
    color: #F5D020;
    font-size: 2rem
  }
`

class SecondPage extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      error: false,
      restaurants: []
    }
  }

  componentDidMount() {
    fetch('https://developers.zomato.com/api/v2.1/search?apikey=96d9bea243ddea6e8c5889b535708653')
      .then(response => {
        return response.json()
      })
        .then(data => {
          this.setState({ 
            restaurants: data.restaurants,
            loading: false
          })
        })
  }

  render() {
    const { restaurants } = this.state;

    return (
      <Layout>
        <SEO title="Page two" />
        <Restaurant>
          <h2>Welcome to restaurant recommendations by Faqtly</h2>
          <p>We hope you find what you are looking for!</p>
        </Restaurant>
          {
            restaurants.map(( establishment ) => (
              console.log(establishment.restaurant),
              <RestaurantCard key={establishment.restaurant.id} restaurant={establishment.restaurant} />
            ))
          }
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default SecondPage