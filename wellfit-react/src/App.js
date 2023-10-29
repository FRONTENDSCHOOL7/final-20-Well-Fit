import { createGlobalStyle } from 'styled-components';
import reset from '../src/resetcss/reset.css';
import Footer from './Components/common/Footer/Footer';
import PageUsersProfile from './Pages/Profile/PageUsersProfile';
import PageMineProfile from './Pages/Profile/PageMineProfile';
// import PageHome from './Pages/Home/PageHome';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'SUIT-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'SUIT-Regular', sans-serif; /* 사용할 폰트 지정 */
    margin: 0 auto;
    width: 390px;
    background-color: #dbdbdb;
  }

  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Footer /> */}
    </>
  );
}
export default App;
