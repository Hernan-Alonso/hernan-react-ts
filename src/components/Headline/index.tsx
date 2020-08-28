import React, {FC} from 'react'
type Props={
    title: string
}
const Headline: FC<Props> = ({title}: Props)=>{
    return(
    <h1>{title}</h1>
    )
}

export default Headline