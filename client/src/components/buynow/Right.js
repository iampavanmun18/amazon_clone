import React from 'react'

const Right = () => {
    return (
        <div className="right_buy">
            <img
                src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                alt="rightimg"
            />
            <div className="cost_right">
                <p>
                    Your order is eligible for FREE Delivery. <br />
                    <span style={{ color: "#565959" }}>
                        Select this option at checkout. Details
                    </span>
                </p>
                <h3>
                    Subtota items: <span style={{ fontWeight: "700" }}> ₹700.00</span>
                </h3>
                <button className="rightbuy_btn">Proceed to Buy</button>
                <div className="emi">Emi available</div>
                <span>
                    Your order qualifies for EMI with valid credit cards (not
                    available on purchase of Gold, Jewelry, Gift cards and Amazon pay
                    balance top up). Learn more
                </span>
            </div>
        </div>
    )
}

export default Right