/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, jsx } from '@emotion/react'
import logo from '../assets/img_300x300/netflix_logo.jpg'

const Card =css({
    width: `40%`,
    border: `1px solid black`, 
    height: `120px`,
    borderRadius: `5px`
})

const titleContainer = css({ 
    display: `flex`,
    padding: `1px`,
    '& img': {
        borderRadius: `100%`,
        height: `5rem`

    },
    '& .title': {
        margin: `0 auto`, 
        alignSelf: `center`, 
        fontSize: `2rem`
    }
})

const costContainer = css({ 
    display: `flex`,
    justifyContent: `space-around`,
    '& .cost': { 
        color: `red`
    }
    
})


const SubscriptionCard = () => {
    return ( 
        <div css={Card}>
            <div css={titleContainer}>
                <img src={logo}/>
                <h2 className='title'>Netflix</h2>
                <h4 className='due-date'>Due Date: 11/18/2020</h4>

            </div>
            <div css={costContainer}>
                <h4 className='due-date'>Due Date: 11/18/2020</h4>
                <h4 className='cost'>Cost: $14.99</h4>
            </div>
            <p>Netflix Standard plan started 09/18/2020</p>
        </div>
     );
}
 
export default SubscriptionCard;