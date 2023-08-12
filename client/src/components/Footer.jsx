import LinkedIn from '../assets/linkedin-icon.png'
import Github from '../assets/github-icon.png'
export default function Footer() {
  return (
    <div className="grid md:grid-cols-2 bg-[#00613D] text-white p-20">
      <div>
        <h1 className='font-bold text-4xl'>LOGO</h1>
        <p className='text-2xl'>We are a dynamic team driven by a shared passion for leveraging technology to enhance flood safety and protect vulnerable communities. Our mission is to harness the power of real-time data, user engagement, and strategic partnerships to identify at-risk areas and provide life-saving information during emergencies.</p>
        <div className='flex'>
          <a href="#"><img className='w-16' src={LinkedIn} alt="" /></a>
          <a href="#"><img className='w-16' src={Github} alt="" /></a>
        </div>
      </div>
      <div className='grid'>
        <a className='md:text-right text-2xl' href="#">Home</a>
        <a className='md:text-right text-2xl' href="#">Services</a>
        <a className='md:text-right text-2xl' href="#">Mission</a>
        <a className='md:text-right text-2xl' href="#">Blogs</a>
        <a className='md:text-right text-2xl' href="#">Team</a>
        <a className='md:text-right text-2xl' href="#">Contact</a>
        <a className='md:text-right text-2xl' href="#">Donate</a>
      </div>
    </div>
  );
}