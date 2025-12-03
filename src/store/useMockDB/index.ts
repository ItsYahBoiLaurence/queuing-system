import type { AppointmentForm } from "@/pages/home/appointment-type";
import { create } from "zustand";

export type Appointments = {
  name: string;
  referenceNumber: string;
  schedule: string;
  purpose: string;
};

export type MockDBState = {
  appointments: Appointments[];
};

export type MockDBActions = {
  validateAppointment: (data: AppointmentForm) => Appointments[];
};

export type MockDBStoreType = MockDBActions & MockDBState;

export const useMockDB = create<MockDBStoreType>((_, get) => ({
  appointments: [
    {
      name: "John Laurence Burgos",
      referenceNumber: "MED-2025-001",
      schedule: "Dec 25, 2025",
      purpose: "Medical Assistance",
    },
  ],
  validateAppointment: (data) => {
    const scheduledAppointments = get().appointments;
    return scheduledAppointments.filter(
      (appointment) => appointment.referenceNumber === data.referenceNumber
    );
  },
}));
