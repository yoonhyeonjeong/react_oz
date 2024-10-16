import {Link} from "react-router-dom";
import {data} from "../assets/data/data";
const Main = () => {
    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>
                    <Link to={`/detail/${item.id}`}>
                        <img
                            src={item.img}
                            alt=""
                        />
                        <p>{item.name}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Main;
