import React, {FC} from 'react'
type Props={
    label: string
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const Button: FC<Props> = ({label,onClick}: Props) => {
    return (
        <button onClick={onClick}>{label}</button>
    )
}

export default Button
