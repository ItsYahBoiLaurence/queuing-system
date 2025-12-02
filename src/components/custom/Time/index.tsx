import { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const weekday = time.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <p className="font-bold text-xl text-white flex gap-5">
      <span> {formattedDate}</span> |<span> {weekday}</span> |
      <span>{formattedTime}</span>
    </p>
  );
}
