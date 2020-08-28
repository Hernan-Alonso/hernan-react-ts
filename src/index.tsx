import React, {FC} from 'react'
import ReactDOM from 'react-dom'

const App: FC = ()=>{
    return(
        <h1>Hello World</h1>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))