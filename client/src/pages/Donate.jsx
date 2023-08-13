import { Link } from "react-router-dom"

export default function Donate() {
  return (
    <div>
      <h1 className="text-center text-5xl font-semibold p-4">DONATE NOW</h1>
      <div className="flex justify-start flex-col p-7">
        <div className="flex justify-center">
          <p className="bg-[#E4E4E4] p-4 w-fit flex text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-14 h-7"
            style={{ color: 'rgb(255, 154, 98)', fontWeight: 'bold' }}
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          ></path>
          </svg>
            <b>Notice:</b> Test mode is enabled. While in test mode no live donations are processed.
          </p>
        </div>
        <div className="p-4 flex justify-center">
          <input className="border rounded md:w-1/2 w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline" type="text" placeholder="Rs. 1000.00"/>
        </div>
        <div className="flex justify-center">
          <button type="submit" style={{ backgroundColor: 'green', color: 'white', borderRadius: '10px', fontSize: '20px', margin: '20px',padding:10,width:250 }}>Rs. 100.00</button>
          <button type="submit" style={{ backgroundColor: 'green', color: 'white', borderRadius: '10px', fontSize: '20px', margin: '20px',padding:10,width:250 }}>Rs. 500.00</button>
          <button type="submit" style={{ backgroundColor: 'green', color: 'white', borderRadius: '10px', fontSize: '20px', margin: '20px',padding:10,width:250 }}>Rs. 1000.00</button>
        </div>
        <h4 className="text-center text-3xl font-semibold p-4">Select Payment Method</h4>
        <div className="flex justify-center">
          <div className="space-x-4"> 
            <input type="radio" id="PayPal" name="payment-method" value="PayPal"/>
            <label htmlFor="PayPal">PayPal</label>
            <input type="radio" id="UPI" name="payment-method" value="UPI"/>
            <label htmlFor="UPI">UPI</label>
          </div>
        </div>
        
        <div className="p-4 flex items-center flex-col">
          <h4 className="text-center text-3xl font-semibold">Personal Info</h4>
          <input className="border m-2 rounded md:w-1/2 w-full py-3 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name"/>
          <input className="border m-2 rounded md:w-1/2 w-full py-3 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
          <button className='text-center text-lg bg-[#00A669] p-3 font-bold rounded-lg text-white'> <Link to="/"> Donate Now </Link></button>
        </div>
      </div>
    </div>
  )
}