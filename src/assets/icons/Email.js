import * as React from "react";

/**
 * @param {React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>} props
 */
function Email(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="1em" height="1em" {...props}>
      <path
        d="M38 23v13a2 2 0 01-2 2H12a2 2 0 01-2-2V23h28zM21.076 11.133a4 4 0 015.848 0L38 23H10l11.076-11.867z"
        fill="#8484FF"
      />
      <path d="M10 23c7.57-8.112 20.43-8.112 28 0H10z" fill="#8484FF" />
      <path
        d="M34 14H14a2 2 0 00-2 2v11a2 2 0 002 2h20a2 2 0 002-2V16a2 2 0 00-2-2z"
        fill="#DDF"
      />
      <path d="M38 27.6L36.586 23 13 38h23a2 2 0 002-2v-8.4z" fill="#8484FF" />
      <path
        d="M10 27.6l1.357-4.6L34 38H12a2 2 0 01-2-2v-8.4zM25 19a1 1 0 100-2h-8a1 1 0 100 2h8zM31 24a1 1 0 100-2H17a1 1 0 100 2h14z"
        fill="#8484FF"
      />
    </svg>
  );
}

const MemoEmail = React.memo(Email);
export default MemoEmail;
