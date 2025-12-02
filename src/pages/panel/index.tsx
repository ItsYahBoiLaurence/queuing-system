import { useQueueStore } from "@/store";

export default function Panel() {
  const { queue } = useQueueStore();

  return (
    <div className="gap-20 grid grid-cols-3 p-5">
      {queue.map((q) => (
        <div key={q.queueCategory} className="flex-[0.3]">
          <p className="text-primary p-4 rounded-lg text-3xl text-center font-bold mb-3">
            {q.label}
          </p>
          <div className="grid grid-cols-1 gap-2  ">
            {q.items.map((item) => (
              <div
                key={item.queueId}
                className="bg-white rounded-2xl p-5 text-primary font-semibold text-lg first:bg-green-800 first:text-white"
              >
                <p>Desk: {item.deskNo}</p>
                <p>Queue ID: {item.queueId}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
