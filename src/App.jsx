import './index.css';

function App() {
  return (
    <div className="min-h-screen w-full relative flex flex-col font-montserrat overflow-x-hidden bg-white text-text-dark">

      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_top_right,rgba(162,237,235,0.4)_0%,rgba(255,255,255,0)_60%)] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_bottom_left,rgba(240,160,160,0.4)_0%,rgba(255,255,255,0)_60%)] -z-10 pointer-events-none"></div>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-[20px] md:px-[60px] py-[30px] bg-transparent gap-[20px] md:gap-[120px] flex-col md:flex-row">
        <div className="flex items-center gap-[15px]">
          <img src="/assets/logo.svg" alt="Aeris Logo" className="h-[40px] object-contain" />
          <h1 className="text-[1.6rem] font-extrabold text-text-dark tracking-[0.5px] border-l-2 border-text-dark pl-[15px]">AERIS</h1>
        </div>

        <div className="flex items-center bg-white py-[8px] pr-[12px] pl-[15px] md:pl-[50px] rounded-[50px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] justify-between flex-1 w-full md:w-auto gap-[15px] md:gap-[30px]">
          <ul className="flex list-none gap-[20px] md:gap-[80px] p-0 m-0 items-center overflow-x-auto">
            <li className="text-[1.1rem] font-semibold text-text-dark cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-[4px] after:w-full after:h-[3px] after:bg-primary-red after:rounded-[2px]">Home</li>
            <li className="text-[1.1rem] font-semibold text-text-dark cursor-pointer relative">Features</li>
            <li className="text-[1.1rem] font-semibold text-text-dark cursor-pointer relative">About</li>
            <li className="text-[1.1rem] font-semibold text-text-dark cursor-pointer relative">Contact</li>
          </ul>

          <div className="flex gap-[15px]">
            <button className="border-none rounded-[30px] px-[28px] py-[12px] text-[1rem] font-semibold text-white cursor-pointer transition-all hover:-translate-y-[2px] hover:opacity-90 bg-primary-teal">login</button>
            <button className="border-none rounded-[30px] px-[28px] py-[12px] text-[1rem] font-semibold text-white cursor-pointer transition-all hover:-translate-y-[2px] hover:opacity-90 bg-primary-red whitespace-nowrap">Create Account</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-between px-[20px] md:px-[60px] max-w-[1600px] mx-auto w-full text-center md:text-left">

        <div className="flex-1 max-w-full md:max-w-[45%] md:pl-[20px] flex flex-col items-center md:items-start mb-[40px] md:mb-0">
          <img src="/assets/logo.svg" alt="Aeris Icon" className="h-[80px] mb-[20px] object-contain" />
          <h2 className="text-[1.5rem] lg:text-[2rem] font-extrabold text-text-dark mb-[5px] tracking-[-0.5px]">HELLO WORLD!</h2>
          <h1 className="text-[4rem] lg:text-[6.5rem] font-black text-primary-red mb-[10px] leading-[1.1] tracking-[-2px]">MEET AERIS</h1>
          <h3 className="text-[1.5rem] font-bold text-text-dark mb-[40px] max-w-full md:max-w-[80%]">SMART EMERGENCY RESPONSE SYSTEM</h3>

          <div className="flex flex-col md:flex-row items-center gap-[20px]">
            <div className="flex">
              <img src="/assets/group.svg" alt="Users" className="h-[50px] object-contain" />
            </div>
            <p className="text-[0.95rem] text-[#555] leading-[1.5] font-medium">
              Report, track, and receive emergency help<br className="hidden md:block" />
              effortlessly with AERIS.
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end items-center">
          <img src="/assets/landing.svg" alt="Emergency Response App Illustration" className="max-w-[100%] md:max-w-[110%] h-auto object-contain" />
        </div>
      </main>
    </div>
  );
}

export default App;
