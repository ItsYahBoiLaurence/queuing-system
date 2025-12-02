import { Card, CardAction, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  generateFourDigitNumber,
  type CategoryTypes,
} from "@/lib/generateNumber";
import { X } from "lucide-react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function GenerateQueue() {
  const { category } = useParams();

  const time = new Date();

  const navigate = useNavigate();

  const formattedDate = time.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className=" h-full w-full grid place-items-center">
      <Card className="w-[500px] px-5 py-10 gap-4 rounded-sm relative">
        <CardAction className="self-end absolute top-5 right-5">
          <X size={"16px"} onClick={() => navigate("/")} />
        </CardAction>
        <CardTitle className="text-center text-2xl font-normal">
          Kalinga ng Bayan
        </CardTitle>
        <Separator />
        <CardContent className="text-center flex flex-col gap-5">
          <p className="text-6xl  font-bold">
            {generateFourDigitNumber(category as keyof CategoryTypes)}
          </p>
          <p className="italic text-sm">Please proceed to the waiting area</p>
          <div className="w-full justify-around flex flex-row text-sm">
            <p>Date: {formattedDate} </p>
            <p>Time: {formattedTime} </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
