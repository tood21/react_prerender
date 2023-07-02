import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import AgeResult from "./pages/AgeResult";
import IncomeResult from "./pages/IncomeResult";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
        <ul>
            <li>
                <Link to={'/'}>홈</Link>
            </li>
            <li>
                <Link to={'/ageResult'}>건강나이결과</Link>
            </li>
            <li>
                <Link to={'/incomeResult'}>소득금액결과</Link>
            </li>
        </ul>
        <Helmet>
            <title>공통타이틀</title>
            <meta name="description" content="공통description" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="공통페이지의 트위터 제목" />
            <meta name="twitter:description" content="공통페이지의 트위터 설명" />
            <meta name="twitter:image" content="https://kr.objectstorage.ncloud.com/synctree/datamarket/static/showroom/thumbnail/square_00.png" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="공통페이지의 OG타이틀" />
            <meta property="og:description" content="공통페이지의 OG설명" />
            <meta property="og:image" content="https://kr.objectstorage.ncloud.com/synctree/datamarket/static/showroom/thumbnail/horizontal_00.png" />
        </Helmet>
      <Routes>
          {/*<Route path={'/'} element={<Home/>}  />*/}
          <Route path={'/'} element={<Home/>}  />
          <Route path={'/ageResult'} element={<AgeResult />}  />
          <Route path={'/incomeResult'} element={<IncomeResult />}  />
      </Routes>
    </div>
  );
}

export default App;
