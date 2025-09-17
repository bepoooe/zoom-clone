"use client";
import { ReactNode } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  instantMeeting?: boolean;
  image?: string;
  buttonClassName?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  instantMeeting,
  image,
  buttonClassName,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-2 border-brand-orange-500/30 bg-gradient-to-br from-brand-black-950 to-brand-black-900 px-8 py-10 text-white shadow-2xl backdrop-blur-lg">
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <div className="rounded-full bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 p-4 shadow-lg">
                <Image src={image} alt="checked" width={72} height={72} />
              </div>
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-[42px] bg-gradient-to-r from-white to-brand-orange-200 bg-clip-text text-transparent", className)}>
            {title}
          </h1>
          {children}
          <Button
            className={cn(
              "bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 hover:from-brand-orange-400 hover:to-brand-orange-500 text-brand-black-950 font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-brand-orange-500/25 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black-950",
              buttonClassName
            )}
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="button icon"
                width={16}
                height={16}
                className="mr-2"
              />
            )}
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
