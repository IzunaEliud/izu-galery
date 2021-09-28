import React from 'react'

export default function ItemPhoto() {
    const item=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
    return (
        <div id="items">
            {item.map(e=>{
                return(
                    <div>{e}</div>
                )
            })}
        </div>
    )
}
