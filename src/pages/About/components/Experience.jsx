import Timeline from "./Timeline";

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-around md:gap-5 lg:flex-row lg:gap-10 border-b border-gray-400 pb-[20px]">
      <div className="flex items-center justify-center gap-10 px-60 text-3xl ">
        <h1 className="text-2xl font-bold pt-10 text-center self-start ">
          Minhas Experiências
        </h1>
      </div>
      
      <div className="px-10 py-10 max-w-auto">
       <Timeline />
      </div>
    </div>
  );
};

export default Experience;
