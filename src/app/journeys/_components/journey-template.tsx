"use client";

import { Button } from "@/components/ui/button";
import { type CampaignType } from "../_data";
import { ChannelsDisplay } from "./channels-display";

export const JourneyTemplate = ({ item }: { item: CampaignType }) => {
  return (
    <div className="relative inline-flex cursor-pointer flex-col items-start justify-start gap-3 rounded-2xl bg-slate-50 p-4 transition-all duration-300 hover:z-50 hover:bg-background hover:shadow-2xl">
      <div className="inline-flex items-start justify-between self-stretch">
        <ChannelsDisplay channels={item.channel} />
        <Button size={"xs"} variant={"outline"}>
          Use
        </Button>
      </div>
      <div className=" text-base font-medium text-slate-900">{item.title}</div>
      <div className=" grow text-sm font-normal leading-[21px] text-slate-600">
        {item.description}
      </div>
    </div>
  );
};
