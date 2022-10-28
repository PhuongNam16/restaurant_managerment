import React from "react";
import "./Card.css";
function Card() {
    return (
        <div>
            <section class="card-area">
                <section class="card-section">
                    <div class="card">
                        <div class="flip-card">
                            <div class="flip-card__container">
                                <div class="card-front">
                                    <div class="card-front__tp card-front__tp--city">
                                        <h2 class="card-front__heading">Bún Thang</h2>
                                        <p class="card-front__text-price">chỉ từ 85.000</p>
                                    </div>

                                    <div class="card-front__bt">
                                        <p class="card-front__text-view card-front__text-view--city">
                                            Chi tiết
                                        </p>
                                    </div>
                                </div>
                                <div class="card-back">
                                    <img
                                        style={{ width: "100%", height: "100%" }}
                                        src="https://bep360.net/wp-content/uploads/2021/06/cach-nau-bun-thang.jpg"
                                    ></img>
                                </div>
                            </div>
                        </div>

                        <div class="inside-page">
                            <div class="inside-page__container">
                                <h3 class="inside-page__heading inside-page__heading--city">
                                    Bún Thang
                                </h3>
                                <p class="inside-page__text">
                                    Mang hương vị chuẩn Hà Nội với 20 loại nguyên liệu.
                                </p>
                                <a href="#" class="inside-page__btn inside-page__btn--city">
                                    Chi tiết
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="card-section">
                    <div class="card">
                        <div class="flip-card">
                            <div class="flip-card__container">
                                <div class="card-front">
                                    <div class="card-front__tp card-front__tp--ski">
                                        <h2 class="card-front__heading">Phở bò Nam Định</h2>
                                        <p class="card-front__text-price">chỉ từ 55.000</p>
                                    </div>

                                    <div class="card-front__bt">
                                        <p class="card-front__text-view card-front__text-view--ski">
                                            Chi tiết
                                        </p>
                                    </div>
                                </div>

                                <div class="card-back">
                                    <img
                                        style={{ width: "100%", height: "100%" }}
                                        src="https://cachnau.vn/wp-content/uploads/2021/11/cach-nau-pho-bo-nam-dinh.jpg"
                                    ></img>
                                </div>
                            </div>
                        </div>

                        <div class="inside-page">
                            <div class="inside-page__container">
                                <h3 class="inside-page__heading inside-page__heading--ski">
                                    Phở Nam Định
                                </h3>
                                <p class="inside-page__text">
                                    Vị ngọt ngon đậm đà chuẩn hương vị phở Nam Định{" "}
                                </p>
                                <a href="#" class="inside-page__btn inside-page__btn--ski">
                                    Chi tiết
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="card-section">
                    <div class="card">
                        <div class="flip-card">
                            <div class="flip-card__container">
                                <div class="card-front">
                                    <div class="card-front__tp card-front__tp--beach">
                                        <h2 class="card-front__heading">Cá hồi nướng giấy bạc</h2>
                                        <p class="card-front__text-price">chỉ từ 135.000</p>
                                    </div>

                                    <div class="card-front__bt">
                                        <p class="card-front__text-view card-front__text-view--beach">
                                            Chi tiết
                                        </p>
                                    </div>
                                </div>
                                <div class="card-back">
                                    <img
                                        style={{ width: "100%", height: "100%" }}
                                        src="https://nghebep.com/wp-content/uploads/2017/12/ca-hoi-nuong-giay-bac.jpg"
                                    ></img>
                                </div>
                            </div>
                        </div>

                        <div class="inside-page">
                            <div class="inside-page__container">
                                <h3 class="inside-page__heading inside-page__heading--beach">
                                    Cá hồi nướng
                                </h3>
                                <p class="inside-page__text">
                                    Cá hồi là nguyên liệu có giá trị dinh dưỡng cao... !
                                </p>
                                <a href="#" class="inside-page__btn inside-page__btn--beach">
                                    Chi tiết
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="card-section">
                    <div class="card">
                        <div class="flip-card">
                            <div class="flip-card__container">
                                <div class="card-front">
                                    <div class="card-front__tp card-front__tp--camping">
                                        <h2 class="card-front__heading">Vi cá</h2>
                                        <p class="card-front__text-price">chỉ từ 199.000</p>
                                    </div>

                                    <div class="card-front__bt">
                                        <p class="card-front__text-view card-front__text-view--camping">
                                            Chi tiết
                                        </p>
                                    </div>
                                </div>
                                <div class="card-back">
                                    <img
                                        style={{ width: "100%" }}
                                        src="https://delicacy.vn/resize-image/600x600/thumnail-sun-vi-ca-map.jpg"
                                    ></img>
                                </div>
                            </div>
                        </div>

                        <div class="inside-page">
                            <div class="inside-page__container">
                                <h3 class="inside-page__heading inside-page__heading--camping">
                                    Vi cá
                                </h3>
                                <p class="inside-page__text">
                                    Vi cá mập thực phẩm mang nhiều lợi ích cho sức khoẻ !
                                </p>
                                <a href="#" class="inside-page__btn inside-page__btn--camping">
                                    Chi tiết
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default Card;
