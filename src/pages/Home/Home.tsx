import { Link } from "react-router-dom";

function Home() {
    return <div>
        <h1>This is home page</h1>
        <p>
            Maybe you want to see some places?
            <ul>
                <li>
                    <Link to="/GXvPAor1ifNfpF0U5PTG0w">Place 1</Link>
                </li>
                <li>
                    <Link to="/ohGSnJtMIC5nPfYRi_HTAg">Place 2</Link>
                </li>
            </ul>
        </p>
    </div>
}

export default Home;
