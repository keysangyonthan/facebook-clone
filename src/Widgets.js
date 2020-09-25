import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className="widgets">
            <iframe src="https://www.facebook.com/plugins/group.php?href=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F756671591845505&width=340&show_social_context=false&show_metadata=false&height=273&appId"
             width="340" height="273" 
             style={{border:"none", overflow:"hidden"}} 
             scrolling="no" frameborder="0" 
             allowTransparency="true" 
             allow="encrypted-media"></iframe>
        </div>
    )
}

export default Widgets
