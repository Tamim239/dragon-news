import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'



export const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-2 mb-6">
        <h1 className="text-2xl font-semibold mb-4">Login With</h1>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login with Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h1 className="text-2xl font-semibold mb-4">Find Us On</h1>
          <a href="" className="flex items-center p-4 text-lg border border-black rounded-t-lg">
            <FaFacebook className="mr-2"></FaFacebook>
           <span> Facebook</span>
          </a>
          <a href="" className="flex items-center p-4 text-lg border-black border-x">
            <FaTwitter className="mr-2"></FaTwitter>
            <span>Twitter</span>
          </a>
          <a href="" className="flex items-center p-4 text-lg border border-black rounded-b-lg">
            <FaInstagram className="mr-2"></FaInstagram>
            <span>Instagram</span>
          </a>
      </div>
      <div className="p-4 mb-6 bg-[#e8e6e6]">
        <h1 className="text-2xl font-semibold mb-4">Q-Zone</h1>
         <img src={qZone1} alt="qZone" />
         <img src={qZone2} alt="qZone" />
         <img src={qZone3} alt="qZone" />
      </div>
    </div>
  );
};
