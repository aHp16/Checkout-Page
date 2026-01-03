import React, { useState } from "react";
import TravellerForm from "./components/TravellerForm";
import PriceSummary from "./components/PriceSummary";
import CouponInput from "./components/CouponInput";
import CouponInfo from "./components/CouponInfo";
import "./sty.css";

const TICKET_PRICE = 1000;
const LIFE_JACKET = 100;
const GST_RATE = 0.18;

export default function App() {
  const [travellers, setTravellers] = useState([
    { name: "", phone: "", thumb: false }
  ]);
  const [travelDate, setTravelDate] = useState("");
  const [coupon, setCoupon] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  const addTraveller = () => {
    setTravellers([...travellers, { name: "", phone: "", thumb: false }]);
    setIsCalculated(false);
    setCoupon("");
  };

  const updateTraveller = (index, field, value) => {
    const updated = [...travellers];
    updated[index][field] = value;
    setTravellers(updated);
    setIsCalculated(false);
    setCoupon("");
  };

  const validTravellers = travellers.filter(
    (t) => t.name.trim() && t.phone.trim() && t.thumb
  );

  const ticketTotal = validTravellers.length * TICKET_PRICE;
  const gst = ticketTotal * GST_RATE;
  const lifeJacketTotal = validTravellers.length * LIFE_JACKET;

  let discount = 0;
  if (coupon === "NEW10" && validTravellers.length >= 2) discount = 100;
  if (coupon === "NEW20" && validTravellers.length >= 4) discount = 200;

  const finalAmount = ticketTotal + gst + lifeJacketTotal - discount;

  return (
    <div className="container">
      <h1>Alert24 Checkout</h1>

      <div className="card">
        <label>Travel Date</label>
        <input
          type="date"
          min={new Date().toISOString().split("T")[0]}
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
        />
      </div>

      {travellers.map((t, i) => (
        <TravellerForm
          key={i}
          index={i}
          data={t}
          updateTraveller={updateTraveller}
        />
      ))}

      <button className="btn" onClick={addTraveller}>
        + Add Traveller
      </button>

      <button
        className="btn"
        disabled={!travelDate || validTravellers.length === 0}
        onClick={() => setIsCalculated(true)}
        style={{ marginTop: "10px" }}
      >
        Calculate Final Price
      </button>

      {isCalculated && (
        <>
          <CouponInput coupon={coupon} setCoupon={setCoupon} />
          <CouponInfo />
          <PriceSummary
            travellers={validTravellers.length}
            ticketTotal={ticketTotal}
            gst={gst}
            lifeJacket={lifeJacketTotal}
            discount={discount}
            finalAmount={finalAmount}
          />
        </>
      )}
    </div>
  );
}
