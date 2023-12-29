import * as S from "./elements"

type Props = {
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    name: string,
    type: string,
}

const AuthInput = ({ placeholder, value, onChange, name, type }: Props) => {
    return (
        <S.Input name={name} placeholder={placeholder} onChange={onChange} value={value} type={type} />
    )
}

export default AuthInput