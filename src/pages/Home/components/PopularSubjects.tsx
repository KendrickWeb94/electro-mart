import graphic from "../../../assets/imgs/graphic-design.svg"
import maths from "../../../assets/imgs/calculator.svg"
import engine from "../../../assets/imgs/engineering.svg"
import science from "../../../assets/imgs/science.svg"
import web from "../../../assets/imgs/web.svg"
import teaching from "../../../assets/imgs/teaching.svg"

const PopularSubjects = () => {
  return (
    <div className=" w-full h-auto py-6 mx-auto max-w-[95%]">
      <div className="w-full space-y-7">
        <h1 className=" text-3xl font-semibold text-dark text-center inter">
          Our Popular Subjects
        </h1>
        <div className="grid-auto">
          <div className="p-5 bg-green-light border hover:bg-d-green smooth hover:text-white rounded text-dark border-d-green h-[170px] flex items-center flex-col justify-center space-y-3">
            <img src={graphic} alt="" width={80}/>
            <h3 className=" text-xl font-medium inter ">Design</h3>
            <h3 className=" text-sm font-normal inter ">12 Modules</h3>
          </div>
          <div className="p-5 bg-green-light border hover:bg-d-green smooth hover:text-white rounded text-dark border-d-green h-[170px] flex items-center flex-col justify-center space-y-3">
            <img src={maths} alt="" width={60}/>
            <h3 className=" text-xl font-medium inter ">Mathematics</h3>
            <h3 className=" text-sm font-normal inter ">18 Modules</h3>
          </div>
          <div className="p-5 bg-green-light border hover:bg-d-green smooth hover:text-white rounded text-dark border-d-green h-[170px] flex items-center flex-col justify-center space-y-3">
            <img src={engine} alt="" width={60}/>
            <h3 className=" text-xl font-medium inter ">Engineering</h3>
            <h3 className=" text-sm font-normal inter ">18 Modules</h3>
          </div>
          <div className="p-5 bg-green-light border hover:bg-d-green smooth hover:text-white rounded text-dark border-d-green h-[170px] flex items-center flex-col justify-center space-y-3">
            <img src={science} alt="" width={60}/>
            <h3 className=" text-xl font-medium inter ">Science</h3>
            <h3 className=" text-sm font-normal inter ">14 Modules</h3>
          </div>
          <div className="p-5 bg-green-light border hover:bg-d-green smooth hover:text-white rounded text-dark border-d-green h-[170px] flex items-center flex-col justify-center space-y-3">
            <img src={web} alt="" width={60}/>
            <h3 className=" text-xl font-medium inter ">Programming</h3>
            <h3 className=" text-sm font-normal inter ">30 Modules</h3>
          </div>
          <div className="p-5 bg-green-light border hover:bg-d-green smooth hover:text-white rounded text-dark border-d-green h-[170px] flex items-center flex-col justify-center space-y-3">
            <img src={teaching} alt="" width={60}/>
            <h3 className=" text-xl font-medium inter ">Teaching</h3>
            <h3 className=" text-sm font-normal inter ">43 Modules</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSubjects;
