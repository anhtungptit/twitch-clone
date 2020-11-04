import { Avatar } from '@material-ui/core'
import React from 'react'
import './StreamInfo.css'

function StreamInfo({url,name, game, viewers, description}) {
    return (
        <div className="streamInfo">
            <div className="streamInfo__top">
                <Avatar className="streamInfo__avatar" src={url}/>
                <div className="streamInfo__details">
                    <h4>{name}</h4>
                    <h4>{game}</h4>
                    <p>{viewers}</p>
                </div>
            </div>
            <div className="streamInfo__bottom">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default StreamInfo
