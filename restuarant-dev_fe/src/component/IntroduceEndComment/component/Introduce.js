import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import background_introduce from "../../../image/background-introduce.png";
import background_introduce1 from "../../../image/background-introduce1.png";
import Card from "./Card";
import "./Introduce.css";
import Comment from "./Comment";
import { message } from "antd";

function Dish() {
    const [textEntered, setTextEntered] = useState({
        name: "",
        email: "",
        number: "",
        address: "",
    });

    const sendMessage = () => {
        message.success("Thông tin được lưu thành công", 3);
        setTextEntered({ name: "", email: "", number: "", address: "" });
    };

    const handleChangeText = (e) => {
        setTextEntered(e.target.value);
    };
    return (
        <div className="introduce">
            <div className="introduce_image">
                <img
                    src={background_introduce}
                    className="background-img background-img0"
                ></img>
                <img
                    src={background_introduce1}
                    className="background-img background-img1"
                ></img>
            </div>

            <div className="introduce-content">
                <div className="introduce-menu">
                    <div className="introduce-information">
                        <label>Thổi hồn ẩm thực Việt</label>
                        <p> Bánh phở mềm mềm, nước dùng ngọt đậm vị</p>
                        <p> xương ống heo, hành ngò thơm nức mũi,</p>
                        <p>thịt ăn kèm đầy bát chắc chắn sẽ làm bạn hài lòng.</p>
                    </div>
                    <div className="progress-bar-bottom">
                        <div className="progress-bar">
                            <ProgressBar now={60} variant="dark" />
                        </div>
                        <label>05/05</label>
                    </div>
                </div>
            </div>
            <div className="trade-story">
                <label>CÂU CHUYỆN THƯƠNG HIỆU</label>
                <br />
                <i>-- Tinh hoa ẩm thực Việt --</i>
                <div className="trade-story-content">
                    <div className="trade-story-content-text">
                        <p className="text-center">
                            Nhà hàng Hương Việt với quy mô lớn xây dựng đạt tiêu chuẩn sang
                            trọng bậc nhất Hà Nội. Trở thành điểm đến yêu thích cho thực khách
                            yêu ẩm thực truyền thống Việt Nam. Mang đến cho thực khách Hà
                            Thành không gian kiến trúc cổ Hội An. Cách bài trí không gian nhà
                            hàng trong nhà và ngoài trời tinh tế. Phù hợp phục vụ những buổi
                            tiệc cưới, tiệc sinh nhật, tiệc liên hoan công ty, tiệc họp lớp…
                            Cùng với đó là đội ngũ đầu bếp chuyên nghiệp. Với tay nghề chế
                            biến món ăn đứng đầu hàng ngũ đầu bếp Việt Nam. Đặc biệt vào những
                            buổi cuối năm đến với nhà hàng Hương Việt thực khách sẽ được trải
                            nghiệm thực đơn ẩm thực được thiết kế từ các chuyên gia ẩm thực
                            giàu kinh nghiệm.
                        </p>
                        <p className="list-add">
                            Với sự phát triển không ngừng, đến nay Hương Việt đã xây dựng và
                            hoạt động 4 cơ sở:
                        </p>
                        <ul className="list-add">
                            <li>CS1: 322 Mỹ Đình, Nam Từ Liêm, Hà Nội. </li>
                            <li>CS3: Số 21 đường 19/5, Văn Quán, Hà Đông </li>
                            <li>CS4: 17 Tam Khương (số 17 ngõ 10 Tôn Thất Tùng). </li>
                            <li>CS5: 81B Nguyễn Khang, Yên Hòa, Cầu Giấy.</li>
                        </ul>
                    </div>
                    <img src="https://doanhnhanplus.vn/wp-content/uploads/2018/07/DN-Hoi-An-Sense-diem-den-cua-cac-nguyen-thu-quoc-gia-TinDN-270-718-4.jpg"></img>
                </div>
            </div>
            <div className="trade-story">
                <label>TINH HOA ẨM THỰC VIỆT</label>
                <br />
                <i>— Hương vị ẩm thực Việt chỉ có tại Hương Việt —</i>
                <div className="trade-story-content">
                    <img
                        style={{ marginRight: "3%" }}
                        src="https://media-cdn.tripadvisor.com/media/photo-s/04/7a/52/ce/longson-muine-exotic.jpg"
                    ></img>
                    <div className="trade-story-content-text">
                        <p className="text-center">
                            Nhà hàng Hương Việt với quy mô lớn xây dựng đạt tiêu chuẩn sang
                            trọng bậc nhất Hà Nội. Trở thành điểm đến yêu thích cho thực khách
                            yêu ẩm thực truyền thống Việt Nam. Mang đến cho thực khách Hà
                            Thành không gian kiến trúc cổ Hội An. Cách bài trí không gian nhà
                            hàng trong nhà và ngoài trời tinh tế. Phù hợp phục vụ những buổi
                            tiệc cưới, tiệc sinh nhật, tiệc liên hoan công ty, tiệc họp lớp…
                            Cùng với đó là đội ngũ đầu bếp chuyên nghiệp. Với tay nghề chế
                            biến món ăn đứng đầu hàng ngũ đầu bếp Việt Nam. Đặc biệt vào những
                            buổi cuối năm đến với nhà hàng Hương Việt thực khách sẽ được trải
                            nghiệm thực đơn ẩm thực được thiết kế từ các chuyên gia ẩm thực
                            giàu kinh nghiệm.
                        </p>
                        <p className="list-add">
                            Với sự phát triển không ngừng, đến nay Hương Việt đã xây dựng và
                            hoạt động 4 cơ sở:
                        </p>
                        <ul className="list-add">
                            <li>CS1: 322 Mỹ Đình, Nam Từ Liêm, Hà Nội </li>
                            <li>CS3: Số 21 đường 19/5, Văn Quán, Hà Đông </li>
                            <li>CS4: 17 Tam Khương (số 17 ngõ 10 Tôn Thất Tùng). </li>
                            <li>CS5: 81B Nguyễn Khang, Yên Hòa, Cầu Giấy.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="trade-story infor-menu">
                <label style={{ paddingTop: "2%" }}>THỰC ĐƠN ĐẶC BIỆT</label>
                <br />
                <div>
                    <Card />
                </div>
            </div>
            <div className="trade-story" style={{ marginBottom: "5%" }}>
                <label>TIN TỨC</label>
                <br />
                <i>— Thông tin và khuyến mãi —</i>
                <div className="box-content">
                    <div class="card">
                        <div class="imgBx">
                            <img
                                src="https://eatanceapp.com//wp-content/uploads/2021/12/restaurant-promotion-ideas.jpg"
                                alt="images"
                            />
                        </div>
                        <div class="details">
                            <button className="custom-btn">Xem thêm</button>
                        </div>
                    </div>

                    <div class="card">
                        <div class="imgBx">
                            <img
                                src="https://img.pikbest.com/01/53/86/1pIkbEsTzpIkbEsTCH8.jpg-0.jpg!bw700"
                                alt="images"
                            />
                        </div>
                        <div class="details">
                            <button className="custom-btn">Xem thêm</button>
                        </div>
                    </div>

                    <div class="card">
                        <div class="imgBx">
                            <img
                                src="https://media.foody.vn/res/g7/69554/prof/s/foody-mobile-13178852_10857893781-846-636416711536859072.jpg"
                                alt="images"
                            />
                        </div>
                        <div class="details">
                            <button className="custom-btn">Xem thêm</button>
                        </div>
                    </div>
                </div>
            </div>
            <Comment></Comment>
            <div className=" infor-menu infor-contact">
                <div className="infor-introduce infor-contact-item">
                    <div className="trade-story">
                        <label>Hương Việt Restaurant</label>
                        <br />
                        <i>— Hương vị Việt đậm chất văn hoá Việt —</i>
                        <hr />
                        <div className="trade-story-content">
                            <div>
                                <div
                                    style={{
                                        display: "flex",
                                        fontWeight: "normal",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    Hotline:{" "}
                                    <span
                                        style={{
                                            fontSize: "15px",
                                            marginLeft: "5px",
                                            color: "#d89417",
                                        }}
                                    >
                    0965610055
                  </span>
                                </div>
                                <br />
                                <p className="text-center">
                                    Nhà hàng Hương Việt với quy mô lớn xây dựng đạt tiêu chuẩn
                                    sang trọng bậc nhất Hà Nội. Trở thành điểm đến yêu thích cho
                                    thực khách yêu ẩm thực truyền thống Việt Nam. Mang đến cho
                                    thực khách Hà Thành không gian kiến trúc cổ Hội An. Cách bài
                                    trí không gian nhà hàng trong nhà và ngoài trời tinh tế. Phù
                                    hợp phục vụ những buổi tiệc cưới, tiệc sinh nhật, tiệc liên
                                    hoan công ty, tiệc họp lớp… Cùng với đó là đội ngũ đầu bếp
                                    chuyên nghiệp. Với tay nghề chế biến món ăn đứng đầu hàng ngũ
                                    đầu bếp Việt Nam. Đặc biệt vào những buổi cuối năm đến với nhà
                                    hàng Hương Việt thực khách sẽ được trải nghiệm thực đơn ẩm
                                    thực được thiết kế từ các chuyên gia ẩm thực giàu kinh nghiệm.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div
                    className="infor-address infor-contact-item"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <div
                        className="trade-story"
                        style={{ display: "grid", margin: "5%" }}
                    >
                        <div style={{ marginTop: "7%" }}>
                            <label>Hương Việt Restaurant</label>
                            <br />
                            <i>— Hương vị đậm chất Việt —</i>
                        </div>

                        <div className="trade-story-content">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.247659892366!2d105.7699102154988!3d21.022774286001628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454af1a896751%3A0xe60949cdb52032ca!2zTmcuIDMyMiDEkC4gTeG7uSDEkMOsbmgsIE3hu7kgxJDDrG5oIDEsIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1665115648343!5m2!1svi!2s"
                                style={{ width: "auto", height: "430px" }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div style={{ textAlign: "center", padding: "0 5%", width: "100%" }}>
                        <p
                            style={{ color: "orange", fontSize: "26px", fontWeight: "bold" }}
                        >
                            Liên hệ
                        </p>
                        <span>
              Bạn cần thông tin về nhà hàng của chúng tôi, hoặc cách đặt bàn ?
            </span>
                        <span>
              Để lại cho chúng tôi một lời nhắn chúng tôi sẽ liên lạc với bạn
            </span>
                        <div>
                            <div id="first_form">
                                <label>Họ và Tên :</label>
                                <input
                                    id="fname"
                                    placeholder="Họ và Tên"
                                    type="text"
                                    onChange={handleChangeText}
                                    value={textEntered.name}
                                />
                                <label>Email :</label>
                                <input
                                    id="email"
                                    placeholder="Email"
                                    type="text"
                                    onChange={handleChangeText}
                                    value={textEntered.email}
                                />
                                <label>Số điện thoại :</label>
                                <input
                                    id="contact"
                                    placeholder="Số điện thoại"
                                    type="text"
                                    onChange={handleChangeText}
                                    value={textEntered.number}
                                />
                                <label>Địa chỉ :</label>
                                <input
                                    id="address"
                                    placeholder="Địa chỉ"
                                    type="text"
                                    onChange={handleChangeText}
                                    value={textEntered.address}
                                />
                                <button type="submit" onClick={sendMessage}>
                                    Gửi liên hệ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default Dish;
