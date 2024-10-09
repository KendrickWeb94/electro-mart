import notfound from "../assets/imgs/404.svg";

const NotFound = () => {
  return (
    <div className="w-full  h-screen flex items-center justify-center">
      <div className="space-y-6">
        <img src={notfound} alt="" className="w-[300px]" />
        helo
      </div>
    </div>
  );
};

export default NotFound;
