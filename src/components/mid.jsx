import "../css/input.css";
import card from "../images/card_into.png";
import mobiphone from "../images/undraw_mobile_login_ikmv.png"

export default function Mid() {
  return (
    <div className=" mid flex justify-around mb-[7%] ">
      <div className="title"></div>
      <div className="text_title mt-[5%]">
        <h3 className="w-[540px] h-[48px] font-roboto font-[500] text-[36px] text-[#091133] mb-[6%]">
          Light, Fast & Powerful
        </h3>
        <p className="w-[500px] h-[160px] font-roboto font-[400] text-[18px] text-[#505F98] mb-[12%]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className="text_item flex gap-[20px]">
          <div className="text_item1">
            <img className="mb-[4%]" src={card} alt="" />
            <h5 className="w-[255px] h-[26px] font-roboto font-[500] text-[16px] text-[#091133] mb-[4%]">
              Title Goes Here
            </h5>
            <p className="w-[255px] h-[26px] font-roboto font-[400] text-[12px] text-[#091133] mb-[4%] ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.{" "}
            </p>
          </div>
          <div className="text_item2">
            <img className="mb-[4%]" src={card} alt="" />
            <h5 className="w-[255px] h-[26px] font-roboto font-[500] text-[16px] text-[#091133] mb-[4%]">
              Title Goes Here
            </h5>
            <p className="w-[255px] h-[26px] font-roboto font-[400] text-[12px] text-[#091133] mb-[4%] ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="img">
        <img className="w-[540] h-[524] " src={mobiphone} alt="" />
      </div>
    </div>
  );
}
