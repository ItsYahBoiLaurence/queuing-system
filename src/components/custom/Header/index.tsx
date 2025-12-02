import { useNavigate } from "react-router-dom";
import Time from "../Time";

export default function Header() {
  const flexContainer = "flex items-center";
  const navigate = useNavigate();
  return (
    <div className={`bg-primary p-5 ${flexContainer} justify-between`}>
      <div
        className={`${flexContainer} flex items-center gap-2`}
        onClick={() => navigate("/")}
      >
        <img src="/logo.svg" className="size-20" />
        <p className="font-bold uppercase text-white text-4xl">
          Kalinga ng Bayan
        </p>
      </div>
      <Time />
    </div>
  );
}
