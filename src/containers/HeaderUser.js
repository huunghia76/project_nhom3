import image from "../img/logo-thucphamchay-540X180.png";
import { Link } from "react-router-dom";

const HeaderUser = () => {
  return (
    <>
      <div>
        <header className="bg-light py-3">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-12 col-lg-6 px-lg-0">
                <div className="d-flex">
                  <p className="border-end pe-3">
                    <i className="fa-solid fa-envelope me-2" /> hello@gmail.com
                  </p>
                  <p className="ps-3">Phục vụ tận tâm</p>
                </div>
              </div>
              <div className="col-12 col-lg-6 px-lg-0">
                <div className="d-flex float-start float-lg-end">
                  <div className="border-end">
                    <i className="fa-brands me-2 fa-facebook" />
                    <i className="fa-brands me-2 fa-google" />
                    <i className="fa-brands me-2 fa-instagram" />
                  </div>
                  <div className="ps-3">
                    <i className="fa-solid fa-user" /> Login
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* trang chủ */}
        <header>
          <div className="container">
            <div className="row">
              <div className="col-6 col-lg-3">
                <img
                  src={image}
                  alt=""
                  className="img-fluid"
                  style={{ height: "100", width: "80%" }}
                />
              </div>
              <div className="col-6">
                <nav className="navbar navbar-expand-lg">
                  <div className="container-fluid justify-content-end">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link
                            className="nav-link text-success fw-bold"
                            aria-current="page"
                            to="/home"
                          >
                            TRANG CHỦ
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link text-success fw-bold"
                            to="/home"
                          >
                            CỬA HÀNG
                          </Link>
                        </li>
                        <li className="dropdown pt-2">
                          <Link
                            className="text-success fw-bold text-decoration"
                            to="/home"
                            role="button"
                            id="dropdownMenuLink"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            TRANG
                          </Link>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>
                              <Link
                                className="dropdown-item text-success"
                                to="/home"
                              >
                                Chi tiết Blog
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item text-success"
                                to="/home"
                              >
                                Giỏ hàng
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item text-success"
                                to="/home"
                              >
                                Kiểm Tra Lại
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link text-success fw-bold"
                            to="/home"
                          >
                            BLOG
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link text-success fw-bold"
                            to="/home"
                          >
                            LIÊN HỆ
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-12 col-lg-3 text-center text-lg-end py-2">
                <div className="cart">
                  <i className="fa-sharp fa-solid fa-cart-shopping" />
                  <span className="text-black-50"> 30 vnd</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="danhmuc">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-3">
                <div className="dropdown pb-2">
                  <button
                    className="btn btn-success dropdown-toggle me-2 p-3"
                    style={{ width: "100%" }}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-bars" />
                    <span>Danh Mục</span>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <Link
                        className="dropdown-item text-success"
                        to="Shopping_spk.html"
                      >
                        Sản Phẩm Khô
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-success"
                        to="Shopping_spdl.html"
                      >
                        Sản Phẩm Đông Lạnh
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-success"
                        to="Shopping_sptt.html"
                      >
                        Sản Phẩm tiệc trùng đóng hộp- ăn liền
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-success"
                        to="Shopping_giavi.html"
                      >
                        Gia vị-nước chấm
                      </Link>
                      <Link
                        className="dropdown-item text-success"
                        to="Shopping_tpdd.html"
                      >
                        Thực phẩm dinh dưỡng
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2 p-3"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-success p-3" type="submit">
                    Search
                  </button>
                </form>
              </div>
              <div className="col-12 col-lg-3 pt-2">
                <i className="fa-solid fa-phone rounded-circle bg-secondary bg-opacity-10 text-success p-3 border-2 border-secondary" />
                +0923467898
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeaderUser;
