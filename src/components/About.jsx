import aboutimg from "../assets/aboutimg.png";

function About() {
  return (
    <>
      <div
        className="w-[100%] h-[100vh] p-9 bg-no-repeat bg-center bg-[#FFC74E] text-center  "
        style={{ backgroundImage: `url(${aboutimg})` }}
      >
       
      </div>
    </>
  );
}

export default About;
