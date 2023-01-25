import React, { useEffect, useState } from "react";
import "./cart.css";
import { Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import { ADD } from "../../redux/actions/action";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const { id } = useParams();
  const [inddata, setindData] = useState([]);

const history = useNavigate();

  const dispatch =  useDispatch();

  const getData = async () => {
    const res = await fetch(`/getproductone/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("data", data);
    setindData(data);
  };

  const addtocart = async (id) => {
    console.log(id);
    const check = await fetch(`/addcart/${id}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            inddata
        }),
        credentials: "include"
    });
    console.log(check);
    const data1 = await check.json();
    console.log(data1 +  'ok');

    if (check.status !== 201) {
        alert("no data available")
    } else {
        console.log("cart add ho gya hain");
        // setAccount(data1)
        history.push("/buynow");
    }
}

// const saveData =  (e)=>{
//   console.log(e)
//     dispatch(ADD(e))
  
// }


  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img src={inddata.url} alt="cart" />
          <div className="cart_btn">
            <button className="cart_btn1" onClick={()=>addtocart(inddata.id)}>
              Add to Cart
            </button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>Add to Cart</h3>
          <h4>Items Added to cart</h4>
          <Divider />
          <p className="mrp">
            M.R.P. : <del>₹200</del>
          </p>
          <p>
            Deal of the Day : <span style={{ color: "#B12704" }}>₹900.00</span>
          </p>
          <p>
            You save : <span style={{ color: "#B12704" }}> ₹500 </span>
          </p>

          <div className="discount_box">
            <h5>
              Discount : <span style={{ color: "#111" }}>"discount"</span>{" "}
            </h5>
            <h4>
              FREE Delivery :{" "}
              <span style={{ color: "#111", fontWeight: "600" }}>
                Oct 8 - 21
              </span>{" "}
              Details
            </h4>
            <p style={{ color: "#111" }}>
              Fastest delivery:{" "}
              <span style={{ color: "#111", fontWeight: "600" }}>
                {" "}
                Tomorrow 11AM
              </span>
            </p>
          </div>
          <p className="description">
            About the Iteam :{" "}
            <span
              style={{
                color: "#565959",
                fontSize: "14px",
                fontWeight: "500",
                letterSpacing: "0.4px",
              }}
            >
              "description"
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
