import React, {FC, Fragment, useState} from 'react'
import Headline from '../../components/Headline'
import Button from '../../components/Button'

const Home: FC = ()=>{
    const [counter, setCounter] = useState<number>(0)
    const handlerOnClick = (number:number):void => setCounter(counter + number)
    return(
        <Fragment>
            <Headline title="Counter App" />
            <Button label={"Inc +"} onClick={()=> handlerOnClick(1)} />
            Counter: {counter}
            <Button label={"Inc +"} onClick={()=> handlerOnClick(-1)} />
        </Fragment>
        
    )
}

export default Home