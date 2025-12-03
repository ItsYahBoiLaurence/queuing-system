import { Spinner } from "@/components/ui/spinner";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import type { Appointments } from "@/store/useMockDB";
import { CircleX } from "lucide-react";

export type AppointmentCardProps = {
  isLoading: boolean;
  data: Appointments[];
};

export default function AppointmentCard(props: AppointmentCardProps) {
  if (props.isLoading)
    return (
      <div className="grid place-items-center py-20 gap-5">
        <Spinner className="size-20" />
        <p className="text-3xl">Loading...</p>
      </div>
    );

  if (props.data.length === 0)
    return (
      <div className="grid place-items-center py-20 gap-5 text-red-700 font-bold">
        <CircleX className="size-20" />
        <p>Invalid Reference Number</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-4">
      <p className="text-green-600 text-2xl text-center font-bold">
        Appointment Found!
      </p>
      <ul className="px-5">
        <p className="text-sm font-semibold  text-gray-500">
          Display Information
        </p>
        <Table>
          <TableBody>
            {Object.keys(props.data[0]).map((key) => (
              <TableRow>
                <TableCell>
                  <p className="uppercase font-semibold">{key}</p>
                </TableCell>
                <TableCell>
                  {props.data[0][key as keyof Appointments]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ul>
    </div>
  );
}
