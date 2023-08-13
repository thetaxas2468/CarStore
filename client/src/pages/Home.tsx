import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../store/hooks';
import "./static/Home.css";
import Cookies from "js-cookie";

const Home = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const { userForm, cars, carForm } = useAppSelector(state => state);
    const dispatch = useAppDispatch();


    const user = Cookies.get("email")?.split("@")[0] || null;


    return (
        <div>
            {user=== null || user === undefined?
            <div className='d-flex justify-content-center align-items-center flex-column w-100 container-text'>

            <h1>Welcome to Car World!</h1>
            <h4> 
            Welcome to Car World!

At Car World, we bring you an exceptional platform for all your car buying and selling needs. Our website offers a vast array of high-quality cars that cater to every taste and preference. From sleek and elegant sedans to rugged and adventurous SUVs, we have a wide selection to suit your lifestyle and requirements.

To unlock the full potential of our website and explore the incredible cars available for sale, we kindly ask you to log in. Once you're logged in, you'll gain access to detailed information about each car, including their make, model, and price. Our user-friendly interface allows you to browse through the listings, compare different options, and make an informed decision about your dream car.

If you're looking to sell your car, we've got you covered as well. With our easy-to-use selling platform, you can submit your car for sale in just a few simple steps. Whether it's a luxurious sports car or a reliable family vehicle, our website connects you with potential buyers who appreciate the value of quality automobiles.

At Car World, we prioritize your security and satisfaction. Rest assured that your personal information and transactions are handled with the utmost care and confidentiality. We strive to create a seamless and enjoyable experience for all our users, making car buying and selling a breeze.

So, log in now and embark on an exciting journey through the world of automobiles. Discover your perfect ride or find the right buyer for your beloved car. Car World is here to make your car buying and selling endeavors extraordinary. Happy motoring!
            </h4>
            </div>:<div></div>}
        </div>
    )
}

export default Home