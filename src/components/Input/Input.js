import React from 'react'


const Input = props=>(
    <div>
        <input type={props.type} className={props.class} value={props.value} placeholder={props.placeholder} onChange={props.onChange} onInput={props.onInput} />
    </div>
)
export default  Input
