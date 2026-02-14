import imgBody from "figma:asset/0fc9e03ead8f9e77784e7032620199caab76ea49.png";
import imgIcons8Discord501 from "figma:asset/189d2a998e037fb8faae013b9f33eca473238f32.png";
import imgScreenshot20260214002002RemovebgPreview1 from "figma:asset/99d6b896fe9c5148dd844fc908e6c0a7db0da586.png";
import imgIcons8Website641 from "figma:asset/c9668e23e1c2e7fbe45a57436483fadddd727896.png";
import imgIcons8Media911 from "figma:asset/e138dd1a60d6956266aee31dec7c41544a61a4ab.png";
import imgIcons8FastForward501 from "figma:asset/d8fc6952539a38eea5f8a30adf7fb1e2c079f834.png";
import imgIcons8Speaker241 from "figma:asset/357dbcf4caac70f0e7f560996824ee49f2624549.png";

export default function Frame() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <img 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        src={imgBody} 
      />
      
      {/* Overlay Gradients */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          backgroundImage: "linear-gradient(90deg, rgba(7, 10, 14, 0.95) 0%, rgba(7, 10, 14, 0.1) 55%, rgba(7, 10, 14, 0.75) 94.231%, rgba(7, 10, 14, 0.4) 100%)" 
        }}
      />

      {/* Main Layout Container */}
      <div className="relative w-full h-full flex">
        {/* Left Sidebar */}
        <aside className="w-full max-w-[420px] h-full flex flex-col p-6 md:p-9 bg-gradient-to-r from-[rgba(10,15,22,0.9)] to-transparent">
          {/* Header */}
          <div className="mb-6">
            <p className="text-[#8c96a3] text-xs tracking-[1.66px] mb-1 font-['Rajdhani']">Welcome to</p>
            <h1 className="text-[#eef2f6] text-[28px] md:text-[32px] font-medium tracking-[3.98px] font-['Oswald']">7th Zone</h1>
            <p className="text-[#8c96a3] text-xs tracking-[1.66px] mt-2 font-['Rajdhani']">Cinematic Roleplay</p>
          </div>

          {/* Servers Section */}
          <nav className="mb-6 flex-1">
            <p className="text-[#8c96a3] text-sm tracking-[1.74px] mb-4 font-['Rajdhani']">Servers</p>
            
            {/* Server Card 1 */}
            <div className="bg-[rgba(18,22,28,0.82)] border border-[rgba(255,255,255,0.08)] rounded-md p-4 mb-4 shadow-lg flex items-center gap-4">
              <div className="w-20 h-16 border border-[rgba(255,255,255,0.08)] rounded bg-[rgba(30,36,44,0.5)]"></div>
              <div>
                <p className="text-[#eef2f6] text-base tracking-[0.78px] font-['Rajdhani']">Vec</p>
                <p className="text-[#b8c2cc] text-xs tracking-[-0.5px] font-['Rajdhani']">Owner</p>
              </div>
            </div>

            {/* Server Card 2 */}
            <div className="bg-[rgba(18,22,28,0.82)] border border-[rgba(255,255,255,0.08)] rounded-md p-4 shadow-lg flex items-center gap-4">
              <div className="w-20 h-16 border border-[rgba(255,255,255,0.08)] rounded bg-[rgba(30,36,44,0.5)]"></div>
              <div>
                <p className="text-[#eef2f6] text-base tracking-[0.78px] font-['Rajdhani']">Striker</p>
                <p className="text-[#b8c2cc] text-xs tracking-[-0.5px] font-['Rajdhani']">Co Owner</p>
              </div>
            </div>
          </nav>

          {/* Patch Notes */}
          <section 
            className="border border-[rgba(255,255,255,0.08)] rounded-md p-5 mb-6"
            style={{ 
              backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 256 131\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.20000000298023224\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(7.8377e-16 6.55 -12.8 4.0107e-16 128 65.5)\\'><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'0.0001\\'/><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(20, 26, 34) 0%, rgb(20, 26, 34) 100%)" 
            }}
          >
            <p className="text-[#8c96a3] text-sm tracking-[1.74px] mb-3 font-['Rajdhani']">News</p>
            <p className="text-[#b8c2cc] text-xs tracking-[-0.5px] leading-relaxed font-['Rajdhani']">
              7th Zone is a serious FiveM roleplay server built for authentic, story-driven experiences. 
              Designed with a cinematic atmosphere, every interaction feels immersive and realistic. 
              We encourage players to act as they would in real life valuing consequences, character depth, 
              and meaningful storytelling to create a truly dynamic city experience together.
            </p>
          </section>

          {/* Social Icons */}
          <div className="flex gap-6 mt-auto">
            <img alt="Discord" className="w-6 h-6 object-cover" src={imgIcons8Discord501} />
            <img alt="Custom" className="w-7 h-6 object-cover" src={imgScreenshot20260214002002RemovebgPreview1} />
            <img alt="Website" className="w-6 h-6 object-cover" src={imgIcons8Website641} />
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 relative">
          {/* Hero Section */}
          <div className="text-center md:text-left max-w-2xl mb-12 md:mb-0">
            <p className="text-[#8c96a3] text-xs tracking-[2.62px] mb-2 font-['Oswald']">Welcome to</p>
            <h1 className="text-5xl md:text-6xl tracking-[4.3px] mb-4 font-['Oswald']">
              <span className="text-[#eef2f6]">7th </span>
              <span className="text-[#6a0404]">Zone</span>
            </h1>
            <p className="text-[#b8c2cc] text-sm tracking-[-0.5px] leading-relaxed font-['Rajdhani']">
              Live the city. Build your story. Choose your path in the heart of the metropolis.
            </p>
          </div>
        </main>
      </div>

      {/* Music Player - Bottom */}
      <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 w-[90%] max-w-[920px]">
        <div className="bg-gradient-to-b from-[rgba(30,36,44,0.65)] to-[rgba(12,15,20,0.95)] border border-[rgba(255,255,255,0.08)] rounded-lg shadow-2xl p-4 md:p-6 backdrop-blur-sm">
          <p 
            className="text-white text-base tracking-[1.66px] mb-2 font-bold font-['Rajdhani']"
            style={{ 
              backgroundImage: "linear-gradient(90deg, rgba(250, 250, 250, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            How 2 Step
          </p>
          <p className="text-white text-[10px] tracking-[1.66px] mb-3 font-['Arimo']">Ybcdul</p>
          
          {/* Progress Bar */}
          <div className="relative w-full h-1.5 bg-[rgba(255,255,255,0.08)] rounded-full mb-2">
            <div 
              className="absolute top-0 left-0 h-full rounded-full shadow-[0px_0px_10px_0px_rgba(88,0,0,0.55)]"
              style={{ 
                width: '63%',
                backgroundImage: "linear-gradient(to right, #580000, rgba(255,255,255,0.1) 56.25%, rgba(88,0,0,0.55))"
              }}
            />
          </div>
          
          {/* Time and Controls */}
          <div className="flex items-center justify-between">
            <p className="text-white text-[8px] tracking-[1.66px] font-['Arimo']">1:30</p>
            
            <div className="flex items-center gap-4 md:gap-6">
              <button className="rotate-180">
                <img alt="Previous" className="w-5 h-5 md:w-6 md:h-6 object-cover" src={imgIcons8FastForward501} />
              </button>
              <button>
                <img alt="Play" className="w-5 h-5 md:w-6 md:h-6 object-cover" src={imgIcons8Media911} />
              </button>
              <button>
                <img alt="Next" className="w-5 h-5 md:w-6 md:h-6 object-cover" src={imgIcons8FastForward501} />
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <p className="text-white text-[8px] tracking-[1.66px] font-['Arimo']">2:20</p>
              <img alt="Volume" className="w-5 h-5 object-cover" src={imgIcons8Speaker241} />
            </div>
          </div>
        </div>
      </div>

      {/* Loading Progress - Bottom Right */}
      <div className="absolute bottom-6 md:bottom-12 right-6 md:right-24">
        <div className="relative w-36 md:w-44 h-1.5 bg-[rgba(255,255,255,0.08)] rounded-full">
          <div className="absolute top-0 left-0 h-full w-[87%] bg-white rounded-full shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]" />
        </div>
      </div>

      {/* Loading Text - Bottom Center */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        <div className="relative w-full max-w-[800px] mx-auto mb-2">
          <div className="relative h-0.5 bg-[rgba(255,255,255,0.08)]">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-white to-[rgba(255,255,255,0.1)] shadow-[0px_0px_18px_0px_rgba(215,180,106,0.55)]"
              style={{ width: '42%' }}
            />
          </div>
        </div>
        <p className="text-[#8c96a3] text-xs tracking-[1.66px] font-['Rajdhani']">Please wait, the city is loading...</p>
        <p className="text-[#8c96a3] text-xs tracking-[1.66px] mt-1 font-['Rajdhani']">ESC • MUTE</p>
      </div>
    </div>
  );
}