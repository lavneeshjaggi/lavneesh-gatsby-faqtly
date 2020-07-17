import React from "react"

import styled from 'styled-components';

const Restaurant = styled.div`
    align-items: center;
    color: #F5D020;
    display: flex;
    justify-content: center;
`

const RestaurantCard = ({ restaurant }) => {
    const { name } = restaurant  

    return (
        <Restaurant>
            <h3>{name}</h3>
        </Restaurant>
    )
}

export default RestaurantCard