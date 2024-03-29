import { Link, Outlet, useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-800">Welcome to our Website!</h1>
            <p>This is the home page of our awesome website build with React and Tailwind CSS.</p>

            <nav className="flex justify-center space-x-4 mt-6">
                <Link to="feature" className="text-blue-500  hover:text-blue-700 group">Feature <div className="hidden group-hover:block">Hover element</div></Link>
                <Link to="team" className="text-blue-500  hover:text-blue-700">Feature</Link>

            </nav>

            <div className="mt-8">
                <Outlet />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 " onClick={() => navigate("/profile")}> Go to Profile</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 " onClick={() => navigate("/dashboard")}> Go to Dashboard</button>
            <ul>
                <li className="group/item hover:bg-slate-100">
                    <div>
                        Main
                    </div>
                    <a className="group/edit invisible hover:bg-slate-200 group-hover/item:visible">
                        <span className="group-hover/edit:text-gray-700">Call</span>
                        <p>Content</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Home;