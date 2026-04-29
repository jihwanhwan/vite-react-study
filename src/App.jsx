import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductAll from "./page/ProductAll";
import LoginPage from "./page/LoginPage";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import PrivateRoute from "./Route/PrivateRoute";

// 1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1 네비게이션바 만들기
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품디테일을 눌렀으나, 로그인이 안되어있을경우에는 로그인 페이지가 나온다

// 5. 로그인이 되어 있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼수 없다, 다시 로그인 페이지가 보인다
// 8. 로그인을 하면 로그아웃 , 로그아웃을 누르면 로그인
// 9. 상품을 검색할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  //true = 로그인 false = 로그인안됌

  useEffect(() => {
    console.log("aaaa", authenticate);
  }, [authenticate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<LoginPage setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </>
  );
}

export default App;
