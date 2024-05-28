import * as React from "react";

/**
 * @param {React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>} props
 */
function Sms(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="1em" height="1em" {...props}>
      <path
        d="M10 15a4 4 0 014-4h20a4 4 0 014 4v13.435a4 4 0 01-4 4h-3.636L25.53 38.18a2 2 0 01-3.06 0l-4.834-5.745H14a4 4 0 01-4-4V15z"
        fill="#AAE9D8"
      />
      <path
        d="M31 18a1 1 0 100-2H17a1 1 0 100 2h14zM31 23a1 1 0 100-2H17a1 1 0 100 2h14zM24 28a1 1 0 100-2h-7a1 1 0 100 2h7z"
        fill="#09C3A3"
      />
    </svg>
  );
}

const MemoSms = React.memo(Sms);
export default MemoSms;
