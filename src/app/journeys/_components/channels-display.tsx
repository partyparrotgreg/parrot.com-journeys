"use client";

import MemoEmail from "@/assets/icons/Email";
import MemoShopify from "@/assets/icons/Shopify";
import MemoSms from "@/assets/icons/Sms";
import MemoWhatsapp from "@/assets/icons/Whatsapp";
import { ChannelsEnum } from "../_data";

interface ChannelProps {
  channels: ChannelsEnum[];
}

export const ChannelsDisplay = ({ channels }: ChannelProps) => {
  const resolveIcon = (channel: ChannelsEnum) => {
    switch (channel) {
      case ChannelsEnum.WHATSAPP:
        return <MemoWhatsapp />;
      case ChannelsEnum.EMAIL:
        return <MemoEmail />;
      case ChannelsEnum.SHOPIFY:
        return <MemoShopify />;
      case ChannelsEnum.SMS:
        return <MemoSms />;
      default:
        return null;
    }
  };

  return channels ? (
    <div className="flex flex-row items-center">
      {channels.map((channel, index) => (
        <div key={index}>
          <div className="flex items-center justify-center text-3xl">
            {resolveIcon(channel)}
          </div>
        </div>
      ))}
    </div>
  ) : null;
};
