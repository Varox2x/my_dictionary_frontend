import * as S from './elements'

type Props = {
    isChecked: boolean,
    setChecked: (isChecked: boolean) => void
}

const AuthRememberMe = ({ isChecked, setChecked }: Props) => {

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };

    return (
        <S.Wrapper>
            <S.Checkbox type='checkbox'
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <S.Title onClick={handleCheckboxChange} >Remamber me</S.Title>

        </S.Wrapper>
    )
}

export default AuthRememberMe