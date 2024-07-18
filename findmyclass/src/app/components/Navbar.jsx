export default function Navbar() {
  return (
    <div className="bg-black pt-6 pb-6">
      <nav className="flex flex-row justify-between">
        <button className="flex flex-row text-white font-sans font-bold text-3xl ml-5 ">
          FindMy
          <p className="text-blue-700">
            <em>Class</em>
          </p>
        </button>
        <div className="flex flex-row justify-around">
          <button className="text-white border-white font-sans border-2 rounded p-2 pr-3 pl-3 mr-5 font-semibold hover:bg-white trasnition-colors hover:text-blue-700 transition-colors">
            Sign up
          </button>
          <button className="text-white font-sans mr-5 border-2 rounded p-2 pr-3 pl-3 border-blue-700 bg-blue-700 font-semibold hover:bg-blue-900 trasnition-colors hover:border-blue-900 transition-colors">
            Sign in
          </button>
        </div>
      </nav>
    </div>
  );
}
