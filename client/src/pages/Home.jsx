import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'
import img3 from '../assets/image3.png'
import img4 from '../assets/image4.png'
import img5 from '../assets/ProtectPlanet.png'
import img6 from '../assets/Boat.png'
import img7 from '../assets/Windmill.png'
import img9 from '../assets/image9.png'
import avatar1 from '../assets/Avatars/1.png'
import avatar2 from '../assets/Avatars/2.png'
import avatar3 from '../assets/Avatars/3.png'
import avatar4 from '../assets/Avatars/4.png'
import avatar5 from '../assets/Avatars/5.png'
import avatar6 from '../assets/Avatars/6.png'

const cards = [
  {
    heading: 'Flood Risk Assessment',
    content: 'Our advanced image analysis technology enables us to assess flood risks in real-time. By submitting photos of your surroundings, you contribute to building a comprehensive picture of vulnerable areas, helping us and local authorities to take proactive measures and minimize the impact of floods.'
  },
  {
    heading: 'Interactive Map',
    content: 'Explore our interactive map to discover nearby NGOs, relief centers, and evacuation routes. In times of crisis, having access to this critical information can make a difference. Our map is regularly updated, ensuring you have the most current resources at your fingertips.'
  },
  {
    heading: 'Flood Risk Assessment',
    content: 'At the heart of our mission is the empowerment of communities. By participating in our platform, you become an essential part of a network that cares for each other. Together, we create a more resilient society, where individuals are informed, prepared, and united to face the challenges of flooding.'
  },
  {
    heading: 'Flood Risk Assessment',
    content: "We foster collaboration between individuals, NGOs, and relief centers. Through our platform, you'll discover opportunities to get involved, support local initiatives, and stay informed about community-driven efforts to mitigate flooding. "
  }
]

const avatars = [
  {
    img: avatar1,
    name: 'Kashish',
  },
  {
    img: avatar2,
    name: 'Kailash'
  },
  {
    img: avatar3,
    name: 'Vidip' 
  },
  {
    img: avatar4,
    name: 'Arun' 
  },
  {
    img: avatar5,
    name: 'Anne' 
  },
  {
    img: avatar6,
    name: 'Anne'
  }
]

export default function Home() {
  return (
    <>
      <div className='grid md:grid-cols-2 bg-[#00613D] p-10'>
        <div className='mt-56'>
          <h1 className='text-[90px] text-[#FFA765] font-extrabold'>FloodGuardia</h1>
          <p className='text-[25px] font-bold text-white'>Guarding Communities, Defending Against Floods</p>
          <button className='bg-[#00A669] p-4 rounded-lg font-bold text-white mt-5'>Become a Volunteer</button>
        </div>
        <div className='grid grid-cols-2'>
          <img className='p-4' src={img1} alt="" />
          <img className='p-4' src={img2} alt="" />
          <img className='p-4' src={img3} alt="" />
          <img className='p-4' src={img4} alt="" />
        </div>
      </div>
      <div>
        <div className='flex justify-center mt-10'>
          <button className='text-center text-lg bg-[#FFD44A] p-3 font-bold rounded-lg'>Our Services</button>
        </div>
        <div className='grid md:grid-cols-2 p-12'>
          {
            cards.map((card,key)=>(
              <div className='box-content p-4 border-4 m-5 bg-[#333356] rounded-2xl text-white' key={card.heading}>
                <h3 className='text-center font-bold text-2xl'>{card.heading}</h3>
                <p className='text-lg mt-4'>{card.content}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className='bg-[#843700] p-8'>
        <div className='flex justify-center'>
          <button className='text-center text-lg bg-[#FFA765] p-3 font-bold mt-5 rounded-lg'>Our Mission</button>
        </div>
        <p className='text-center md:p-8 font-semibold text-2xl sm:p-4 text-white'>We are a dynamic team driven by a shared passion for leveraging technology to enhance flood safety and protect vulnerable communities. Our mission is to harness the power of real-time data, user engagement, and strategic partnerships to identify at-risk areas and provide life-saving information during emergencies. With a vision of creating a resilient and informed society, we aim to bridge the gap between citizens, NGOs, and relief centers, fostering collaboration that makes a meaningful impact. Join us on this journey to build a safer, more empowered world, one photo at a time. Together, we can shape a brighter future where proactive flood management and community support make a real difference.</p>
        <div className='flex justify-center'>
          <button className='text-center text-lg bg-[#00A669] p-3 font-bold mt-5 text-white rounded-lg'>Join as Volunteer</button>
        </div>
      </div>
      <div className='bg-[#FFD44A] p-8'>
        <div className='flex justify-center'>
          <button className='text-center text-lg bg-[#FFA765] p-3 font-bold mt-5 rounded-lg'>Our Mission</button>
        </div>
        <p className='text-center md:p-8 font-semibold text-2xl sm:p-4'>We invite you to make a meaningful difference by donating to our cause! With your support, we're on a mission to foster global connections that drive positive change through quality giving and volunteerism. Every contribution brings us closer to creating a world where individuals can easily find and engage with impactful opportunities to give back to their communities and beyond. Your generosity enables us to bridge the gap between those eager to help and the causes that truly need it, making a lasting impact on lives worldwide. Join us in this journey of empowerment, compassion, and transformation. Together, we can build a brighter future for all, where the spirit of giving thrives and reaches every corner of the world!</p>
        <div className='flex justify-center'>
          <p className='bg-[#E4E4E4] text-center p-5 w-fit flex text-xl'>
            <svg style={{color:'#FF9A62',fontWeight:'bold',height:30,width:30}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg><b>Notice:</b> Test mode is enabled. While in test mode no live donations are processed.
          </p>
        </div>
        <div className='flex justify-center'>
          <button className='text-center text-lg bg-[#333356] p-3 font-bold mt-5 rounded-lg text-white'>Donate Now</button>
        </div>
      </div>
      <div className='p-8'>
        <div className='flex justify-center'>
          <button className='text-center text-lg bg-[#FFA765] p-3 font-bold mt-5 rounded-lg'>Some Blogs</button>
        </div>
        <div className='grid md:grid-cols-3 p-8 m-auto'>
          <div className='p-8'>
            <img src={img5} alt="" />
            <button className='text-center text-lg bg-[#FFD44A] p-3 font-bold mt-1 rounded-lg'>Environment</button><br />
            <a className='text-2xl underline' href="https://give.cmsmasters.net/ngo/2023/07/05/10-things-we-should-know-about-international-mother-earth-day/">10 Things We should Know about...</a>
          </div>
          <div className='p-8'>
            <img src={img6} alt="" />
            <button className='text-center text-lg bg-[#FFD44A] p-3 font-bold mt-1 rounded-lg'>Environment</button><br />
            <a className='text-2xl underline' href="https://give.cmsmasters.net/ngo/2023/07/04/africa-climate-week-how-sustainable-farming-transforms-life-in-drc/">Africa Climate Week: How Sustainable</a>
          </div>
          <div className='p-8'>
            <img src={img7} alt="" />
            <button className='text-center text-lg bg-[#FFD44A] p-3 font-bold mt-1 rounded-lg'>Environment</button><br />
            <a className='text-2xl underline' href="https://give.cmsmasters.net/ngo/2023/07/02/why-climate-crisis-is-also-a-health-crisis/">Why Climate Crisis is also a Health Crisis</a>
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='text-center text-lg bg-[#00A669] p-3 font-bold mt-5 text-white rounded-lg'>See More</button>
        </div>
      </div>
      <div className='bg-[#333356] flex flex-col items-center'>
        <div className='flex justify-center mt-10'>
          <button className='text-center text-lg bg-[#FFD44A] p-3 font-bold rounded-lg'>Our Team</button>
        </div>
        <div className='grid md:grid-cols-3 p-8 justify-center gap-4'>
          {
            avatars.map((avatar, index) => (
              <div key={index}>
                <img key={index} src={avatar.img} alt="img" className='rounded-full mx-20 my-5' />
                <h2 className='text-center text-white text-2xl font-semibold'>{avatar.name}</h2>
              </div>
            ))
          }
        </div>
      </div>
      <div className='grid md:grid-cols-2'>
        <div>
          <img src={img9} alt="" />
        </div>
        <div>
          <button className='text-center text-lg bg-[#FFD44A] p-3 font-bold rounded-lg'>Contact Us</button>
          <div className='p-8'>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Name" required/>
            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Email" required/>
            <textarea id="message" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Message"></textarea>
            <button className='text-center text-lg bg-[#000000] p-3 font-bold rounded-lg text-white'>Send</button>
          </div>
        </div>
      </div>
    </>
  );
}