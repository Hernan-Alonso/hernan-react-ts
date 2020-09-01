import React, {FC} from 'react'
import styled from 'styled-components'
type Props={
    label: string
}
const Button: FC<Props> = ({label}: Props) => {
    return (
        <ButtonStyled >{label}</ButtonStyled>
    )
}

export default Button

const ButtonStyled = styled.button`
    width: 100%;
    background: #2549EB;
    outline: none;
    display: inline-block;
    border: none;
    padding: .7rem 2rem;
    margin: 0;
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    border-radius: 5px;

`