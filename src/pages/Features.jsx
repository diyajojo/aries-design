import Navbar from '../components/Navbar';

const CARDS = [
  {
    img: '/assets/1.svg',
    title: 'Report Emergencies in Seconds',
    desc: 'Quickly send emergency details with live GPS tracking and notify nearby services instantly.',
  },
  {
    img: '/assets/2.svg',
    title: 'Smart AI Detects the Severity',
    desc: 'Our intelligent system analyzes your report in real-time and prioritizes critical cases automatically.',
  },
  {
    img: '/assets/3.svg',
    title: 'Get Immediate First Aid Support',
    desc: 'Access step-by-step first aid instructions while help is on the way.',
  },
];

export default function Features() {
  return (
    <div className="min-h-screen w-full relative flex flex-col font-montserrat overflow-x-hidden bg-white text-text-dark">

      {/* Background gradients — teal top-right, red/pink bottom-left */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_top_right,rgba(162,237,235,0.5)_0%,rgba(255,255,255,0)_60%)] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_bottom_left,rgba(240,160,160,0.5)_0%,rgba(255,255,255,0)_60%)] -z-10 pointer-events-none"></div>

      <Navbar />

      {/* Hero */}
      <div className="flex flex-col items-center pt-10 pb-6 relative z-10">
        <img src="/assets/logo.svg" alt="Aeris" className="h-16 mb-3 object-contain" />
        <h1 className="text-[3.5rem] font-black text-primary-red tracking-[-1px] leading-none">AERIS</h1>
        <p className="text-[1.05rem] font-bold text-text-dark mt-3 text-center">
          Report, track, and receive emergency help<br />effortlessly with AERIS.
        </p>
      </div>

      {/* Feature Cards */}
      <main className="flex-1 px-[40px] md:px-[80px] pb-[60px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {CARDS.map(({ img, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col"
            >
              <div className="h-[260px] overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-[1.05rem] font-extrabold text-primary-red text-center leading-snug">
                  {title}
                </h3>
                <p className="text-[0.9rem] text-gray-500 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
