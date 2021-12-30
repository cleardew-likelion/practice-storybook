import React from 'react'

const Title = ({ styleType, children }) => {
    if (styleType === "Main") {
        return (
            <div>
                <h1>{children}</h1>
            </div>
        )
    } else if (styleType === "Event") {
        return (
            <div>
                ⭐️<h1>{children}</h1>⭐️
            </div>
        )
    }
}

export default Title;