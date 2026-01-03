# Alert24 Frontend Internship Assignment

## Responsive Checkout Page

This project is a responsive checkout page developed as part of the Alert24 Frontend Internship Assignment. The application allows users to add traveller details, simulate thumbprint verification, calculate pricing dynamically, apply GST and coupon discounts, and view the final payable amount. The solution is completely frontend-based and does not use any backend services.

## Tech Stack

- React (Create React App)
- JavaScript (ES6)
- HTML5
- CSS3 (Custom CSS, no external UI libraries)

## Features

- Add multiple travellers (minimum one required)
- Traveller form validation:
  - Full name validation
  - 10-digit contact number validation
  - Mandatory thumbprint capture (simulated)
- Travel date selection with past dates disabled
- Explicit "Calculate Final Price" button to control billing
- Dynamic pricing calculation based on valid travellers
- GST calculation at 18% on ticket price
- Coupon functionality:
  - NEW10: ₹100 discount for minimum 2 travellers
  - NEW20: ₹200 discount for minimum 4 travellers
- Coupon input automatically converts input to uppercase
- Responsive layout for mobile and desktop devices
- UI styled to visually align with Alert24’s website design language

## Pricing Logic

- Ticket price is ₹1000 per valid traveller
- Life jacket price is ₹100 per valid traveller
- GST is calculated as 18% of the total ticket price
- Coupons are applied only if eligibility conditions are met
- Only travellers with completed name, phone number, and thumbprint are considered for pricing

Final payable amount is calculated as:

Ticket Total + GST + Life Jacket Cost − Discount

## Application Flow

1. User selects a valid travel date
2. User adds one or more travellers
3. Each traveller must enter name, contact number, and complete thumbprint capture
4. User clicks "Calculate Final Price"
5. Coupon input and available coupon details are displayed
6. Final payable amount is shown
7. Any change in traveller details resets the calculation to avoid incorrect billing

## Project Structure

src/
components/
TravellerForm.jsx  
PriceSummary.jsx  
CouponInput.jsx  
CouponInfo.jsx  

App.jsx  
index.js  
sty.css  

## Setup Instructions

1. Clone the repository

git clone <your-github-repository-link>

2. Navigate to the project directory

cd alert24-checkout

3. Install dependencies

npm install

4. Start the development server

npm start

5. Open the application in the browser

http://localhost:3000

## Notes

- Thumbprint capture is simulated as per assignment instructions
- No real biometric, Aadhaar, or sensitive personal data is collected
- No backend APIs or databases are used
- The Alert24 public background image is used for visual consistency, while all layout and CSS are custom-written

## Submission Details

GitHub Repository: <your-github-repository-link>  
Live Demo (optional): <deployment-link>

## Author

Frontend Internship Assignment Submission  
Alert24 Safety Systems
