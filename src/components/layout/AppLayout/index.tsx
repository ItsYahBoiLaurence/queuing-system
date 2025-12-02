import Header from "@/components/custom/Header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 bg-[#F0F3F6]">
        <Outlet />
      </main>
    </div>
  );
}
