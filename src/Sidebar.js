import React from 'react'
import "./Sidebar.css"
import Channel from './Channel.js'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h5>FOLLOWED CHANNELS</h5>
                <Channel 
                    avatar="https://upload.wikimedia.org/wikipedia/commons/f/fe/Son_Tung_M-TP_1_%282017%29.png"
                    name="Niko"
                    game="Couter-Strike"
                    followers="257k"
                />
                <Channel 
                    avatar="https://upload.wikimedia.org/wikipedia/commons/f/fe/Son_Tung_M-TP_1_%282017%29.png"
                    name="Niko"
                    game="Couter-Strike"
                    followers="257k"
                />
                <Channel 
                    avatar="https://upload.wikimedia.org/wikipedia/commons/f/fe/Son_Tung_M-TP_1_%282017%29.png"
                    name="Niko"
                    game="Couter-Strike"
                    followers="257k"
                />
                <h5>RECOMMEND CHANNELS</h5>
                <Channel 
                    avatar="https://upload.wikimedia.org/wikipedia/commons/f/fe/Son_Tung_M-TP_1_%282017%29.png"
                    name="Niko"
                    game="Couter-Strike"
                    followers="257k"
                />
                <Channel 
                    avatar="https://upload.wikimedia.org/wikipedia/commons/f/fe/Son_Tung_M-TP_1_%282017%29.png"
                    name="Niko"
                    game="Couter-Strike"
                    followers="257k"
                />
                <p className="sidebar__topShowMore">Show more</p>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search to add friend"/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
