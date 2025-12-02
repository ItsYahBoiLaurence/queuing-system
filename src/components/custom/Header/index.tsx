import Time from "../Time";

export default function Header() {
  const flexContainer = "flex items-center";
  return (
    <div className={`bg-primary p-5 ${flexContainer} justify-between`}>
      <div className={`${flexContainer} flex items-center gap-2`}>
        <img src="/logo.svg" />
        <p className="font-bold uppercase text-white text-4xl">
          Kalinga ng Bayan
        </p>
      </div>
      <Time />
    </div>
  );
}
