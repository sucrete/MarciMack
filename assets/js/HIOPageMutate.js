const HIOQuery =
  "https://fhm6z54x.api.sanity.io/v2025-08-01/data/query/production?query=*%5B_type+%3D%3D+%27holesInOne%27%5D&perspective=published";

document.addEventListener("DOMContentLoaded", function () {
  //~ fetch data
  fetchData(HIOQuery).then((data) => {
    const HsIO = data;
    console.log(JSON.stringify(HsIO, null, 2));
    console.log(`%c${moment(HsIO[0].dateOfHIO).year()}`, "color: yellow");

    //~ with 2 steps, convert an array like this:
    // const myArray = [
    //   { golfer: "Randy", year: 2025, hole: 17 },
    //   { golfer: "Jenny", year: 2022, hole: 7 },
    //   { golfer: "Tooter", year: 2025, hole: 8 },
    // ];
    //~ into something like this:
    // const newArray = [
    //  {
    //    "year": "2025",
    //    "golfers": [
    //      { golfer: "Randy", year: 2025, hole: 17},
    //      { golfer: "Tooter", year: 2025, hole: 8}
    //    ]
    //  },
    //  {
    //    "year": "2022",
    //     "golfers": [
    //       { golfer: "Jenny", year: 2022, hole: 7}
    //     ]
    //  }
    // ]

    const organizedMap = HsIO.reduce((acc, curr) => {
      const { dateOfHIO, golfer, hole } = curr;
      const year = moment(dateOfHIO).year();

      if (!acc[year]) {
        acc[year] = [];
      }

      acc[year].push({ golfer, hole, date: new Date(dateOfHIO) });
      return acc;
    }, {});

    console.log(
      `%c${JSON.stringify(Object.entries(organizedMap), null, 2)}`,
      "color: yellow"
    );
    console.log(Object.keys(organizedMap)[0]);
    console.log("--------------------------------");
    const organizedGolfers = Object.entries(organizedMap).map(
      ([year, golfers]) => ({
        year,
        golfers: golfers.sort((a, b) => new Date(b.date) - new Date(a.date)),
      })
    );

    const sortedGolfers = organizedGolfers.sort((a, b) => b.year - a.year);

    console.log(
      `%c${JSON.stringify(sortedGolfers, null, 2)}`,
      "color: lawngreen"
    );

    //~ create your html string
    var HIOHTML = "";
    sortedGolfers.forEach((year) => {
      HIOHTML += `
      <div class="HIO-year">
        <h3>${year.year}</h3>
          <div class="hr-group">
            <div class="image-container">
              <img
                class="hole-in-one-icon"
                src="assets/images/icons/hole-n-1.svg"
                alt=""
              />
            </div>

            <hr />
          </div>
          ${year.golfers
            .map(
              (golfer) =>
                `<p>${golfer.golfer}, ${moment(golfer.date).format(
                  "MMMM Do"
                )}, Hole ${golfer.hole}</p>`
            )
            .join("")}
      </div>
    `;
    });

    //~ find dom objects to mutate
    const HIOParent = document.getElementsByClassName("HIO-parent")[0];
    HIOParent.innerHTML = HIOHTML;
  });
});
