const API_SEARCH_MECHANICS =
  "http://localhost:7777/api/users/searchMechanicByLocation";

const searchMechanicInput = document.querySelector(".search-location-input");
const tableBody = document.querySelector(".search-mechanics .table-body");

const updateDataInUI = (comingData) => {
  console.log(comingData);
  const htmlData = comingData
    .map((eachItem) => {
      return `<tr>
        <td>${eachItem.name}</td>
        <td>${eachItem.email}</td>
        <td>${eachItem.mobile || "NA"}</td>
        <td>${eachItem.location}</td>
    </tr>`;
    })
    .join("");
  tableBody.innerHTML = htmlData;
};

const fetchMechanics = async (e) => {
  e?.preventDefault();
  const searchParam = e?.target?.value || "";

  const payload = {
    currentLocation: searchParam,
  };

  const response = await fetch(API_SEARCH_MECHANICS, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (response.status === 400) {
    alert(data.message);
    return;
  }
  if (response.status === 200) {
    updateDataInUI(data?.allMechanics);
  }
  console.log(data);
};
fetchMechanics();
searchMechanicInput.addEventListener("input", fetchMechanics);
