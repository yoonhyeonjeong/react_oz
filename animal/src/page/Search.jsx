import {useSearchParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {data} from "../assets/data/data";
import {getRegExp} from "korean-regexp";
const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("animal");
    const regexp = getRegExp(query);
    const filteredData = data.filter(el => el.name.match(regexp));
    return (
        <ul>
            {filteredData.map(item => (
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

export default Search;
