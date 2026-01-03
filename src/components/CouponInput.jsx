export default function CouponInput({ setCoupon }) {
  return (
    <div className="card">
      <label>Coupon Code</label>
      <input
        placeholder="Enter coupon (NEW10 / NEW20)"
        onChange={(e) => setCoupon(e.target.value.toUpperCase())}
      />
    </div>
  );
}