link = "http://mariajalmeida.com/2.semester/halcyon_properties/wp-json/wp/v2/property?_embed";

window.addEventListener("DOMContentLoaded", getData);

function getData() {
    fetch(link)
        .then(res => res.json())
        .then(handleData);
}

function handleData(data) {
    const myData = data;
    console.log("myData - console");
    console.log(myData);
    myData.forEach(showData);
}

function showData(singleRowData) {
    console.log("singleRowData - console");
    console.log(singleRowData);

    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);

    const h2 = clone.querySelector("h2");
    h2.textContent = singleRowData.title.rendered;
    const bed = clone.querySelector(".bedrooms span");
    bed.textContent = singleRowData.bedrooms;
    const bath = clone.querySelector(".bathrooms span");
    bath.textContent = singleRowData.bathrooms;
    const sq_feet = clone.querySelector(".sq_feet span");
    sq_feet.textContent = singleRowData.sq_f;

    const img_url = singleRowData._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
    clone.querySelector("img").src = img_url;


    document.querySelector("main").appendChild(clone);
}
