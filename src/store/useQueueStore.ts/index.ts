import { create } from "zustand";

type QueueItems = {
  deskNo: number;
  queueId: string;
};

type QueueCategory = "withAppointment" | "withoutAppointment" | "priority";

type Queue = {
  label: string;
  queueCategory: QueueCategory;
  items: QueueItems[];
};

type QueueState = {
  queue: Queue[];
};

type QueueAction = {
  addToQueue: (category: QueueCategory) => void;
};

type QueueStore = QueueAction & QueueState;

export const useQueueStore = create<QueueStore>((set) => ({
  queue: [
    {
      label: "With Appointment",
      queueCategory: "withAppointment",
      items: [
        { deskNo: 1, queueId: "122025001" },
        { deskNo: 2, queueId: "122025010" },
        { deskNo: 1, queueId: "122025011" },
      ],
    },
    {
      label: "Without Appointment",
      queueCategory: "withoutAppointment",
      items: [
        { deskNo: 3, queueId: "122025002" },
        { deskNo: 3, queueId: "122025020" },
        { deskNo: 3, queueId: "122025022" },
      ],
    },
    {
      label: "Priority",
      queueCategory: "priority",
      items: [
        { deskNo: 2, queueId: "122025003" },
        { deskNo: 2, queueId: "122025033" },
        { deskNo: 2, queueId: "1220250030" },
      ],
    },
  ],
  addToQueue: (category) => {
    console.log(category);
  },
}));
