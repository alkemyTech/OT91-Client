import React from 'react'
import ReactHtmlParser from 'react-html-parser';
function ActivitiesContent(description) {
    return (
        <div>
           {ReactHtmlParser({description})}
        </div>
    )
}

export default ActivitiesContent
