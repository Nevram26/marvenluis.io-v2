import { useEffect, useState } from "react";
import { links } from "../../content/site";

const ENDPOINT = "https://github-contributions-api.jogruber.de/v4/Nevram26?y=last";

export default function CodingActivity() {
  const [days, setDays] = useState(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    fetch(ENDPOINT, { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error("GitHub activity unavailable");
        return response.json();
      })
      .then(data => {
        if (!Array.isArray(data.contributions) || !data.contributions.length || data.contributions.some(day =>
          !/^\d{4}-\d{2}-\d{2}$/.test(day.date) || !Number.isInteger(day.count) || day.count < 0 ||
          !Number.isInteger(day.level) || day.level < 0 || day.level > 4
        )) throw new Error("Invalid contribution data");
        setDays(data.contributions);
      })
      .catch(error => { if (error.name !== "AbortError") setFailed(true); });
    return () => controller.abort();
  }, []);

  const count = days?.reduce((sum, day) => sum + day.count, 0) ?? 0;
  const offset = days ? new Date(`${days[0].date}T00:00:00Z`).getUTCDay() : 0;
  const columns = days ? Math.ceil((days.length + offset) / 7) : 53;
  return <div className="coding-activity">
    {failed ? <p role="status">Couldn't load the contribution calendar. You can still see my activity on GitHub.</p> : !days ?
      <p role="status">Loading GitHub activity...</p> : <>
        <div className="coding-activity__summary"><strong>{count.toLocaleString()} contributions</strong><span>Past year on GitHub</span></div>
        <div className="coding-activity__scroll" tabIndex={0} role="region" aria-label="GitHub contribution calendar, scroll to explore the year">
          <svg className="coding-calendar" viewBox={`0 0 ${columns * 13} 109`} role="img" aria-label={`${count} GitHub contributions in the past year`}>
            {days.map((day, i) => {
              const x = Math.floor((i + offset) / 7) * 13;
              const y = ((i + offset) % 7) * 13 + 19;
              return <g key={day.date}>
                {day.date.endsWith("-01") && <text x={x} y="10">{new Date(`${day.date}T00:00:00Z`).toLocaleDateString("en", { month: "short", timeZone: "UTC" })}</text>}
                <rect x={x} y={y} width="10" height="10" rx="1" data-level={day.level}><title>{day.date}: {day.count} contributions</title></rect>
              </g>;
            })}
          </svg>
        </div>
        <div className="coding-activity__legend" aria-label="Contribution intensity from less to more"><span>Less</span>{[0,1,2,3,4].map(level => <i key={level} data-level={level} aria-hidden="true"/>)}<span>More</span></div>
      </>}
    <a className="coding-activity__link" href={links.github} target="_blank" rel="noreferrer">View activity on GitHub &rarr;</a>
  </div>;
}
