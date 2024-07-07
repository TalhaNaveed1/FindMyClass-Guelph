export default function Navbar() {
    return (
        <div className="bg-black pt-6 pb-6">
            <nav className="flex flex-row justify-between">
                <button className="flex flex-row text-red-600 font-sans font-bold text-3xl ml-5 ">FindMy<p className="text-yellow-300"><em>Class</em></p></button>
                <div className="flex flex-row justify-around">
                    <button className="text-yellow-300 border-yellow-300 font-sans border-2 rounded p-2 pr-3 pl-3 mr-5 font-semibold hover:bg-yellow-300 trasnition-colors hover:text-black transition-colors">Sign up</button>
                    <button className="text-red-600 font-sans mr-5 border-2 rounded p-2 pr-3 pl-3 border-red-600 font-semibold hover:bg-red-600 trasnition-colors hover:text-black transition-colors">Sign in</button>
                </div>
            </nav>
        </div>
    );
}


{/* <div class = "navDiv">
<nav>
    <button class="navBarButton">Talha Naveed</button>
    <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="one.html">Experience</a></li>
        <li><a href="two.html">Hobbies</a></li>
    </ul>
</nav>
</div> */}