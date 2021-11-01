import React from 'react'

function ActivitiesContent(props) {
    return (
        <div>
            dangerouslySetInnerHTML={{__html: props.description}}
        </div>
    )
}

export default ActivitiesContent
