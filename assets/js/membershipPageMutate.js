const query =
  "https://fhm6z54x.api.sanity.io/v2025-12-04/data/query/production?query=%7B%0A+%0A++%22annualPasses%22%3A+*%5B_type+%3D%3D+%22annualPasses%22%5D%7B...%2C%22_id%22%3Anull%2C%22_createdAt%22%3A+null%2C+%22_originalId%22%3A+null%2C+%22_system%22%3A+null%2C+%22_updatedAt%22%3A+null%2C+%22_rev%22%3A+null%7D%2C%0A++%22porterCommunityResidents%22%3A+*%5B_type+%3D%3D+%22porterCommunityResidents%22%5D%7B...%2C%22_id%22%3Anull%2C%22_createdAt%22%3A+null%2C+%22_originalId%22%3A+null%2C+%22_system%22%3A+null%2C+%22_updatedAt%22%3A+null%2C+%22_rev%22%3A+null%7D%2C%0A%7D&perspective=drafts";

const pdfQuery =
  "https://fhm6z54x.api.sanity.io/v2025-12-04/data/query/production?query=*%5B_type+%3D%3D+%22passHolderDetailsPdf%22%5D%5B0%5D%7Bfile%7Basset-%3E%7Burl%7D%7D%7D&perspective=published";

document.addEventListener("DOMContentLoaded", function () {
  //~ fetch rates data
  fetchData(query).then((data) => {
    const details = data;
    console.log(JSON.stringify(details, null, 2));

    const annual = details?.annualPasses[0];
    const porter = details?.porterCommunityResidents[0];

    console.log(JSON.stringify(annual, null, 2));
    console.log(JSON.stringify(porter, null, 2));
    // populate DOM using dataInjector() in fetchData.js
    dataInjector(annual, "sanity-annual");
    dataInjector(porter, "sanity-porter");
  });

  //~ fetch pass holder pdf
  fetchData(pdfQuery).then((data) => {
    const url = data?.file?.asset?.url;
    if (url) {
      document.getElementById("pass-holder-pdf-link").href = url;
    }
  });
});
