const query =
  "https://fhm6z54x.api.sanity.io/v2025-12-04/data/query/production?query=%7B%0A++%22weekdayRates%22%3A+*%5B_type+%3D%3D+%22weekdayRates%22%5D%7B...%2C%22_id%22%3Anull%2C%22_createdAt%22%3A+null%2C+%22_originalId%22%3A+null%2C+%22_system%22%3A+null%2C+%22_updatedAt%22%3A+null%2C+%22_rev%22%3A+null%7D%2C%0A++%22weekendRates%22%3A+*%5B_type+%3D%3D+%22weekendRates%22%5D%7B...%2C%22_id%22%3Anull%2C%22_createdAt%22%3A+null%2C+%22_originalId%22%3A+null%2C+%22_system%22%3A+null%2C+%22_updatedAt%22%3A+null%2C+%22_rev%22%3A+null%7D%2C%0A++%22rates%22%3A+*%5B_type+%3D%3D+%22soloRiderRates%22+%7C%7C+_type+%3D%3D+%22drivingRangeRates%22+%7C%7C+_type+%3D%3D+%22punchCardsRates%22%5D%7B...%2C%22_id%22%3Anull%2C%22_createdAt%22%3A+null%2C+%22_originalId%22%3A+null%2C+%22_system%22%3A+null%2C+%22_updatedAt%22%3A+null%2C+%22_rev%22%3A+null%7D%2C%0A%7D&perspective=published";

document.addEventListener("DOMContentLoaded", function () {
  //~ fetch data
  fetchData(query).then((data) => {
    const details = data;
    console.log(JSON.stringify(details, null, 2));

    // unite punch card, solo rider, and driving range rates into one object
    const rates = {
      ...details?.rates[0],
      ...details?.rates[1],
      ...details?.rates[2],
    };

    // grab your weekend rates
    const weekend = details?.weekendRates[0];
    console.log(JSON.stringify(weekend, null, 2));
    // grab your weekend rates
    const weekday = details?.weekdayRates[0];

    // populate DOM using dataInjector() in fetchData.js
    dataInjector(rates, "sanity");
    dataInjector(weekend, "sanity-weekends");
    dataInjector(weekday, "sanity-weekdays");
  });
});
