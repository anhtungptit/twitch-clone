import React from 'react'
import "./Channel.css"
import { Avatar } from '@material-ui/core';

function Channel({avatar, name, game, followers}) {
    return (
        <div className="channel">
            <Avatar src={avatar} />
            <div className="channel__details">
                <div className="channel__name">
                    <h4>{name}</h4>
                    <p>{game}</p>
                </div>
                <h5 className="channel__stat">{followers}</h5>
            </div>
        </div>
    )
}

export default Channel
