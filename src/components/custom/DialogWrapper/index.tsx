import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ReactNode } from "react";

type DialogWrapperProps = {
  title: string;
  content: ReactNode;
  trigger: ReactNode;
};

export default function DialogWrapper(props: DialogWrapperProps) {
  return (
    <Dialog>
      <DialogTrigger>{props.trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            {props.title}
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>
        {props.content}
      </DialogContent>
    </Dialog>
  );
}
