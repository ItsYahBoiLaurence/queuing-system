import AppointmentCard from "@/components/custom/AppointmentCard";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMockDB } from "@/store";
import type { Appointments } from "@/store/useMockDB";
import { useState } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export type AppointmentForm = {
  referenceNumber: string;
};

export function WithAppointment() {
  const [disablePrint, setDisablePrint] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<Appointments[]>([]);
  const navigate = useNavigate();

  const validateAppointment = useMockDB((s) => s.validateAppointment);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      referenceNumber: "",
    },
  });

  const onsubmit: SubmitHandler<AppointmentForm> = (data) => {
    reset();
    console.log(data);
    setOpen(true);
    setData(validateAppointment(data));
  };

  return (
    <div>
      <div className="py-5 grid gap-5">
        <form onSubmit={handleSubmit(onsubmit)} id="appointmentForm">
          <Controller
            name="referenceNumber"
            control={control}
            rules={{ required: "Reference Number is Required!" }}
            render={({ field }) => (
              <div className="flex flex-row justify-center items-center gap-2">
                <Label htmlFor="referenceNumber" className="w-auto uppercase">
                  Reference Number:
                </Label>

                <Input
                  {...field}
                  id="referenceNumber"
                  type="text"
                  placeholder="Put your reference number here"
                  className="w-7/12"
                />
              </div>
            )}
          />
        </form>
        <div className="grid w-2/3 m-auto place-items-center gap-2">
          <Button className="w-full" type="submit" form="appointmentForm">
            Validate
          </Button>
          <Button className="w-full" disabled={disablePrint}>
            Print Queue Number
          </Button>
        </div>
      </div>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogTitle />
          <AlertDialogDescription />
          <AppointmentCard isLoading={false} data={data} />
          {data.length === 0 && <AlertDialogCancel>Close</AlertDialogCancel>}
          {data.length > 0 && (
            <AlertDialogAction asChild>
              <Button
                onClick={() => navigate("generate-queue/withAppointment")}
              >
                Confirm
              </Button>
            </AlertDialogAction>
          )}
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export function WithoutAppointment() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 justify-center items-center text-center">
      <div>
        <p className="text-sm text-primary">
          You are getting a queue number without an appointment.
        </p>
        <p className="text-xs italic mt-5">
          Please wait for your number to be called
        </p>
      </div>
      <Button
        className="capitalize"
        onClick={() => navigate("/generate-queue/withoutAppointment")}
      >
        confirm & print queue number
      </Button>
    </div>
  );
}

export function Priority() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 justify-center items-center text-center">
      <div>
        <p className="text-sm text-primary">
          You are getting a priority number. Priority service applies regardless
          of appointment status.
        </p>
        <p className="text-xs italic mt-5">
          Please wait for your number to be called
        </p>
      </div>
      <Button
        className="capitalize"
        onClick={() => navigate("/generate-queue/priority")}
      >
        Confirm & Print Queue Number
      </Button>
    </div>
  );
}
