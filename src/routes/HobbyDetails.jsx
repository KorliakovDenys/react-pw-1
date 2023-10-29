import "../styles/CardList.css";
import "../styles/HobbyDetails.css";
import {useLoaderData} from "react-router-dom";
import {getHobby} from "../hobbies.js";
import {Card} from "../components/Card.jsx";

const HobbyDetails = () => {
    const {hobby} = useLoaderData();
    return (
        <div className="hobbyDetails">
            <h2>{hobby.name}</h2>
            <div className="hobbyBaseInfoContainer">
                <div className="img_wrapper">
                    <img src={hobby.img} alt=""/>
                </div>
                <b>{hobby.name}</b>
                <p> - {hobby.description}</p>
                <hr/>
            </div>
            <h3>
                Famous persons
            </h3>
            <div className="cardList">
                {hobby.famousPersons.map(person => {
                        return <Card data={person}/>;
                    }
                )}
            </div>
        </div>
    );
};

export const loader = async ({params}) => {
    const hobby = await getHobby(params.id);
    return {hobby};
};

export default HobbyDetails;