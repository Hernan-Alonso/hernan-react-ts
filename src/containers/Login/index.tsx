import React, {FC} from 'react'
// import Formulario from '../../components/Formulario'
import Headline from '../../components/Headline'
import styled from 'styled-components'
import Formulario from '../../components/Formulario'

const Login: FC = ()=>{

    return(
        <FormContainerStyled>
        <HeadContainerStyled>
            <Headline title={"Sign In"} />
        </HeadContainerStyled>  
        <Formulario />
        </FormContainerStyled>

        
    )
}

export default Login

const HeadContainerStyled = styled.div`
    text-align: center;
`

const FormContainerStyled = styled.div`
    background: white;
    border-radius: 5px;
    margin: 5rem auto;
    width: 500px;
    height: 50%;
    padding: 5rem;
    box-shadow: 3px -4px 18px 2px rgba(0,0,0,0.7);

`