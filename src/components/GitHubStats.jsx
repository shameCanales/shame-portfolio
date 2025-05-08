import { useState, useEffect, useRef } from "react";

export default function GithubStats() {
  const token = import.meta.env.VITE_GITHUB_TOKEN; //token located in .env
  const [calendarData, setCalendarData] = useState([]);
  const gridRef = useRef(null); // ← Ref for auto-scrolling

  useEffect(() => {
    const fetchCalendar = async () => {
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query {
              user(login: "shameCanales") {
                contributionsCollection {
                  contributionCalendar {
                    months {
                      name
                      firstDay
                    }
                    weeks {
                      contributionDays {
                        date
                        contributionCount
                        color
                      }
                    }
                  }
                }
              }
            }
          `,
        }),
      });

      const json = await response.json();
      const calendar =
        json.data.user.contributionsCollection.contributionCalendar;

      setCalendarData({
        weeks: calendar.weeks,
        months: calendar.months,
      });

      // Auto-scroll to latest
      setTimeout(() => {
        if (gridRef.current) {
          gridRef.current.scrollLeft = gridRef.current.scrollWidth;
        }
      }, 0);
    };

    fetchCalendar();
  }, []);

  const getMonthLabels = () => {
    const labels = new Array(53).fill("");
    calendarData.months?.forEach((month) => {
      const weekIndex = Math.floor(month.firstDay / 7);
      labels[weekIndex] = month.name;
    });
    return labels;
  };

  const monthLabels = getMonthLabels();

  return (
    <div
      className="overflow-x-auto font-mono text-sm bg-stone-900 p-4 rounded-lg mt-6"
      ref={gridRef}
    >
      {/* Month labels */}
      <div className="flex space-x-[2px] ml-10 mb-1 w-max">
        {monthLabels.map((label, i) => (
          <div key={i} className="text-[10px] w-[12px] text-gray-600">
            {label}
          </div>
        ))}
      </div>

      <div className="flex w-max">
        {/* Weekday Labels */}
        <div className="flex flex-col justify-between text-[10px] text-gray-500 h-[88px] mr-2">
          <div>Mon</div>
          <div>Wed</div>
          <div>Fri</div>
        </div>

        {/* Grid */}
        <div className="flex space-x-[3.3px] ">
          {calendarData.weeks?.map((week, weekIdx) => (
            <div key={weekIdx} className="flex flex-col space-y-[4px]">
              {week.contributionDays.map((day, dayIdx) => (
                <div
                  key={dayIdx}
                  title={`${day.date}: ${day.contributionCount} contributions`}
                  className="w-[11px] h-[11px] rounded-sm"
                  style={{
                    backgroundColor: day.color || "#ebedf0",
                  }}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
