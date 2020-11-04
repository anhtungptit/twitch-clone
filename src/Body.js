import React from 'react'
import "./Body.css"
import Category from './Category'
import Item from "./Item"
import StreamInfo from './StreamInfo'

function Body() {
    return (
        <div className="body">
            <div className="body__stream">
            <iframe 
                width="600" 
                height="300" 
                src="https://www.youtube.com/embed/36YnV9STBqc" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            <div className="body__streamInfo">
                <StreamInfo 
                    url="https://i.ytimg.com/vi/U96Mu5_d5uQ/maxresdefault.jpg"
                    name="The Good Life"
                    game="Music"
                    viewers="397 viewers"
                    description="The Good Life is live streaming the best of Relaxing & Chill House Music, Deep House, Tropical House, EDM, Dance & Pop as well as Music for Sleep, Focus, Study, Workout, Gym, Running etc. in a 24/7 summer feel good chillout mix. 
                    "
                />
            </div>
            </div>
            <div className="body__channels">
                <h3>Channels we think you'll like</h3>
                <div className="body__channel">
                    <Item 
                        url="https://www.youtube.com/embed/mzplJJVxIio"
                        title="Lee Chong Wei và Taufik Hidayat chơi đôi nam nữ ??"
                    />
                    <Item 
                        url="https://www.youtube.com/embed/XzncN7jsHUY"
                        title="Lee Chong Wei và Taufik Hidayat chơi đôi nam nữ ??"
                    />
                    <Item 
                        url="https://www.youtube.com/embed/KiiuGzfeyVM"
                        title="Lee Chong Wei và Taufik Hidayat chơi đôi nam nữ ??"
                    />
                    <Item 
                        url="https://www.youtube.com/embed/mzplJJVxIio"
                        title="Lee Chong Wei và Taufik Hidayat chơi đôi nam nữ ??"
                    />
                    <Item 
                        url="https://www.youtube.com/embed/mzplJJVxIio"
                        title="Lee Chong Wei và Taufik Hidayat chơi đôi nam nữ ??"
                    />
                </div>  
            </div>
            <div className="body__verticalLine"></div>
            <div className="body__categories">
                <h3>The categories we think you'll like</h3>
                <div className="body__category">
                    <Category 
                        url="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike%3A%20Global%20Offensive.jpg" 
                        game="Counter-Strike"
                        viewers="87.663 viewers"
                        title="First Person Shooter"
                    />
                    <Category 
                        url="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike%3A%20Global%20Offensive.jpg" 
                        game="Counter-Strike"
                        viewers="87.663 viewers"
                        title="First Person Shooter"
                    />
                    <Category 
                        url="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike%3A%20Global%20Offensive.jpg" 
                        game="Counter-Strike"
                        viewers="87.663 viewers"
                        title="First Person Shooter"
                    />
                    <Category 
                        url="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike%3A%20Global%20Offensive.jpg" 
                        game="Counter-Strike"
                        viewers="87.663 viewers"
                        title="First Person Shooter"
                    />
                    <Category 
                        url="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike%3A%20Global%20Offensive.jpg" 
                        game="Counter-Strike"
                        viewers="87.663 viewers"
                        title="First Person Shooter"
                    />
                    <Category 
                        url="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike%3A%20Global%20Offensive.jpg" 
                        game="Counter-Strike"
                        viewers="87.663 viewers"
                        title="First Person Shooter"
                    />
                    <Category 
                        url="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike%3A%20Global%20Offensive.jpg" 
                        game="Counter-Strike"
                        viewers="87.663 viewers"
                        title="First Person Shooter"
                    />
                    <Category 
                        url="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike%3A%20Global%20Offensive.jpg" 
                        game="Counter-Strike"
                        viewers="87.663 viewers"
                        title="First Person Shooter"
                    />
                    <Category 
                        url="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike%3A%20Global%20Offensive.jpg" 
                        game="Counter-Strike"
                        viewers="87.663 viewers"
                        title="First Person Shooter"
                    />
                    <Category 
                        url="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike%3A%20Global%20Offensive.jpg" 
                        game="Counter-Strike"
                        viewers="87.663 viewers"
                        title="First Person Shooter"
                    />
                </div>
            </div>
        </div>
    )
}

export default Body
