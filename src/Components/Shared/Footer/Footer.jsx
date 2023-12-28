import { useTheme } from "../../../Contexts/ThemeProvider/ThemeProvider";
import footerlogo from "../../../images/footerlogo.png";
import "./Footer.css";

const Footer = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`${isDarkMode ? "bg-dark-bg pb-16" : "bg-[#F3F3F3] py-16"}`}
    >
      <div className="md:mx-12 xl:mx-[135px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="ps-9 lg:ps-0">
          <div className="flex">
            <img
              src={footerlogo}
              className="mr-2"
              alt=""
              style={{ width: "60px", height: "60px" }}
            />
            <h2
              className={`text-2xl xl:text-4xl font-semibold header-logo-text ${
                isDarkMode ? "text-dark-text" : "text-light-text"
              }`}
            >
              <span className="doc">Dental</span> Ease
            </h2>
          </div>
          <p
            className={`mt-[30px] ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Welcome to Dental Ease, your trusted partner in dental care. We are
            committed to providing top-notch dental services with a focus on
            your comfort and well-being.
          </p>
        </div>
        <div className="ps-9 lg:ps-0">
          <p className="mb-4 text-[25px] font-bold">Quick Links</p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            About Us
          </p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Doctors
          </p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Departments
          </p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Online Payment
          </p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Contact Us
          </p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            My Account
          </p>
        </div>
        <div className="ps-9 lg:ps-0">
          <p className="mb-4 text-[25px] font-bold">Doc House Services</p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Orthodontics
          </p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Cosmetic Dentistry
          </p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Periodontics
          </p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Pediatric Dentistry
          </p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Prosthodontics
          </p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Oral Surgery
          </p>
        </div>
        <div className="ps-9 lg:ps-0">
          <p className="mb-4 text-[25px] font-bold">Working Hours</p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Monday - 10 am to 7 pm
          </p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Tuesday - 10 am to 7 pm
          </p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Wednesday - 10 am to 7 pm
          </p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Thursday - 10 am to 7 pm
          </p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Friday - 10 am to 7 pm
          </p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Saturday - 10 am to 7 pm
          </p>
          <p
            className={`mb-1 text-lg font-semibold  ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Sunday - 10 am to 7 pm
          </p>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-[70px] mb-[50px]">
        <hr />
      </div>
      <p className="text-center text-lg footer-links">
        Copyright © 2022 - All right reserved by Doc House Ltd
      </p>
    </div>
  );
};

export default Footer;
