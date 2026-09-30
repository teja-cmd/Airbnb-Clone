import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Calendar.css";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function buildMonthGrid(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array(firstDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

function MonthGrid({
  year,
  month,
  selected,
  onSelect,
}: {
  year: number;
  month: number;
  selected: { checkIn: number | null; checkOut: number | null; month: number; year: number };
  onSelect: (day: number, year: number, month: number) => void;
}) {
  const cells = buildMonthGrid(year, month);
  const today = new Date();
  const isPastMonth = year === today.getFullYear() && month < today.getMonth();

  return (
    <div>
      <div className="calendar__month-title">
        {MONTH_NAMES[month]} {year}
      </div>
      <div className="calendar__grid">
        {WEEKDAYS.map((w, i) => (
          <div className="calendar__weekday" key={`${w}-${i}`}>
            {w}
          </div>
        ))}
        {cells.map((day, i) => {
          if (day === null) {
            return <span className="calendar__day calendar__day--empty" key={i} />;
          }
          const isSelected =
            selected.month === month &&
            selected.year === year &&
            (day === selected.checkIn || day === selected.checkOut);
          const isInRange =
            selected.month === month &&
            selected.year === year &&
            selected.checkIn !== null &&
            selected.checkOut !== null &&
            day > selected.checkIn &&
            day < selected.checkOut;

          return (
            <button
              key={i}
              type="button"
              disabled={isPastMonth}
              className={
                "calendar__day" +
                (isSelected ? " calendar__day--selected" : "") +
                (isInRange ? " calendar__day--selected" : "")
              }
              style={isInRange ? { background: "var(--bg-subtle)", color: "var(--text-primary)" } : undefined}
              aria-pressed={isSelected}
              aria-label={`${MONTH_NAMES[month]} ${day}, ${year}`}
              onClick={() => onSelect(day, year, month)}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Calendar() {
  const [viewYear, setViewYear] = useState(2026);
  const [viewMonth, setViewMonth] = useState(9); // October (0-indexed)
  const [selection, setSelection] = useState({
    checkIn: 18 as number | null,
    checkOut: 23 as number | null,
    month: 9,
    year: 2026,
  });

  const handleSelect = (day: number, year: number, month: number) => {
    if (
      selection.checkIn === null ||
      (selection.checkOut !== null) ||
      year !== selection.year ||
      month !== selection.month
    ) {
      setSelection({ checkIn: day, checkOut: null, month, year });
    } else if (day > selection.checkIn) {
      setSelection((s) => ({ ...s, checkOut: day }));
    } else {
      setSelection({ checkIn: day, checkOut: null, month, year });
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  return (
    <div className="calendar">
      <div className="calendar__title">
        {selection.checkOut ? 5 : "—"} nights in Candolim
      </div>
      <div className="calendar__subtitle">18 Oct 2026 - 23 Oct 2026</div>

      <div className="calendar__header">
        <button className="calendar__nav-btn" type="button" onClick={prevMonth} aria-label="Previous month">
          <ChevronLeft size={16} />
        </button>
        <button className="calendar__nav-btn" type="button" onClick={nextMonth} aria-label="Next month">
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="calendar__months">
        <MonthGrid year={viewYear} month={viewMonth} selected={selection} onSelect={handleSelect} />
        <MonthGrid
          year={viewMonth === 11 ? viewYear + 1 : viewYear}
          month={viewMonth === 11 ? 0 : viewMonth + 1}
          selected={selection}
          onSelect={handleSelect}
        />
      </div>

      <div className="calendar__footer">
        <button
          className="calendar__clear"
          type="button"
          onClick={() => setSelection({ checkIn: 18, checkOut: 23, month: 9, year: 2026 })}
        >
          Clear dates
        </button>
      </div>
    </div>
  );
}
