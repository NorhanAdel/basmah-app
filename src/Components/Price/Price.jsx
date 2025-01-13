import React from "react";
import {
  priceadvertise,
  priceend,
  priceLogo,
  pricemididle,
  priceWebsite,
} from "../../constant/price";
import "./Price.scss";
function Price() {
  return (
    <div className="price_page">
      <div className="price_container">
        <h1 className="price_title">اسعار باقات التسويق الالكتروني المتكامل</h1>
        <div className="price_content">
          <div className="pricenum1">
            <div className="price_advertise_title">
              <h1> باقه شهريه  </h1>
              <span>باقه التسويق المعتاده </span>
            </div>
            <div className="ad_content">
              <div className="ad_price">
                <h2>
                  {" "}
                  1.500<sup> ريال</sup>
                </h2>
                <span>شهريا</span>
              </div>
              <div className="price_logo">
                <ul className="price_logos">
                  {priceLogo.map((item, i) => {
                    return (
                      <li kery={i}>
                        <span>
                          {" "}
                          <item.icons />
                        </span>{" "}
                        {item.title}
                      </li>
                    );
                  })}
                </ul>
                <p>الباقه غير شامله الاعلانات المموله</p>
              </div>
            </div>
          </div>

          <div className="pricenum1">
            <div className="price_advertise_title">
              <h1> باقه 6 شهور</h1>
              <span>باقه التسويق الاكثر مبيعا</span>
            </div>
            <div className="ad_content">
              <div className="ad_price">
                <h2>
                  {" "}
                  4000<sup>ريال</sup>
                </h2>
                <span>  اشهر 6</span>
              </div>
              <div className="price_logo">
                <ul className="price_logos">
                  {pricemididle.map((item, i) => {
                    return (
                      <li kery={i}>
                        <span>
                          {" "}
                          <item.icons />
                        </span>{" "}
                        {item.title}
                      </li>
                    );
                  })}
                </ul>
                <p>الباقه غير شامله الاعلانات المموله</p>
              </div>
            </div>
          </div>

          <div className="pricenum1">
            <div className="price_advertise_title">
              <h1>   باقه سنويه</h1>
              <span>باقه التسويق المميزه</span>
            </div>
            <div className="ad_content">
              <div className="ad_price">
                <h2>
                  {" "}
                  10000<sup>ريال</sup>
                </h2>
                <span>سنويه</span>
              </div>
              <div className="price_logo">
                <ul className="price_logos">
                  {priceend.map((item, i) => {
                    return (
                      <li kery={i}>
                        <span>
                          {" "}
                          <item.icons />
                        </span>{" "}
                        {item.title}
                      </li>
                    );
                  })}
                </ul>
                <p>الباقه غير شامله الاعلانات المموله</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
