import * as React from "react";

/**
 * @param {React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>} props
 */
function Shopify(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="1em" height="1em" {...props}>
      <g clipPath="url(#prefix__clip0_9_2213)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.888 39.15l-.06-26.913c-.157-.181-.462-.126-.581-.086l-.795.285a7.053 7.053 0 00-.38-1.084c-.563-1.247-1.387-1.907-2.384-1.908h-.003c-.067 0-.133.007-.2.013l-.007.001a2.444 2.444 0 00-.09-.12c-.434-.539-.991-.802-1.658-.78-1.287.044-2.568 1.123-3.608 3.038-.732 1.35-1.287 3.043-1.446 4.354l-2.534.91c-.745.272-.768.3-.867 1.115-.073.617-2.025 18.133-2.025 18.133l16.357 3.283.28-.241zm-5.36-29.36a1.182 1.182 0 00-.774-.237c-1.986.067-3.719 3.668-4.16 6.067l1.902-.683.34-.122c.25-1.524.875-3.105 1.693-4.123.286-.365.624-.67.999-.903zm-1.751 4.686l2.731-.982c.009-.825-.069-2.046-.425-2.907-.38.181-.698.499-.927.783-.614.766-1.115 1.933-1.379 3.106zm3.586-1.289l1.27-.456c-.203-.765-.684-2.046-1.66-2.262.303.91.381 1.962.39 2.719z"
          fill="#95BF47"
        />
        <path
          d="M32.553 14.24c-.098-.01-1.988-.044-1.988-.044s-1.582-1.782-1.739-1.964a.368.368 0 00-.219-.117v27.272l7.088-2.045s-2.892-22.696-2.91-22.851a.316.316 0 00-.08-.172.241.241 0 00-.152-.08z"
          fill="#5E8E3E"
        />
        <path
          d="M24.68 18.474l-.823 3.575s-.918-.485-2.008-.405c-1.596.116-1.613 1.285-1.597 1.579.087 1.597 3.71 1.947 3.914 5.692.16 2.946-1.346 4.962-3.517 5.12-2.605.192-4.04-1.592-4.04-1.592l.552-2.727s1.444 1.265 2.6 1.18c.755-.055 1.024-.768.997-1.272-.113-2.085-3.065-1.963-3.251-5.389-.157-2.885 1.474-5.806 5.075-6.07 1.388-.102 2.098.31 2.098.31"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_9_2213">
          <path
            fill="#fff"
            transform="translate(12 8.296)"
            d="M0 0h24v31.408H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoShopify = React.memo(Shopify);
export default MemoShopify;