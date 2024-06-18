import Image from "next/image";

const PopUp = () => {
  return (
    <div className=" w-full h-full fixed top-0 left-0">
      <div className=" ">
        <Image src={"/"} alt="Logo MSSML" width={1000} height={1000} />
      </div>
    </div>
  );
};

export default PopUp;
