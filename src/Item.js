import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Item.css"

function Item({url, title}) {
    return (
        <div className="item">
            <iframe 
                width="320" 
                height="170" 
                src={url}
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            <div className="item__details">
                <Avatar 
                    src="https://vcdn-thethao.vnecdn.net/2019/06/13/lee-chong-wei-1560414379-1606-1560414513.png" 
                />
                <div className="item__detailsText">
                    <h5>{title}</h5>
                    <p>Lee Chong Wei</p>
                    <p>Badminton</p>
                </div>
            </div>
        </div>
    )
}

export default Item
