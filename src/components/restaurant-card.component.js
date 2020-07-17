import React from "react"
import { Link } from "gatsby"

import styled from 'styled-components';

const Restaurant = styled.div`
    align-items: center;
    color: #F5D020;
    display: flex;
    flex-direction: column;
    height: 360px;
    overflow: hidden;
    position: relative;
    width: 21vw;

    &:hover {
        cursor: pointer;

        & .content {
            opacity: 0.9;
        }
    }

    .img {
        background-position: center;
        background-size: cover;
        border: 1px solid #F5D020;
        height: 90%;
        margin-bottom: 6px;
        width: 100%;
    }

    .content {
        background: #232526;
        border: 1px solid #F5D020;
        margin-top: 120px;
        height: 120px;
        padding: 0 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0.6;
        position: absolute;
        width: 18vw;

        .title {
            color: #F5D020;
            font-size: 18px;
            font-weight: bold;
            margin: 0 6px 0;
        }

        .subtitle {
            font-weight: lighter;
            font-size: 16px;
        }
    }

    .footer {
        display: flex;
        font-size: 18px;
        height: 10%;
        justify-content: space-between;
        width: 100%;

        .zomato {
            margin-bottom: 15px;
            width: 50%;
        }

        .maps {
            width: 40%;
        }
    }
`

const RestaurantCard = ({ restaurant }) => {
    var { name, id, featured_image, average_cost_for_two, user_rating } = restaurant;

    if (featured_image.length == 0) {
        featured_image = 'https://images.unsplash.com/photo-1556694795-b6423d3d5b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }

    return (
        <Restaurant>
            <div
                className='img' 
                style={{
                    backgroundImage: `url(${featured_image})`
                }}
            />
            <div className='content'>
                <h1 className='title'>{name.toUpperCase()}</h1>
                <span className='subtitle'>Average Cost: {average_cost_for_two}</span>
                <span className='subtitle'>Rating: {user_rating.aggregate_rating}</span>
            </div>
            <div className='footer'>
                <Link to="https://www.google.com" className='zomato'>Zomato Page</Link>
                <Link to="https://www.google.com" className='maps'>Google Maps</Link>
            </div>
        </Restaurant>
    )
}

export default RestaurantCard