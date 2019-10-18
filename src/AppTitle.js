import React from 'react'
import Numbers from './Numbers'

class AppTitle extends React.Component
{    

render()
{
    const content=(
    <div>
        <Numbers/>
    <h1>New component.<br/>This is the end of the website.</h1>
    </div>)
    return content

}
}

export default AppTitle