"use client";


export const JourneyItem = () => {
  return (
    <div className="inline-flex h-16 w-[1216px] items-center justify-start gap-4 border-b border-slate-200 p-4">
      <div className="flex items-center justify-center gap-2 rounded-[64px] bg-orange-100 p-1">
        <div className="relative h-3 w-3" />
      </div>
      <div className="inline-flex h-8 w-[363px] flex-col items-start justify-between">
        <div className="font-['Inter'] text-sm font-semibold leading-normal text-black">
          Abandoned cart recovery
        </div>
        <div className="inline-flex items-start justify-start">
          <div className="flex items-start justify-start gap-2 rounded-md bg-slate-200 px-[7px] py-0.5">
            <div className="font-['Inter'] text-[10px] font-medium text-slate-600">
              Checkout abandoned
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex w-24 flex-col items-start justify-center gap-2">
        <div className="inline-flex items-start justify-start rounded-md bg-slate-50">
          <div className="relative h-6 w-6" />
          <div className="flex h-6 w-6 items-center justify-center gap-[11.57px] px-[4.34px] py-[1.45px] opacity-20">
            <div className="relative inline-flex h-[15.70px] w-3 flex-col items-start justify-start" />
          </div>
          <div className="flex h-6 w-6 items-center justify-center px-1 pb-[4.50px] pt-[3.50px] opacity-20">
            <div className="relative h-4 w-4">
              <div className="absolute left-0 top-0 h-4 w-4"></div>
            </div>
          </div>
          <div className="relative h-6 w-6 opacity-20" />
        </div>
      </div>
      <div className="flex items-start justify-start gap-[5px]">
        <div className="flex items-start justify-start gap-2">
          <div className="flex items-start justify-start gap-2 rounded-md bg-blue-50 px-[7px] py-1.5">
            <div className="font-['Inter'] text-[10px] font-medium text-blue-600">
              Some
            </div>
          </div>
          <div className="flex items-start justify-start gap-2 rounded-md bg-red-50 px-[7px] py-1.5">
            <div className="font-['Inter'] text-[10px] font-medium text-red-600">
              Random
            </div>
          </div>
          <div className="flex items-start justify-start gap-2 rounded-md bg-orange-50 px-[7px] py-1.5">
            <div className="font-['Inter'] text-[10px] font-medium text-orange-600">
              Tags
            </div>
          </div>
        </div>
      </div>
      <div className="shrink grow basis-0 text-right font-['Inter'] text-sm font-normal leading-normal text-slate-500">
        5 days ago
      </div>
      <div className="flex items-center justify-center gap-2 rounded-md p-2">
        <div className="relative h-4 w-4" />
      </div>
    </div>
  );
};
