export default function Donate() {
    function App() {
        const [selectedOption, setSelectedOption] = useState('');
      
        const handleOptionChange = (event) => {
          setSelectedOption(event.target.value);
        };
    }
    
  return <div style={{fontWeight:'bold' , fontSize:'30px' , margin:'15px'}}>DONATE NOW
    <br/>
     <div className="flex justify-center">
      <p className="bg-[#E4E4E4] p-5 w-fit flex text-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-5"
          style={{ color: 'rgb(255, 154, 98)', fontWeight: 'bold', height: '20px', width: '300px' }}
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
    <br/>
    <input
      name="val1"
      className="  border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline"
      id="username"
      type="text"
      placeholder="Rs. 1000.00"
      value=""
    />
    <br/><div className="" style={{display:'flex' , justifyContent:'center'}}>
    <div className=""><button type="submit" style={{backgroundColor:'green', color:'white' ,  borderRadius: '10px'  , fontSize:'20px' , fontWeight:'' , margin:'20px' , padding:'5px' , width:'300px' ,  }}>Rs. 100.00</button>
    </div>
    <div className=""><button type="submit" style={{backgroundColor:'green', color:'white' ,  borderRadius: '10px'  , fontSize:'20px' , fontWeight:'' , margin:'20px' , padding:'5px' , width:'300px' , }}>Rs. 500.00</button>
    </div>
    <div className=""><button type="submit" style={{backgroundColor:'green', color:'white' ,  borderRadius: '10px'  , fontSize:'20px' , fontWeight:'' , margin:'20px' , padding:'5px' , width:'300px' ,  }}>Rs. 1000.00</button>
    </div>
    </div>
    <div className="">
        <h4 style={{margin:'20px'}}>Select Payment Method</h4>
        
          
    </div>
    <div className="">
        <h4 style={{margin:'20px'}}>Personal info</h4>
    </div>
    <input
      name="val1"
      className="  border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline"
      id="username"
      type="text"
      placeholder="Name"
      value=""
    />
     <input
      name="val1"
      className="  border rounded w-full  mt-5 py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline"
      id="username"
      type="text"
      
      placeholder="Email"
      value=""
    />
    
            

       
         
  </div>
 
    
}