export const LabelDescription = ({
  label,
  description,
}: {
  label: string;
  description: string;
}) => {
  return (
    <div className="inline-flex w-full shrink flex-col items-start justify-center">
      <div className="text-base font-bold text-slate-700">{label}</div>
      <div className="text-xs font-normal text-slate-500">{description}</div>
    </div>
  );
};
