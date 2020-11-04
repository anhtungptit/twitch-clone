import React from 'react'
import "./Category.css"

function Category({url, game, viewers, title}) {
    return (
        <div className="category">
            <img
                src={url}
                alt="" 
            />
            <div className="category_description">
                <div className="category__details">
                    <h4>{game}</h4>
                    <p>{viewers}</p>
                    <p className="category__title">{title}</p>
                </div>
                <div className="category__icon">
                    <i class="fas fa-ellipsis-v"></i>
                </div>
            </div>
            
        </div>
    )
}

export default Category
