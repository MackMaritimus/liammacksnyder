
export default function HomePage() {
  return (
    <main className = "min-h-screen bg-gray-950 text-white flex flex-col items-center px-6 py-16 space-y-16">
      
      {/* Summary Section */}
      <section className = "text-center max-w-2xl">
        <h1 className = "text-4xl font-bold mb-4">Liam Mack Snyder</h1>
        <p className = "text-lg text-gray-300">
          Full-stack developer and designer with a dual focus in Computer Information Systems and Marketing. I build fast, clean web experiences from the ground up.
        </p>
      </section>

      <hr className = "w-full max-w-5xl border-gray-700" />

      {/* "Explore My Work" Section */}

      <h2 className = "text-3xl font-bold mb-4">Explore My Work</h2>

      <div className = "w-5xl flex flex-wrap gap-12 justify-center">
        <button className = "text-center text-lg text-white w-md h-[200px] bg-sky-400 hover:scale-105 hover:bg-sky-500 duration-300">Design Work</button>
        <button className = "text-center text-lg text-white w-md h-[200px] bg-rose-500 hover:scale-105 hover:bg-rose-600 duration-300">Development Work</button>
      </div>

    </main>
  );
}
