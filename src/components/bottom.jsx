import Landing from "../images/Landie.png";
import fb from "../images/facebook.png";
import inn from "../images/appin.png";
import ins from "../images/insta.png";
import tw from "../images/twit.png";
import youtube from "../images/youtube.png";

export default function Bottom() {
  return (
    <div className="bg-[#E7ECFF] border-t-medium border-b-medium w-full h-full ">
        <div className="top_item flex justify-evenly mb-[3%] border-t-medium border-b-medium">
            <p className="mr-[22%] w-[133px] h-[24px] font-roboto font-[500] text-[14px] text-[#939EA4] "> ©2023 Yourcompany</p>
            <div className="img mr-[21%]">
                <img src={Landing} alt="" className=" " />
            </div>
            <div className="button w-[150px] h-[32px] bg-[#111B47]  ">
          <button className=" ml-[29px] h-[24px] text-center font-roboto font-[500] text-[14px] text-[#FFFFFF]  ">Purchase Now</button>
        </div>
        </div>
        <div className="border-[#939EA4] border-[2px] h-[1px] w-[1288px] ml-[8%] mb-[3%]"></div>

        <div className="bot_item flex justify-evenly mb-[3%] ">
            <div className="item1 w-[245px] flex justify-center gap-[30px] ml-[-52%] ">
                <p className=" font-roboto font-[400] text-[14px] text-[#929ECC] ">Home</p>
                <p className=" font-roboto font-[400] text-[14px] text-[#929ECC] ">About</p>
                <p className=" font-roboto font-[400] text-[14px] text-[#929ECC] ">Contact</p>
            </div>
            <div className="soical flex justify-around gap-[30px] mr-[-49%]">
                <img src={fb} alt="" className="" />
                <img src={inn} alt="" className="" />
                <img src={tw} alt="" className="" />
                <img src={youtube} alt="" className="" />
                <img src={ins} alt="" className="" />
            </div>
        </div>
    </div>
  )
}
