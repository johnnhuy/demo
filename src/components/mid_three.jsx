import "../css/input.css";
import social from "../images/undraw_social_influencer_sgsv.png"


export default function Mid_three() {
  return (
    <div className="mt-[10%] mb-[7%] flex justify-around">
        <div className="">
            <img className="w-[480] h-[315] " src={social} alt="" />
        </div>
        <div className="">
            <h5 className="w-[445px] h-[48px] font-roboto font-[500] text-[36px] text-[#091133] mb-[6%]">Light, Fast & Powerful</h5>
            <p className="w-[445px] h-[166px] font-roboto font-[400] text-[16px] text-[#6F7CB2] "> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
        
    </div>
  )
}
