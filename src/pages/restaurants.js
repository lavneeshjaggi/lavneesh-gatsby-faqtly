import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RestaurantCard from "../components/restaurant-card.component"

import styled from 'styled-components';

const Restaurant = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
  margin-left: -150px;

  .header {
      color: #F5D020;
      font-size: 27px;
      margin-bottom: 24px;
  }

  .title {
      color: #FC575E;
      font-size: 27px;
      margin-bottom: 24px;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 24px;

    & .RestaurantCard {
      margin-bottom: 60px;
      overflow: hidden;
    }
  }
`

class SecondPage extends React.PureComponent {
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
          <h1 className='header'>Welcome to restaurant recommendations by Faqtly</h1>
          <h1 className='title'>Restaurants</h1>
          <div className='items'>
            {
              restaurants.map(( establishment ) => (
                console.log(establishment.restaurant),
                <RestaurantCard key={establishment.restaurant.id} restaurant={establishment.restaurant} />
              ))
            }
          </div>
        </Restaurant>
      <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default SecondPage