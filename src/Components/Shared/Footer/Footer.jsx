import footerlogo from "../../../images/footerlogo.png";
import useTheme from "../../../Hooks/useTheme";

const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`${isDarkMode ? "bg-dark-background text-dark-text py-12 border-t-[1px]" : "bg-[#F3F3F3] py-12"}`}
    >
      <div className="md:mx-12 xl:mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="ps-9 lg:ps-0">
          <div className="flex">
            <img src={footerlogo} className="mr-2 w-[60px] h-[60px]" alt="" />
            <h2
              className={`text-2xl xl:text-3xl font-semibold header-logo-text ${
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
      <div className="max-w-[1440px] mx-auto py-7">
        <hr />
      </div>
      <p className="text-center text-lg">
        © {currentYear} - All right reserved by Doc House Ltd
      </p>
    </div>
  );
};

export default Footer;
