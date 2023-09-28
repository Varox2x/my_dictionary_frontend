import './settings/css/reset.css'
import * as S from './components/elements/global/elements';
import LearnView from './components/views/LearnView';

function App() {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <LearnView />
        </S.Wrapper>
      </S.Container>
    </>
  );
}

export default App;
