
export default function HomePage() {
  return (
    <main className = "min-h-screen bg-zinc-900 text-white flex flex-col items-center space-y-16">
      
      {/* Summary Section */}
      <section className = "relative flex max-w-full mt-16">
        {/* Summary Section Text */}
        <div className = "flex flex-col text-center justify-center max-w-full">
          {/* Page Header Background and Text */}
          <div className = "max-w-4xl px-10 md:px-48 2xl:px-58 mx-auto h-[150px] bg-zinc-700 flex items-center justify-center rounded-lg">
            <h1 className = "text-3xl md:text-4xl font-bold">Liam Mack Snyder</h1>
          </div>
          <p className = "max-w-2xl px-4 text-lg mx-auto text-gray-300 mt-4 mb-6">
            Full-stack developer and designer with a dual focus in Computer Information Systems and Marketing. I build fast, clean web experiences from the ground up.
          </p>
        </div> 
        {/* Summary Section Image Border and Image */}
        <div className = "hidden xl:block absolute right-[-47.5%] 2xl:right-[-55%] px-4 py-4 bg-radial from-slate-800 to-zinc-800 rounded-xl shadow-xl">
          <img 
            src = "/Backhat 2.png" 
            alt = "Profile Picture" 
            className = "w-64 h-64 object-contain mx-auto rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* "Explore My Work" Section */}
      <hr className = "w-full border-gray-700 mb-0" />
      
      <section className = "w-full bg-radial from-slate-700 to-zinc-950 flex flex-col mb-0">
        <h2 className = "text-3xl font-bold mt-8 mb-8 text-center">Explore My Work</h2>
        
        {/* Buttons Container */}
        <div className = "w-full flex flex-wrap gap-16 justify-center px-6 mx-auto mb-16">
          
          {/* Design Work Button */}
          <button className = "w-full max-w-md md:max-w-lg h-[550px] sm:h-[650px] md:h-[800px] rounded-4xl bg-linear-to-b from-fuchsia-600 to-zinc-500 hover:scale-105 hover:bg-sky-500 duration-300 flex flex-col">
            {/* Design Work Button Image */}
            <div className = "bg-[#28211e] mx-auto px-4 md:px-8 py-4 md:py-8 rounded-4xl mt-8 lg:mt-12 rounded-full">
              <img
                src = "/Lion Line Art Transparent.png" 
                alt = "Designs Preview" 
                className = "w-64 sm:w-80 h-64 sm:h-80 object-contain mb-4 mx-auto"
              />
            </div>
            { /* Design Work Button Text */ }
            <div className = "flex grow flex-col justify-center items-center mx-8 lg:mx-0">
              <h3 className = "text-center text-3xl md:text-4xl text-white">Design Work</h3>
              <p className = "max-w-md text-center text-xl md:text-2xl text-gray-300 mt-5 md:mt-10">My design work including Adobe Suite, Canva, and Odd Projects</p>
            </div>  
          </button>

          {/* Coding Work Button */}
          <button className = "w-full max-w-md md:max-w-lg h-[550px] sm:h-[650px] md:h-[800px] rounded-4xl bg-linear-to-b from-sky-500 to-zinc-500 hover:scale-105 hover:bg-sky-500 duration-300 flex flex-col">
            {/* Design Work Button Image */}
            <div className = "bg-[#28211e] mx-auto px-4 md:px-8 py-4 md:py-8 rounded-4xl mt-8 lg:mt-12 rounded-full">
              <img
                src = "/Lion Line Art Transparent.png" 
                alt = "Designs Preview" 
                className = "w-64 sm:w-80 h-64 sm:h-80 object-contain mb-4 mx-auto"
              />
            </div>
            { /* Design Work Button Text */ }
            <div className = "flex grow flex-col justify-center items-center mx-8 lg:mx-0">
              <h3 className = "text-center text-3xl md:text-4xl text-white">Coding Work</h3>
              <p className = "max-w-md text-center text-xl md:text-2xl text-gray-300 mt-5 md:mt-10">My coding work Java GUIs, SQL queries, and Python analytics</p>
            </div>  
          </button>
        </div>
      </section>

      {/* Footer Section */ }
      <hr className = "w-full border-gray-700 mt-0 mb-0" />
      
      <section className = "w-full h-auto flex flex-col px-6 bg-zinc-900">
        <p className = "ml-auto mt-4">
          Contact me at:{" "}
            <a href = "mailto:LiamMackSnyder@outlook.com" className = "text-sky-400 hover:underline">
              LiamMackSnyder@outlook.com
            </a>
        </p>
        <p className = "ml-auto mt-16 mb-4">
          © Liam Mack Snyder – Portfolio Content and Website are Copyright-Protected. 
        </p>
      </section>
      
    </main>
  );
}
