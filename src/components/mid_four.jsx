import "../css/input.css";
import mention from "../images/undraw_mention_6k5d.png"


export default function Mid_four() {
  return (
    <div className="mt-[10%] mb-[7%] flex justify-around">
        <div className="">
            <img className="w-[480] h-[315] " src={mention} alt="" />
        </div>
        <div className="">
            <h5 className="w-[445px] h-[48px] font-roboto font-[500] text-[36px] text-[#091133] mb-[6%]">Light, Fast & Powerful</h5>
            <p className="w-[445px] h-[166px] font-roboto font-[400] text-[16px] text-[#6F7CB2] "> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

            <div className="button w-[150px] h-[32px] bg-[#111B47]  ">
          <button className=" ml-[29px] h-[24px] text-center font-roboto font-[500] text-[14px] text-[#FFFFFF]  ">Purchase Now</button>
        </div>
        </div>
        
    </div>
  )
}
