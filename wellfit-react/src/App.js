import { createGlobalStyle } from 'styled-components';
import reset from '../src/resetcss/reset.css';
import AppRoutes from './Router/AppRoutes';
import { UserProvider } from './Contexts/UserContext';

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
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </>
  );
}
export default App;
