/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, jsx } from '@emotion/react'

const Card =css({
    width: `50%`,
    border: `1px solid red`
})


const SubscriptionCard = () => {
    return ( 
        <div
        css={Card}>
            Card here!
        </div>
     );
}
 
export default SubscriptionCard;