import Github from '../assets/github-icon.png'
export default function Footer() {
  return (
    <div className="bg-[#00613D] h-[10vh] flex justify-around items-center">
      <div className="paraFooter">
        <p className="font-bold">&copy; <span className='text-white'> 2023 FloodGuardia. All rights reserved.</span> </p>
      </div>
      <div className="ghFooter">
        <a href="https://github.com/PekaVengers/CareerCompass"><img className="w-11" src={Github} alt="Follow on GitHub" /></a>
      </div>
    </div>
  );
}