import "./LaurelWreath.css";

interface Props {
  color: "white" | "black";
  side?: "left" | "right" | "full";
}

function Branch() {
  return (
    <>
      <path
        d="M32 72C23 62 18 50 16 38 14 26 17 16 24 7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
      <path d="M22 15C13 15 8 10 7 4c8-1 15 3 15 11Z" fill="currentColor" />
      <path d="M17 28C8 30 3 26 1 20c8-3 15 0 16 8Z" fill="currentColor" />
      <path d="M17 40C8 44 2 40 0 34c8-5 15-2 17 6Z" fill="currentColor" />
      <path d="M20 52c-8 6-14 3-17-2 6-6 14-5 17 2Z" fill="currentColor" />
      <path d="M25 63c-6 8-14 6-18 3 5-7 12-9 18-3Z" fill="currentColor" />
    </>
  );
}

export function LaurelWreath({ color, side = "full" }: Props) {
  return (
    <svg
      className={`laurel-wreath laurel-wreath--${color}`}
      viewBox="0 0 40 80"
      aria-hidden="true"
      focusable="false"
    >
      {side !== "right" && <Branch />}
      {side !== "left" && (
        <g transform="translate(40 0) scale(-1 1)">
          <Branch />
        </g>
      )}
    </svg>
  );
}