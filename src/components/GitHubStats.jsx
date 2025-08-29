import { useState, useEffect, useRef } from "react";

export default function GithubStats() {
  const token = import.meta.env.VITE_GITHUB_TOKEN; //token located in .env
  const [calendarData, setCalendarData] = useState([]);
  const gridRef = useRef(null); // ← Ref for auto-scrolling

  // const contributionColors = [ // this is for custom github color
  //   "#161b22", // slate-900 (0 contributions)
  //   "#0e4429", // dark green
  //   "#006d32", // green
  //   "#26a641", // emerald
  //   "#39d353", // bright green
  // ];

  // const getDayColor = (count) => {
  //   if (count === 0) return contributionColors[0];
  //   if (count < 5) return contributionColors[1];
  //   if (count < 10) return contributionColors[2];
  //   if (count < 15) return contributionColors[3];
  //   return contributionColors[4];
  // };

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
  }, [token]);

  const getMonthLabels = () => {
    if (!calendarData.months || !calendarData.weeks) return [];

    const labels = new Array(calendarData.weeks.length).fill("");

    calendarData.months.forEach((month) => {
      const monthStartDate = new Date(month.firstDay);

      const weekIndex = calendarData.weeks.findIndex((week) =>
        week.contributionDays.some(
          (day) =>
            new Date(day.date).toDateString() === monthStartDate.toDateString()
        )
      );

      if (weekIndex !== -1) {
        labels[weekIndex] = month.name;
      }
    });

    return labels;
  };

  const monthLabels = getMonthLabels();

  return (
    <div
      className="overflow-x-auto font-mono text-sm bg-[#07061B] p-4 sm:p-5 lg:py-10 rounded-2xl sm:rounded-3xl md:rounded-4xl mt-6 2xl:mt-8 md:max-w-[834px] mx-auto"
      ref={gridRef}
    >
      {/* Month labels */}
      <div className="flex space-x-[2.2px] ml-10 mb-1.5 w-max">
        {monthLabels.map((label, i) => (
          <div
            key={i}
            className="text-[10px] w-[12px] text-stone-100 montserrat-regular"
          >
            {label}
          </div>
        ))}
      </div>

      <div className="flex w-max">
        {/* Weekday Labels */}
        <div className="flex flex-col justify-between text-[10px] text-stone-100 h-[74px] mr-2 mt-3.5 montserrat-regular">
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
                  className="w-[11px] h-[11px] rounded-xs"
                  style={{
                    backgroundColor: day.color || "#161b22",
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
