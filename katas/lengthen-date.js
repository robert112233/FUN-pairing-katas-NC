/*
  The function lengthenDate should take a date in the format '21.03.2017' and return a string in the format 'Tuesday 9th February 2017'
*/

function lengthenDate(dateStr) {
  letWithSuffix = "";
  const [day, month, year] = dateStr.split(".");

  const constructDate = new Date(Date.UTC(year, month - 1, day));
  console.log(constructDate);
  const justDay = {
    day: "numeric",
  };
  const everythingElse = {
    weekday: "long",
    month: "long",
  };
  const date = constructDate.toLocaleDateString("en-GB", justDay);
  if (date > 9 && date < 21) {
    withSuffix = date + "th";
  } else if (date.endsWith("1")) {
    withSuffix = date + "st";
  } else if (date.endsWith("2")) {
    withSuffix = date + "nd";
  } else if (date.endsWith("3")) {
    withSuffix = date + "rd";
  } else withSuffix = date + "4th";

  const everythingExceptDate = constructDate.toLocaleDateString(
    "en-GB",
    everythingElse
  );

  const [longMonth, longDay] = everythingExceptDate.split(" ");
  return `${longDay} ${withSuffix} ${longMonth} ${year}`;
}

module.exports = lengthenDate;

// date.toLocaleDateString("en-GB");
