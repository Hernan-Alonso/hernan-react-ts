import React from 'react'
import Button from '../Button'
import styled from 'styled-components'

const Formulario = () => {
    return (
        <FormStyled>
            <ContainerStyled>
                <LabelStyled>
                    <SpanStyled>Email address</SpanStyled>
                    <InputStyled type="text" placeholder="Enter email"/>
                </LabelStyled>
                <LabelStyled>
                    <SpanStyled>Password</SpanStyled>
                    <InputStyled type="text" placeholder="Enter password"/>
                </LabelStyled>
                <label>
                    <input type="checkbox"/><span> Remember me</span>
                </label>
                <ButtonContainerStyled>
                <Button label={"Submit"} />
                </ButtonContainerStyled>
            </ContainerStyled>
        </FormStyled>
    )
}

export default Formulario

const FormStyled = styled.form`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin: 20px auto;
`
const ContainerStyled = styled.div`
    width: 100%;
    padding: 2rem;
    margin: .2rem 1rem;
`
const LabelStyled = styled.label`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 10px auto;
`
const SpanStyled = styled.span`
    display: block;
    flex: 1;
    margin: 10px 0 5px 0;
`
const InputStyled = styled.input`
    margin: .5rem 0 .2rem 0;
    padding: .2rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;
`
const ButtonContainerStyled = styled.div`
    width: 100%;
    padding: 1rem;
    margin: .7rem .2rem;
`