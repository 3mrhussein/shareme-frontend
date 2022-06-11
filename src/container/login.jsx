import { useNavigate } from 'react-router-dom';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import GoogleLoginButton from '../components/googleLoginButton';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          onClick={(e) => e.preventDefault()}
          className="w-full h-full object-cover"
          playsInline
        />
        <div className="absolute flex flex-col justify-center items-center w-100 h-100 top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img
              src={logo}
              width="130px"
              alt="logo"
              className=" cursor-pointer"
              onClick={() => navigate('/', { replace: true })}
            />
          </div>
          <div className="shadow-2xl">
            <GoogleLoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
