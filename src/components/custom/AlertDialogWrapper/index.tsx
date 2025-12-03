import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";

type AlertDialogWrapperProps = {
  trigger: ReactNode;
  content: ReactNode;
};
export default function AlertDialogWrapper(props: AlertDialogWrapperProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{props.trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogCancel
          asChild
          className="shadow-none border-0 justify-self-start"
        >
          <p className="flex flex-row gap-1  items-center hover:cursor-pointer">
            <ChevronLeft /> Back
          </p>
        </AlertDialogCancel>
        {props.content}
      </AlertDialogContent>
    </AlertDialog>
  );
}
