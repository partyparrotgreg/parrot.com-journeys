import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  type CampaingTypeEnum,
  type ChannelsEnum,
  type ICampaignProps,
} from "../_data";

export const JourneyTemplate = ({ item }: { item: ICampaignProps }) => {
  return (
    <div className="relative inline-flex cursor-pointer flex-col items-start justify-start gap-3 rounded-2xl bg-slate-50 p-4 transition-all duration-300 hover:z-50 hover:bg-background hover:shadow-2xl">
      <div className="inline-flex items-start justify-between self-stretch">
        <DisplayCampaing type={item.type} />
        <Button size={"xs"} variant={"outline"}>
          Use template
        </Button>
      </div>
      <div className=" text-base font-medium text-slate-900">
        Abandoned card recovery <ArrowRight size={12} className="inline-flex" />
      </div>
      <div className=" text-sm font-normal leading-[21px] text-slate-600">
        Dont leave your carts abandoned! Recover them and drive up sales with
        this abandoned cart series.
      </div>
      <div className="inline-flex items-center justify-between self-stretch">
        <div className="flex items-start justify-start gap-1 rounded-md bg-slate-200 px-2 py-1">
          <div className="flex items-center justify-start gap-2 px-[3px] py-px">
            <div className="relative inline-flex  flex-col items-start justify-start" />
          </div>
          <div className=" text-xs font-medium text-slate-600">Shopify</div>
        </div>
        <div className="relative h-5 w-5" />
      </div>
    </div>
  );
};

const DisplayCampaing = ({ type }: { type: CampaingTypeEnum }) => {
  return <Badge variant={"secondary"}>{type}</Badge>;
};
