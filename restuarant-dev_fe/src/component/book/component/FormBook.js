import React, { useEffect, useState } from "react";
import "./formBook.css";
import { DatePicker, message } from "antd";
import moment from "moment";
import "antd/dist/antd.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function FormBook() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [numberTable, setNumberTable] = useState("");
  const [dateTime, setDateTime] = useState(
      moment(new Date()).format("DD-MM-YYYY")
  );
  const onChangeTimeBook = (date, dateString) => {
    setDateTime(moment(date).format("DD-MM-YYYY"));
  };
  const saveBook = () => {
    // console.log(name, "-", phone, "-", numberTable);
    if (name !== "" && phone !== "" && numberTable !== "") {
      if (0 < numberTable && numberTable < 13) {
        var phoneno = /^\d{10}$/;
        if (phone.match(phoneno)) {
          axios
              .put("http://localhost:4000/restaurant/book", {
                name: numberTable,
                status: dateTime,
                nameCustomer: name,
                phoneNumber: phone,
              })
              .then((res) => {
                // setListCommentUser([...listCommentUser.concat(res.data.results)])
                // // console.log(listCommentUser.concat(res.data.results));
                navigate("/view");
              })
              .catch((error) => {
                const errorMsg = error.message;
              });
        } else {
          message.error("Số điện thoại không đúng", 3);
          return false;
        }
        console.log(numberTable);
      } else {
        message.error("Số bàn sai", 3);
      }
    } else {
      message.error("Vui lòng điền đầy đủ thông tin", 3);
    }
  };
  useEffect(() => {}, [name, phone, numberTable, dateTime]);
  return (
      <div className="login-root">
        <div
            className="box-root flex-flex flex-direction--column"
            style={{
              minheight: "100vh",
              flexGrow: "1",
            }}
        >
          <div className="loginbackground box-background--white padding-top--64">
            <div className="loginbackground-gridContainer">
              <div
                  className="box-root flex-flex"
                  style={{ gridArea: " top / start / 8 / end" }}
              >
                <div
                    className="box-root"
                    style={{
                      backgroundimage:
                          "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                      flexGrow: "1",
                    }}
                ></div>
              </div>
              <div
                  className="box-root flex-flex"
                  style={{ gridArea: " 4 / 2 / auto / 5" }}
              >
                <div
                    className="box-root box-divider--light-all-2 animationLeftRight tans3s"
                    style={{ flexGrow: "1" }}
                ></div>
              </div>
              <div
                  className="box-root flex-flex"
                  style={{ gridArea: " 6 / start / auto / 2" }}
              >
                <div
                    className="box-root box-background--blue800"
                    style={{ flexGrow: "1" }}
                ></div>
              </div>
              <div
                  className="box-root flex-flex"
                  style={{ gridArea: " 7 / start / auto / 4" }}
              >
                <div
                    className="box-root box-background--blue animationLeftRight"
                    style={{ flexGrow: "1" }}
                ></div>
              </div>
              <div
                  className="box-root flex-flex"
                  style={{ gridArea: " 8 / 4 / auto / 6" }}
              >
                <div
                    className="box-root box-background--gray100 animationLeftRight tans3s"
                    style={{ flexGrow: "1" }}
                ></div>
              </div>
              <div
                  className="box-root flex-flex"
                  style={{ gridArea: " 2 / 15 / auto / end" }}
              >
                <div
                    className="box-root box-background--cyan200 animationRightLeft tans4s"
                    style={{ flexGrow: "1" }}
                ></div>
              </div>
              <div
                  className="box-root flex-flex"
                  style={{ gridArea: " 3 / 14 / auto / end" }}
              >
                <div
                    className="box-root box-background--blue animationRightLeft"
                    style={{ flexGrow: "1" }}
                ></div>
              </div>
              <div
                  className="box-root flex-flex"
                  style={{ gridArea: " 4 / 17 / auto / 20" }}
              >
                <div
                    className="box-root box-background--gray100 animationRightLeft tans4s"
                    style={{ flexGrow: "1" }}
                ></div>
              </div>
              <div
                  className="box-root flex-flex"
                  style={{ gridArea: " 5 / 14 / auto / 17" }}
              >
                <div
                    className="box-root box-divider--light-all-2 animationRightLeft tans3s"
                    style={{ flexGrow: "1" }}
                ></div>
              </div>
            </div>
          </div>
          <div
              className="box-root padding-top--24 flex-flex flex-direction--column"
              style={{ flexGrow: "1", zIndex: "9" }}
          >
            <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
              {/* <h1 style={{ color: "blue", fontFamily: "sans-serif" }}>Đặt Bàn</h1> */}
            </div>
            <div className="formbg-outer">
              <div className="formbg">
                <div className="formbg-inner padding-horizontal--48">
                  <span className="padding-bottom--15">Điền thông để đặt bàn</span>
                  <form id="stripe-login">
                    <div className="field padding-bottom--24">
                      <label for="email">Tên Khách hàng</label>
                      <input
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                        <label for="password">Số điện thoại </label>
                        <div className="reset-pass"></div>
                      </div>
                      <p>Một mã xác nhận sẽ gửi đến quý khách</p>
                      <input
                          type="text"
                          onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="field padding-bottom--24">
                      <label for="email">Đặt bàn số</label>
                      <p>Số bàn từ 1 - 12</p>
                      <input
                          type="number"
                          onChange={(e) => setNumberTable(e.target.value)}
                      />
                    </div>
                    <div className="field field-checkbox  flex-flex align-center">
                      <label for="checkbox">
                        <input type="checkbox" name="checkbox" /> Số bàn đặt
                      </label>
                    </div>
                    <br />
                    <DatePicker
                        defaultValue={moment(new Date())}
                        onChange={onChangeTimeBook}
                    />
                    <br />
                    <div
                        className="field padding-bottom--24"
                        style={{ marginTop: "5%" }}
                    >
                      {/* <input type="submit" name="submit" value="Đặt bàn" /> */}
                      <a
                          style={{
                            background: "#75AAE9",
                            padding: "10px 20px 10px 20px",
                            float: "right",
                            borderRadius: "8px",
                          }}
                          onClick={saveBook}
                      >
                        Đặt bàn
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default FormBook;
