
export default function HomePage() {
  return (
    <main className = "min-h-screen bg-zinc-900 text-white flex flex-col items-center space-y-16">
      
      {/* Summary Section */}
      <section className = "text-center max-w-4xl mt-16">
        <div className = "w-4xl mx-auto h-[150px] bg-zinc-800 flex items-center justify-center rounded-lg">
          <h1 className = "text-4xl font-bold">Liam Mack Snyder</h1>
        </div>
        <p className = "w-2xl text-lg mx-auto text-gray-300 mt-4">
          Full-stack developer and designer with a dual focus in Computer Information Systems and Marketing. I build fast, clean web experiences from the ground up.
        </p>
      </section>

      {/* "Explore My Work" Section */}
      <hr className = "w-full border-gray-700 mb-0" />

      <section className = "w-full bg-zinc-800 flex flex-col mb-0">
        <h2 className = "text-3xl font-bold mt-8 mb-8 text-center">Explore My Work</h2>
        
        {/* Buttons Container */}
        <div className = "w-full flex flex-wrap gap-16 justify-center mx-auto mb-16">
          
          {/* Design Work Button */}
          <button className = "w-lg h-[800px] rounded-2xl bg-sky-600 hover:scale-105 hover:bg-sky-500 duration-300 flex flex-col">
            {/* Design Work Button Image */}
            <div className = "bg-[#28211e] w-sm mx-auto py-8 px-8 rounded-4xl mt-12 rounded-full">
              <img
                src="/Lion Line Art Transparent.png" 
                alt = "Designs Preview" 
                className = "w-80 h-80 object-contain mb-4 mx-auto"
              />
            </div>
            { /* Design Work Button Text */ }
            <div className = "flex grow justify-center items-center">
              <p className = "text-center text-2xl text-white">Design Work</p>
            </div>  
          </button>

          {/* Coding Work Button */}
          <button className = "w-lg h-[800px] rounded-2xl bg-rose-500 hover:scale-105 hover:bg-rose-600 duration-300 flex flex-col">
            {/* Coding Work Button Image */}
            <div className = "bg-[#28211e] w-sm mx-auto py-8 px-8 rounded-4xl mt-12 rounded-full">
              <img
                src="/Lion Line Art Transparent.png" 
                alt = "Designs Preview" 
                className = "w-80 h-80 object-contain mb-4 mx-auto"
              />
            </div>
            { /* Coding Work Button Text */ }
            <div className = "flex grow justify-center items-center">
              <p className = "text-center text-2xl text-white">Coding Work</p>
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
