import "../css/input.css";
import designerImage from "../images/designer_1.png";
import Landing from "../images/Landie.png";

export default function Top() {
  return (
    <div className="w-[100%] h-[50%]">
      <div
        className="w-[70%] h-[50rem] bg-cover bg-center ml-[30%] mb-[16%]"
        style={{ backgroundImage: `url(${designerImage})` }}
      ></div>

      <div className=" flex justify-between w-[100%] absolute top-[10px] left-0  top_item">
        <div className=" flex justify-evenly w-[30%] ml-[7%] menu_right">
          <p className="font-roboto text-[14px] font-[400] text-[#505F98] w-[38px]">
            Home
          </p>
          <p className="font-roboto text-[14px] font-[400] text-[#505F98] w-[38px]">
            About
          </p>
          <p className="font-roboto text-[14px] font-[400] text-[#505F98] w-[38px]">
            Contact
          </p>
        </div>
        <div className="menu_mid mr-[13%] ">
          <img src={Landing} alt="" />
        </div>
        <div className="menu_button mr-[11%] bg-[#111B47] w-[160px] h-[36px] ">
          <button className="font-roboto text-[12px] font-[500] text-[#FFFFFF]  ml-[34%]">
            Buy Now
          </button>
        </div>
      </div>
      <div className="mid_item absolute top-[24%] ml-[5%]  ">
        <h3 className=" w-[520px] h-[164px] font-roboto font-[500] text-[50px] text-[#091133]
">Introduce Your Product Quickly & Effectively</h3>
        <p className="

w-[500px] h-[160px] font-roboto font-[400] text-[18px] text-[#505F98]
"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        
        <div className="mid_item_button flex gap-[50px] mt-[10%] ">
          <div className="mid_item_button1 bg-[#111B47] h-[36px] w-[189px] ">
            <button className="w-[189px] h-[26px] font-roboto font-[500] text-[16px] text-[#FFFFFF] text-center">Purchase UI Kit</button>
          </div>
          <div className="mid_item_butotn2 border-2 border-[#091133] w-[189px] h-[36px]">
            <button className="w-[189px] h-[26px] font-roboto font-[500] text-[16px] text-[#091133] ">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
