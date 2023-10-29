import { Route, Routes, Outlet } from 'react-router-dom';
import SplashPage from '../Pages/Splash/SplashPage';
import PageHome from '../Pages/Home/PageHome';
import PageMineProfile from '../Pages/Profile/PageMineProfile';
import PageUserProfile from '../Pages/Profile/PageUsersProfile';
import PageProfileSetting from '../Pages/Profile/PageProfileSetting';
import PageProfileModification from '../Pages/Profile/PageProfileModification';
import PageChattingList from '../Pages/Chatting/PageChattingList';
import PageChatting from '../Pages/Chatting/PageChatting';
import PagePostUpload from '../Pages/Profile/PagePostUpload';
import PageMore from '../Pages/More/PageMore';
import Page404 from '../Pages/404/Page404';
import PageEmailLogin from '../Pages/Login/PageEmailLogin';
import PageSnsLogin from '../Pages/Login/PageSnsLogin';
import PageFollow from '../Pages/Follow/PageFollow';
import PagePost from '../Pages/Post/PagePost';
import PagePostUSer from '../Pages/Post/PagePostUser';
import PageSearch from '../Pages/Search/PageSearch';
import PageSignup from '../Pages/Signup/PageSignup';
import PageUploadProduct from '../Pages/Profile/PageUploadProduct';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/mainlogin" element={<PageSnsLogin />} />
      <Route path="/mainlogin/emaillogin" element={<PageEmailLogin />} />
      <Route path="/mainlogin/signup" element={<PageSignup />} />
      <Route
        path="/mainlogin/signup/profilesetting"
        element={<PageProfileSetting />}
      />

      <Route path="/home" element={<PageHome />} />
      <Route path="/home/search" element={<PageSearch />} />
      <Route path="/home/post/mine" element={<PagePost />} />
      <Route path="/home/post/user" element={<PagePostUSer />} />
      <Route path="/myprofile" element={<PageMineProfile />} />
      <Route path="/myprofile/follow" element={<PageFollow />} />
      <Route path="/myprofile/uploadproduct" element={<PageUploadProduct />} />
      <Route
        path="/myprofile/modification"
        element={<PageProfileModification />}
      />
      <Route path="/chattinglist" element={<PageChattingList />} />
      <Route path="/chattinglist/ongoing" element={<PageChatting />} />
      <Route path="/postupload" element={<PagePostUpload />} />
      <Route path="/pagemore" element={<PageMore />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;
