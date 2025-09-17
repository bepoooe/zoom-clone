"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { avatarImages } from "@/constants";
import { useToast } from "./ui/use-toast";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  const { toast } = useToast();

  return (
    <section className="modern-card flex min-h-[258px] w-full flex-col justify-between rounded-2xl border border-brand-orange-500/20 bg-gradient-to-br from-brand-black-800 to-brand-black-900 px-5 py-8 shadow-lg transition-all duration-300 hover:shadow-brand-orange-500/25 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
        <div className="flex-center size-12 rounded-xl border border-brand-orange-400/30 bg-brand-orange-500/20 backdrop-blur-sm">
          <Image src={icon} alt="upcoming" width={28} height={28} className="brightness-150" />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            <p className="text-base font-normal text-white/80">{date}</p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative", {})}>
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="attendees"
              width={40}
              height={40}
              className={cn("rounded-full", { absolute: index > 0 })}
              style={{ top: 0, left: index * 28 }}
            />
          ))}
          <div className="flex-center absolute left-[136px] size-10 rounded-full border-[5px] border-brand-orange-500/30 bg-brand-black-700 font-bold text-brand-orange-300">
            +5
          </div>
        </div>
        {!isPreviousMeeting && (
          <div className="flex gap-2">
            <Button onClick={handleClick} className="border-none rounded-xl bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 px-6 shadow-lg transition-all duration-300 hover:from-brand-orange-400 hover:to-brand-orange-500 hover:shadow-xl">
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={20} height={20} />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link Copied",
                });
              }}
              className="rounded-xl border border-brand-orange-500/30 bg-brand-black-700 px-6 shadow-lg transition-all duration-300 hover:border-brand-orange-400/50 hover:bg-brand-black-600 hover:shadow-xl"
            >
              <Image
                src="/icons/copy.svg"
                alt="feature"
                width={20}
                height={20}
                className="brightness-150"
              />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;
