import "./globals.css"
import PathDisplay from "./components/pathDisplay";


export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-johnston bg-cover bg-center w-full">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-row">
          <h1 className="text-white font-sans font-bold text-8xl">
            FindMy
          </h1>
          <h1 className="text-blue-700 font-sans font-bold text-8xl">
            <em>Class</em>
          </h1>
          <img src="/images/magnifiying.gif" alt="Magnifiying GIF" className = "h-40 pb-15"/>
        </div>
        <h3 className="text-white font-sans font-bold mb-4"><em>A step-by-step guide to every class at the University of Guelph</em></h3>
        <input type="text" className="p-3 w-96 h-16 rounded-xl" placeholder="Enter a class code..." />
        <a href="" className="text-white font-sans font-bold mt-20 relative">View all classes here &gt;&gt;&gt;</a>
      </div>
      <PathDisplay />
    </main>
  );
}



