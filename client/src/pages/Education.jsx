import img5 from '../assets/ProtectPlanet.png'
import img6 from '../assets/Boat.png'
import img7 from '../assets/Windmill.png'
import img8 from '../assets/WorldTrash.png'
import img9 from '../assets/mangroove.png'
import img10 from '../assets/renewable.png'

const ytLinks = [
  {
    src: "https://www.youtube.com/embed/duFvSTNbAA0",
    title: "How Floodwalls Work: The Science Behind Flood Protection"
  },
  {
    src: "https://www.youtube.com/embed/5mCJh5SJEis",
    title: "How Do Flood Control Structures Work?"
  },
  {
    src: "https://www.youtube.com/embed/CsPxjRobjpk",
    title: "Flood Control from Underground"
  }
]

export default function Education() {
  return (
    <div className='p-8'>
      <div className='flex justify-center'>
        <button className='text-center text-lg bg-[#FFA765] p-3 font-bold mt-5 rounded-lg'>Learn About Flood Resilience</button>
      </div>
      <div className='grid md:grid-cols-3 p-8 m-auto'>
        <div className='p-8'>
          <img className='rounded-md h-72 w-[28rem]' src={img5} alt="" />
          <button className='text-center text-lg bg-[#FFD44A] p-3 font-bold mt-1 rounded-lg'>Environment</button><br />
          <a className='text-2xl underline' href="https://give.cmsmasters.net/ngo/2023/07/05/10-things-we-should-know-about-international-mother-earth-day/">10 Things We should Know about...</a>
        </div>
        <div className='p-8'>
          <img className='rounded-md h-72 w-[28rem]' src={img6} alt="" />
          <button className='text-center text-lg bg-[#FFD44A] p-3 font-bold mt-1 rounded-lg'>Environment</button><br />
          <a className='text-2xl underline' href="https://give.cmsmasters.net/ngo/2023/07/04/africa-climate-week-how-sustainable-farming-transforms-life-in-drc/">Africa Climate Week: How Sustainable</a>
        </div>
        <div className='p-8'>
          <img className='rounded-md h-72 w-[28rem]' src={img7} alt="" />
          <button className='text-center text-lg bg-[#FFD44A] p-3 font-bold mt-1 rounded-lg'>Climate</button><br />
          <a className='text-2xl underline' href="https://give.cmsmasters.net/ngo/2023/07/02/why-climate-crisis-is-also-a-health-crisis/">Why Climate Crisis is also a Health Crisis</a>
        </div>
        <div className='p-8'>
          <img className='rounded-md h-72 w-[28rem]' src={img8} alt="" />
          <button className='text-center text-lg bg-[#FFD44A] p-3 font-bold mt-1 rounded-lg'>Environment</button><br />
          <a className='text-2xl underline' href="https://give.cmsmasters.net/ngo/2023/07/05/dealing-with-the-worlds-waste-crisis/">Dealing with the World's Waste Crisis</a>
        </div>
        <div className='p-8'>
          <img className='rounded-md h-72 w-[28rem]' src={img9} alt="" />
          <button className='text-center text-lg bg-[#FFD44A] p-3 font-bold mt-1 rounded-lg'>Climate</button><br />
          <a className='text-2xl underline' href="#">Mangrove Restoration for Coastal Protection</a>
        </div>
        <div className='p-8'>
          <img className='rounded-md h-72 w-[28rem]' src={img10} alt="" />
          <button className='text-center text-lg bg-[#FFD44A] p-3 font-bold mt-1 rounded-lg'>Climate</button><br />
          <a className='text-2xl underline' href="https://give.cmsmasters.net/ngo/2023/07/02/asia-can-go-100-renewable/">Asia Can Go 100% Renewable</a>
        </div>
      </div>
      <div className='flex justify-center'>
        <button className='text-center text-lg bg-[#00A669] p-3 font-bold mt-5 text-white rounded-lg'>See More</button>
      </div>
      <div className='grid md:grid-cols-3 md:p-8 m-auto'>
        {
          ytLinks.map((yt,idx)=>(
            <div className='p-8' key={idx}>
              <iframe className='rounded-md' title={yt.title} width="440" height="325" src={yt.src} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          ))
        }
      </div>
    </div>
  );
}