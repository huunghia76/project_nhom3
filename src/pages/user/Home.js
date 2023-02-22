import logo from "../../img/banner.jpg";

const Home = () => {
  return (
    <>
      {" "}
      <div>
        {/* BANNER */}
        <div className="banner container-fluid">
          <div className="row pt-3">
            <div
              id="carouselExampleInterval"
              className="carousel slide px-0"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={10000}>
                  <img src={logo} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                  <img src={logo} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="/carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="/carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <section>
          <div className="container">
            <h1 className="text-center py-3 text-success">SẢN PHẨM MỚI</h1>
            <div className="row row-cols-1 row-cols-lg-3 g-4 pt-5" data-id={22}>
              <div className="col mb-3 mb-lg-0">
                <div className="card">
                  <a href="chitiet_bolatchay.html">
                    <img src={logo} width="100%" alt="..." />
                  </a>
                  <div className="card-body text-center">
                    <h5 className="card-title">Bò lát</h5>
                    <p className="card-text">145.000đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3 mb-lg-0">
                <div className="card">
                  <img src={logo} width="100%" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Bò lát chay</h5>
                    <p className="card-text">75.000 đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card">
                  <img src={logo} alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Chân gà</h5>
                    <p className="card-text">75.000 đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card">
                  <img src={logo} alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Hạt nêm</h5>
                    <p className="card-text">75.000 đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card">
                  <img src={logo} alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Bột gạo lức</h5>
                    <p className="card-text">25.000 đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card">
                  <img src={logo} alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Bóng cá</h5>
                    <p className="card-text">25.000 đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SP KHÔ */}
        <section>
          <div className="container">
            <h1 className="text-center py-3 text-success pt-5">SẢN PHẨM KHÔ</h1>
            <div
              className="row row-cols-1 row-cols-lg-4 g-4 pt-5 owl-product-category owl-product-category-22"
              data-id={22}
            >
              <div className="col mb-3">
                <div className="card">
                  <img src={logo} alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Bò lát thái dương</h5>
                    <p className="card-text">145.000đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card">
                  <img src={logo} alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Bò lát chay 50g</h5>
                    <p className="card-text">75.000 đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card">
                  <img src={logo} alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Gà cục</h5>
                    <p className="card-text">30.000đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card">
                  <img src={logo} alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Bóng cá</h5>
                    <p className="card-text">25.000 đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SP ĐÔNG LẠNH */}
        <section>
          <div className="container">
            <h1 className="text-center py-3 text-success pt-5">
              SẢN PHẨM ĐÔNG LẠNH
            </h1>
            <div
              className="row row-cols-1 row-cols-lg-4 g-4 pt-5 owl-product-category owl-product-category-22"
              data-id={22}
            >
              <div className="col mb-3">
                <div className="card">
                  <img src={logo} alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Vịt quay</h5>
                    <p className="card-text">145.000đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card">
                  <img src={logo} alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Cá hồi Âu Lạc</h5>
                    <p className="card-text">75.000 đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card">
                  <img src={logo} alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Cá lóc</h5>
                    <p className="card-text">30.000đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card">
                  <img src={logo} alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Gà nữa con</h5>
                    <p className="card-text">25.000 đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h1 className="text-center py-3 text-success pt-5">
              SẢN PHẨM TIỆC TRÙNG-ĐÓNG HỘP ĂN LIỀN
            </h1>
            <div
              className="row row-cols-1 row-cols-lg-4 g-4 pt-5 owl-product-category owl-product-category-22"
              data-id={22}
            >
              <div className="col mb-3">
                <div className="card">
                  <img src={logo} alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Cá viên</h5>
                    <p className="card-text">145.000đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card">
                  <img src={logo} alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Lẩu mắm Âu Lạc</h5>
                    <p className="card-text">75.000 đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card">
                  <img src={logo} width="100%" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Gan chay Âu Lạc</h5>
                    <p className="card-text">30.000đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3 mb-lg-0">
                <div className="card">
                  <img src={logo} width="100%" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Chân gà chay</h5>
                    <p className="card-text">25.000 đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h1 className="text-center py-3 text-success pt-5">
              GIA VỊ - NƯỚC CHẤM
            </h1>
            <div
              className="row row-cols-1 row-cols-lg-4 g-4 pt-5 owl-product-category owl-product-category-22"
              data-id={22}
            >
              <div className="col mb-3 mb-lg-0">
                <div className="card">
                  <img src="img/giavi/hat_nem.jpg" width="100%" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Hạt niêm Nutricook</h5>
                    <p className="card-text">145.000đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3 mb-lg-0">
                <div className="card">
                  <img src="img/giavi/mam_ruoc.jpg" width="100%" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Mắm ruốc Tây Ninh</h5>
                    <p className="card-text">75.000 đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3 mb-lg-0">
                <div className="card">
                  <img src="img/giavi/nuoc_mam.jpg" width="100%" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Nước mắm</h5>
                    <p className="card-text">30.000đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3 mb-lg-0">
                <div className="card">
                  <img src="img/giavi/nuoc-tuong.jpg" width="100%" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Nước tương</h5>
                    <p className="card-text">25.000 đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Thực phẩm dinh dưỡng */}
        <section>
          <div className="container">
            <h1 className="text-center py-3 text-success pt-5">
              THỰC PHẨM DINH DƯỠNG
            </h1>
            <div
              className="row row-cols-1 row-cols-lg-4 g-4 pt-5 owl-product-category owl-product-category-22"
              data-id={22}
            >
              <div className="col mb-3 mb-lg-0">
                <div className="card">
                  <img src="img/tpdd/bot_5_dau.jpg" width="100%" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Bột 5 màu</h5>
                    <p className="card-text">145.000đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3 mb-lg-0">
                <div className="card">
                  <img src="img/tpdd/bot_dau_nanh.jpg" width="100%" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Bột đậu nành</h5>
                    <p className="card-text">75.000 đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3 mb-lg-0">
                <div className="card">
                  <img src="img/tpdd/bot_gao.jpg" width="100%" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Bột gạo</h5>
                    <p className="card-text">30.000đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
              <div className="col mb-3 mb-lg-0">
                <div className="card">
                  <img src="img/tpdd/bot_me_den.jpg" width="100%" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Bột mè đen</h5>
                    <p className="card-text">25.000 đ</p>
                  </div>
                  <a href="/" className="btn btn-success p-2">
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* BLOG */}
        <section>
          <div className="container">
            <h1 className="text-center pt-5">BÀI VIẾT</h1>
            <div className="row row-cols-1 row-cols-lg-3 g-4 pt-5">
              <div className="col my-0">
                <img
                  src="img/Blog/Thuc-don-chay-Ca-hoi-02-350.png"
                  alt
                  className="img-fluid w-100 pb-2"
                />
                <div className="card-body">
                  <h5 className="card-title">Cá Hồi Sushi Chay Chiên Giòn</h5>
                  <p className="card-text">
                    <i className="fa-regular fa-calendar" /> 06 Apr 2045
                  </p>
                  <p className="card-text">
                    Cá hồi sushi chay là một món ăn còn khá mới lạ đối với thị
                    trường thực phẩm chay Việt Nam. Bằng vị ngon thơm, béo đặc
                    trưng cùng hàm lượng dinh dưỡng cao mà món ăn này nhanh
                    chóng được phổ biến, góp phần phong phú hơn thực đơn chay
                    của nhiều gia đình.
                  </p>
                </div>
                <div className="card-body">
                  <a href="/" className="text-success text-decoration-none">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col my-0">
                <img
                  src="img/Blog/Thuc-don-chay-Cha-lua-350-600.png"
                  alt
                  className="img-fluid w-100 pb-2"
                />
                <div className="card-body">
                  <h5 className="card-title">Chả Lụa Chay Sốt Cay</h5>
                  <p className="card-text">
                    <i className="fa-regular fa-calendar" /> 06 Apr 2045
                  </p>
                  <p className="card-text">
                    Chả lụa chay là món ăn không còn xa lạ với nhiều gia đình
                    Việt. Với vị thơm béo vừa phải, độ ngon bắt miệng, chả lụa
                    chay đã trở thành món ăn khoái khẩu của không ít tín đồ ẩm
                    thực. Chả lụa chay sốt cay là một công thức vừa đơn giản mà
                    lại tiết kiệm thời gian
                  </p>
                </div>
                <div className="card-body">
                  <a href="/" className="text-success text-decoration-none">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col my-0">
                <img
                  src="img/Blog/3500-600-Ca-ri-chay.png"
                  alt
                  className="img-fluid w-100 pb-2"
                />
                <div className="card-body">
                  <h5 className="card-title">Cách Nấu Món Cà Ri Chay</h5>
                  <p className="card-text">
                    <i className="fa-regular fa-calendar" /> 06 Apr 2045
                  </p>
                  <p className="card-text">
                    Cà ri là món ăn quen thuộc trong thực đơn của nhiều gia đình
                    Việt. Với hương vị đậm đà đặc trưng của bột cà ri kết hợp
                    với các loại rau củ và nguyên liệu thuần chay, cà ri chay
                    không chỉ thơm ngon hấp dẫn mà còn chứa nhiều chất dinh
                    dưỡng, tốt cho sức khỏe.
                  </p>
                </div>
                <div className="card-body">
                  <a href="/" className="text-success text-decoration-none">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
