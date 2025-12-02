import { ArrowRight, CalendarCheck2, CalendarX2 } from "lucide-react";

export default function Home() {
  const cardContainer = "flex flex-col gap-5 items-center ";
  const card =
    "bg-white w-full grid place-items-center rounded-lg shadow-sm hover:bg-primary hover:text-white hover:cursor-pointer";
  const centerGrid = "grid place-items-center";

  return (
    <div className={`w-full h-full ${centerGrid}`}>
      <div className=" flex flex-col gap-5">
        <p className="uppercase font-bold text-2xl text-center">
          Please Select your Transaction
        </p>
        <div className="flex flex-col gap-5 font-bold text-2xl text-center">
          <div className="flex gap-5 justify-center flex-row min-h-[250px] ">
            <div className={`${card} ${centerGrid}`}>
              <div className={`${cardContainer}`}>
                <CalendarCheck2 size={"70px"} className="text-gold" />
                <p className="w-[70%] ">With Appointment</p>
              </div>
            </div>
            <div className={`${card} ${centerGrid}`}>
              <div className={`${cardContainer}`}>
                <CalendarX2 size={"70px"} className="text-gold" />
                <p className="w-[70%]">Without Appointment</p>
              </div>
            </div>
          </div>

          <div
            className={`min-h-[130px] flex flex-col gap-3 p-5 items-center ${card} justify-center`}
          >
            <img src="/priority.svg" className="h-[70px]" />
            <p className="uppercase">for priority</p>
          </div>
        </div>
      </div>
      <a
        href="/panel"
        className="flex flex-row gap-1 items-center text-primary underline"
      >
        Go to Queue Panel <ArrowRight />
      </a>
    </div>
  );
}
