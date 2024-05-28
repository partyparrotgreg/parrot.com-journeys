export enum CampaingTypeEnum {
  STANDARD = "STANDARD",
  MULTI_CHANNEL = "MULTI CHANNEL",
}

export enum ChannelsEnum {
  EMAIL = "Email",
  SMS = "SMS",
  WHATSAPP = "WhatsApp",
  SHOPIFY = "Shopify",
}

export type CampaignType = {
  type: CampaingTypeEnum;
  title: string;
  description: string;
  platform: string;
  channel: ChannelsEnum[];
};

export const campaingTemplates: CampaignType[] = [
  {
    type: CampaingTypeEnum.STANDARD,
    title: "Abandoned cart recovery",
    description:
      "Don't leave your carts abandoned! Recover them and drive up sales with this abandoned cart series.",
    platform: "Shopify",
    channel: [ChannelsEnum.EMAIL],
  },
  {
    type: CampaingTypeEnum.STANDARD,
    title: "Welcome Series",
    description:
      "Welcome new subscribers with a WhatsApp message series that provides an introduction to your business and encourages conversion.",
    platform: "List",
    channel: [ChannelsEnum.WHATSAPP],
  },
  {
    type: CampaingTypeEnum.MULTI_CHANNEL,
    title: "Post Purchase Thank you",
    description:
      'Convert would-be one time buyers into repeat purchasers with a compelling "Thank you" offer that brings someone back to keep shopping immediately.',
    platform: "Shopify",
    channel: [ChannelsEnum.WHATSAPP, ChannelsEnum.SMS, ChannelsEnum.EMAIL],
  },
  {
    type: CampaingTypeEnum.STANDARD,
    title: "Abandoned cart recovery",
    description:
      "Don't leave your carts abandoned! Recover them and drive up sales with this abandoned cart series.",
    platform: "Shopify",
    channel: [ChannelsEnum.WHATSAPP],
  },
  {
    type: CampaingTypeEnum.STANDARD,
    title: "Welcome Series",
    description:
      "Welcome new subscribers with a SMS message series that provides an introduction to your business and encourages conversion.",
    platform: "List",
    channel: [ChannelsEnum.SMS],
  },
  {
    type: CampaingTypeEnum.MULTI_CHANNEL,
    title: "Happy First Purchase Anniversary",
    description:
      "Celebrate the day someone first became a customer with a special message and discount to keep these customers happy and, more importantly, coming back.",
    platform: "Segment",
    channel: [ChannelsEnum.WHATSAPP, ChannelsEnum.SMS, ChannelsEnum.EMAIL],
  },
  {
    type: CampaingTypeEnum.STANDARD,
    title: "Abandoned cart recovery",
    description:
      "Don't leave your carts abandoned! Recover them and drive up sales with this abandoned cart series.",
    platform: "Shopify",
    channel: [ChannelsEnum.SMS],
  },
  {
    type: CampaingTypeEnum.STANDARD,
    title: "Post Purchase Thank You",
    description:
      'Convert would-be one time buyers into repeat purchasers with a compelling "Thank you" offer that brings someone back to keep shopping immediately.',
    platform: "Shopify",
    channel: [ChannelsEnum.EMAIL],
  },
];

export const journeyList = [
  {
    id: 1,
    created: new Date(),
    title: "Abandoned cart recovery",
    description:
      "Don't leave your carts abandoned! Recover them and drive up sales with this abandoned cart series.",
    type: CampaingTypeEnum.STANDARD,
    channels: [ChannelsEnum.EMAIL, ChannelsEnum.WHATSAPP],
    tags: ["Shopify", "Email", "WhatsApp"],
  },
];