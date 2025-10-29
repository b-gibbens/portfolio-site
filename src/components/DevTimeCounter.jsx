import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

export default function DevTimeCounter() {
  const startDate = new Date("2020-05-26");
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();
      // Adjust for negative days/months
      if (days < 0) {
        months -= 1;
        const prevMonth = new Date(
          now.getFullYear(),
          now.getMonth(),
          0
        ).getDate();
        days += prevMonth;
      }
      if (months < 0) {
        years -= 1;
        months += 12;
      }

      setTimeElapsed({ years, months, days });
    };
    updateCounter();
    const interval = setInterval(updateCounter, 1000 * 60 * 60 * 24);
    return () => clearInterval(interval);
  }, []);

  return (
    <Typography component="span" variant="body2" sx={{ fontWeight: "bold", color: "#a18d0dff" }}>
        {timeElapsed.years} years, {timeElapsed.months} {timeElapsed.months == 1 ? "month" : "months" }, and {timeElapsed.days} {timeElapsed.days == 1 ? "day" : "days" }
    </Typography>
  )
}
