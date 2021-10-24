import React from 'react'
const Card = ({title,author,tags}) => {
    return (
            <div class="posts">
                <h2>{title}</h2>
                <p>By: {author}</p>
                <h5>Tags: {tags}</h5>
            </div>
    )
}

export default Card
