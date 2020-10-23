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
    const bed = clone.querySelector(".bedrooms");
    bed.textContent = singleRowData.bedrooms;
    const bath = clone.querySelector(".bathrooms");
    bath.textContent = singleRowData.bathrooms;

    const img_url = singleRowData._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
    clone.querySelector("img").src = img_url;


    document.querySelector("main").appendChild(clone);
}
