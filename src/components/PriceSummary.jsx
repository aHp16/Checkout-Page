export default function PriceSummary({
//   travellers,
  validTravellers,
  ticketTotal,
  gst,
  lifeJacket,
  discount,
  finalAmount
}) {
  return (
    <div className="card summary">
      <h2>Price Summary</h2>
      <p>Travellers: {validTravellers}</p>
      <p>Ticket Total: ₹{ticketTotal}</p>
      <p>GST (18%): ₹{gst.toFixed(2)}</p>
      <p>Life Jacket: ₹{lifeJacket}</p>
      <p>Discount: -₹{discount}</p>
      <hr />
      <h3>Total Payable: ₹{finalAmount.toFixed(2)}</h3>
    </div>
  );
}
