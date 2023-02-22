const FooterUser = () => {
    return ( <>
    <footer className="bg-secondary bg-opacity-25">
  <div className="container pt-5">
    <div className="row pb-3 text-center">
      <div className="col">
        <h5>ĐỊA CHỈ LIÊN HỆ</h5>
        <p>
          <i className="fa-solid fa-location-dot" /> Địa chỉ: công viên phần
          mềm Quang Trung
        </p>
        <p>
          <i className="fa-solid fa-clock" /> Thời gian mở cửa: 8.00AM -
          10.00PM
        </p>
        <p>
          <i className="fa-solid fa-phone-flip" /> &lt;Số điện thoại: +09
          1223452&gt;
        </p>
        <p>
          <i className="fa-solid fa-envelope" /> &lt;Email:
          hello@gmail.com&gt;
        </p>
      </div>
    </div>
    <div className="row pb-3 text-center pt-3 border-top border-2 border-opacity-50 border-secondary">
      <div className="col">
        <h5>KẾT NỐI VỚI CHÚNG TÔI</h5>
        <div className="fa-1x">
          <i className="fa-brands me-2 fa-facebook" />
          <i className="fa-brands me-2 fa-google" />
          <i className="fa-brands me-2 fa-instagram" />
        </div>
      </div>
    </div>
    <div className="row pt-3 border-top border-2 border-opacity-50 border-secondary">
      <div className="col-12 col-lg-8">
        <p>Copyright© 2023- All Rights Reserved</p>
      </div>
      <div className="col-12 col-lg-3">&lt;Nhóm 3 -Cao Đẳng Sài Gòn&gt;</div>
      <div className="col-12 col-lg-1">
        <a href="/" type="submit" className="px-1 py-1 bg-danger bg-opacity-25 fw-bold text-white float-end"><i className="fas fa-chevron-up" /></a>
      </div>
    </div>
  </div>
</footer>

    </> );
}
 
export default FooterUser;