import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "MatinKim",
    "Sale",
    "지속가능성",
  ];

  return (
    <div>
      <div className="login-btn">
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>

      <div className="nav-section">
        <img
          width={150}
          src="https://matinkim.com/img/common/logo-black.svg"
          alt=""
        />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
