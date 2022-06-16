const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

const searchStates = async (searchText) => {
  const res = await fetch("/data/main1.json");
  const states = await res.json();

  let matches = states.filter((state) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return state.Edgistify.match(regex);
  });

  if (searchText.length == 0) {
    matches = [];
    matchList.innerHTML = "";
  }

  if (searchText != matches) {
    const html = matches
      .map(
        (match) =>
          `<div class="card card-body mb-1">
        <h4>
          No Matched Found.
        </h4>
      </div>
      `
      )
      .join("");

    matchList.innerHTML = html;
  }
  outputHtml(matches);
};

const outputHtml = (matches) => {
  if (matches.length > 0) {
    const html = matches
      .map(
        (match) =>
          `
          <div class="table-responsive-lg">
          <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">SKU</th>
              <th scope="col">Name</th>
              <th scope="col">Sakinaka</th>
              <th scope="col">Bandra</th>
              <th scope="col">Thane</th>
              <th scope="col">LParel</th>
              <th scope="col">Turbhe</th>
              <th scope="col">Kandivali</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">${match.Edgistify}</th>
              <td>${match.Column2}</td>
              <td>${match.Column3}</td>
              <td>${match.Column4}</td>
              <td>${match.Column5}</td>
              <td>${match.Column6}</td>
              <td>${match.Column7}</td>
              <td>${match.Column8}</td>
            </tr>
          </tbody>
        </table>
        </div>
      `
      )
      .join("");

    matchList.innerHTML = html;
  }
};

search.addEventListener("input", () => searchStates(search.value));

//

// const outputHtml = (matches) => {
//   if (matches.length > 0) {
//     const html = matches
//       .map(
//         (match) =>
//           `<div class="card card-body mb-1">
//         <h4>
//           ${match.Edgistify} <br><span class="text-primary">${match.Column2}</span>
//         </h4>
//         <small>
//           Sakinaka: ${match.Column3} / Bandra: ${match.Column4} / Thane: ${match.Column5} /
//           LParel: ${match.Column6} / Turbhe: ${match.Column7} / Kandivali: ${match.Column8}
//         </small>
//       </div>
//       `
//       )
//       .join("");

//     matchList.innerHTML = html;
//   }
// };
