import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarCheck2,
  CalendarX2,
  ChevronLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
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
          <AlertDialog>
            <AlertDialogTrigger>
              <div
                className={`min-h-[130px] flex flex-col gap-3 p-5 items-center ${card} justify-center`}
              >
                <img src="/priority.svg" className="h-[70px]" />
                <p className="uppercase">for priority</p>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogCancel
                asChild
                className="shadow-none border-0 justify-self-start"
              >
                <p className="flex flex-row gap-1  items-center hover:cursor-pointer">
                  <ChevronLeft /> Back
                </p>
              </AlertDialogCancel>

              <div className="flex flex-col gap-10 justify-center items-center text-center">
                <AlertDialogTitle>
                  <p className="text-2xl text-center font-semibold">
                    Priority Queue
                  </p>
                </AlertDialogTitle>
                <AlertDialogDescription asChild>
                  <div>
                    <p className="text-lg text-primary">
                      You are getting a priority number. Priority service
                      applies regardless of appointment status.
                    </p>
                    <p className="text-xs italic mt-5">
                      Please wait for your number to be called
                    </p>
                  </div>
                </AlertDialogDescription>

                <AlertDialogAction asChild>
                  <Button
                    className="uppercase"
                    onClick={() => navigate("/generate-queue/priority")}
                  >
                    confirm & print queue number
                  </Button>
                </AlertDialogAction>
              </div>
            </AlertDialogContent>
          </AlertDialog>
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
