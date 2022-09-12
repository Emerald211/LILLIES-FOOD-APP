import "./App.css";
import logo from "./component/images/logo.png";
import foodbg from "./component/images/bg-food.png";
import googleplay from "./component/images/Google-play.png";
import applestore from "./component/images/Apple-store.png";
import pasta from "./component/images/pasta.png";
import Meat from "./component/images/Meat.png";
import Burger from "./component/images/Burger.png";
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  const showmenu = () => {
    document.querySelector('.sidenav').style.display = 'flex'
    document.querySelector('.sidenav').style.width = '250px'
    document.querySelector('.opac').style.display = "flex"
  }

  const closemenu = () => {
    document.querySelector('.sidenav').style.display = 'none'
    document.querySelector('.sidenav').style.width = '0px'
    document.querySelector('.opac').style.display = "none"
  }
  return (
    <div>
      <div className="App">
        <nav className="flex flex-row  py-8 items-center ">
          <img className="w-10" src={logo} alt="" />
          <ul className="flex list-none ml-auto font-bold">
            <li>Home</li>
            <li onClick={() => navigate("/welcome/login")} className="mr-4 ">
              Login
            </li>
            <button onClick={() => navigate("/welcome/register")} className="bg-yellow-200 flex items-center py-0 rounded-xl px-7">
              Sign up
            </button>
          </ul>

          <div className="menu ml-auto">
            <FaBars onClick={showmenu} className="text-4xl text-white" />
          </div>
        </nav>

        <div className="opac"></div>

        <div className="sidenav">
          <FaTimes onClick={closemenu} className="absolute top-6 text-3xl right-5" />
          <li>Home</li>
          <li onClick={() => navigate("/welcome/login")} className="">
            Login
          </li>
          <button onClick={() => navigate("/welcome/register")}>
            Sign up
          </button>
        </div>

        <section className="flex md:flex-row items-center flex-2 md:gap-3 gap-10 flex-col-reverse banner mt-10">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="w-4/4 ord"
          >
            <h1 className="">Order food anytime, anywhere</h1>
            <p className="md:w-3/4 w- text-white ">
              Browse from our list of specials to place your order and have food
              delivered to you in no time. Affordable, tasty and fast!
            </p>
            <div className="flex mt-4 gap-3">
              <img src={googleplay} alt="" />
              <img src={applestore} alt="" />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="md:w-2/3 flex items-center justify-center"
          >
            <img className="md:w-3/4" src={foodbg} alt="" />
          </div>
        </section>

        <section className="mt-28">
          <div className="flex flex-col justify-center text-center">
            <h2
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="2000"
              className="font-bold text-3xl text-white"
            >
              Special Meals of the day!
            </h2>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="2000"
              className="text-center mt-4 text-white "
            >
              Check our specials of the day and get discounts on all our meals{" "}
              <br /> and swift delivery to what ever location within Ilorin.
            </p>
          </div>
        </section>

        <section className="flex md:flex-row flex-col gap-3 items-center justify-center mt-28 notified">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
            className="w-1/3  flex flex-col justify-center items-center text-center"
          >
            <img className="md:w-1/3 w-full" src={pasta} alt="" />
            <h2 className="md:text-xl text-lg font-bold text mt-4">
              Stir fry pasta{" "}
            </h2>
            <p className="md:w-2/5 w-full text  mt-2 text-white text-xs font-thin">
              Stir fry pasta yada yada yada because of Sesan
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
            className="w-1/3 flex flex-col justify-center items-center text-center"
          >
            <img className="md:w-1/3 w-full " src={Meat} alt="" />
            <h2 className="md:text-xl text-lg font-bold text mt-4">
              Meat balls{" "}
            </h2>
            <p className="md:w-2/5 w-full mt-2 text-white text-xs font-thin">
              Stir fry pasta yada yada yada because of Sesan
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
            className="w-1/3 flex flex-col justify-center items-center text-center"
          >
            <img className="md:w-1/3 w-full" src={Burger} alt="" />
            <h2 className="text-xl mt-4">Burger Meal</h2>
            <p className="md:w-2/5 w-full mt-2 text-white text-xs font-thin">
              Stir fry pasta yada yada yada because of Sesan
            </p>
          </div>
        </section>

        <section className="flex md:flex-row  flex-col mt-36 md:justify-around justify-center pb-16 items-center notified">
          <div className="">
            <h1 className="text-3xl text-white font-bold">
              Get notified when we update!
            </h1>
            <p className="text-sm mt-3 md:w-2/3 w-full text-white">
              Get notified when we add new items to our specials menu, update
              our price list of have promos!
            </p>
          </div>
          <div className="md:w-1/3 w-full md:mt-0 mt-5 mail ">
            <form className="flex  items-center gap-1" action="">
              <input
                className="outline-none px-4 py-3 rounded-sm "
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-yellow-100 font-bold py-4 px-4 rounded-md ">
                <FaEnvelope />
              </button>
            </form>
          </div>
        </section>
      </div>

      <footer
        style={{ width: "auto" }}
        className="  bg-black text-white md:px-0 px-16 py-16"
      >
        <section className="flex flex-col md:gap-0 gap-9 md:flex-row justify-evenly mb-8">
          <div className="list-none flex flex-col gap-3">
            <h2 className="font-semibold  md:text-lg  text-3xl">Company</h2>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </div>

          <div className="list-none flex flex-col gap-3">
            <h2 className="font-semibold fon md:text-lg  text-3xl">Support</h2>
            <li>Help center</li>
            <li>Support center</li>
          </div>

          <div className="list-none flex flex-col gap-3">
            <h2 className="font-semibold md:text-lg  text-3xl">Legal</h2>
            <li>Cookies policy</li>
            <li>Privacy policy</li>
            <li>Terms of use</li>
            <li>Dispute resolution</li>
          </div>

          <div className="list-none flex flex-col gap-3">
            <h2 className="font-semibold fon md:text-lg  text-3xl">
              Install App
            </h2>
            <div className="flex md:flex-col gap-4  flex-row">
              <img className="w-1/3" src={googleplay} alt="" />
              <img className="w-1/3" src={applestore} alt="" />
            </div>
          </div>
        </section>

        <hr />

        <div className="flex flex-col md:flex-row  md:justify-between justify-center items-center md:px-16 px-10 md:gap-0 gap-5 py-4">
          <h6 className=" font-thin text-sm">
            @2022 LILLIES, All right reserved
          </h6>
          <div className="flex gap-5">
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
