import React from 'react'

const borderline = (props) => {
    const {background,height,width,maxWidth,borderRadius,marginRight,marginLeft,margin} = props
    const style={
        background:background,
        width:width,
        maxWidth:maxWidth,
        height:'4px',
        borderRadius:borderRadius,
        marginRight:marginRight,
        marginLeft:marginLeft,
        margin:margin,
    }
    return (
        <>
            <div style={style}></div>
        </>
    )
}

export default borderline
