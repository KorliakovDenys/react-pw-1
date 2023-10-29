import "../styles/HobbyList.css"
import "../styles/CardList.css"
import {Card} from "../components/Card.jsx";
import {NavLink, useLoaderData} from "react-router-dom";
import {getHobbies} from "../hobbies.js";

const HobbyList = () => {
    const { hobbies } = useLoaderData();
    let key = 0;

    return (
        <div className="hobbyList">
            <h2>Hobbies</h2>
            <div className="cardList">
                {hobbies.map(hobby => {
                        key += 1;
                        return (
                            <NavLink to={`hobby/${hobby.id}`} key={key}>
                                <Card data={hobby}/>
                            </NavLink>
                        );
                    }
                )}
            </div>
        </div>
    );
};

export const loader = async () => {
    const hobbies = await getHobbies();
    return {hobbies};
};

export default HobbyList;