import { useSelector } from "react-redux";
const MyProfile = () => {
    const data = useSelector((state)=>state.rockets)
    return(
        <div className="profile-container">
            {data.rockets
             .filter((item)=>item.reserved)
             .map((item)=>(
                <ul>
                    <li>{item.rocket_name}</li>
                </ul>
              ))
            
            }

        </div>
    )
};

export default MyProfile;
