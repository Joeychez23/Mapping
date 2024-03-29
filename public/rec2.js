const centerBody = document.querySelector('.center-body');
//const purge = document.querySelector('.center-body');



//Initilize map and tiles:
//Create map
const mymap = L.map('issMap').setView([0, 0], 1);
//Copyright
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//Tile URL
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
//Creates tiles and add copyright
const tiles = L.tileLayer(tileURL, {attribution});
//Adds created tiles to map
tiles.addTo(mymap);






getData();
async function getData() {
    //centerTop.removeChild(purge);
    const response = await fetch('/api');
    const val = await response.json();
    console.log(val)
    //removeAllChildNodes(centerBody);
    for (item of val) {

        const marker = L.marker([item.lat,item.lon]).addTo(mymap);





        if (item.value != null) {
            
            let txt =`Weather in ${item.city_name}: ${item.weather}.<br>The temperature is: ${item.temp}° F.
            <br>Lat: ${item.lat}°, 
            Long: ${item.lon}°
            <br>Particulate matter (${item.parameter}): ${item.value}${item.unit}.
            <br>Last read on 
            ${item.lastUpdated}.`
            if (item.name != null) {
                txt += `<br>Updated by: ${item.name}`
            }
            if (item.base64 != null) {
                txt += `<br><img src= ${item.base64} style= "height: 80px; margin-left: 30%;">`
            }
            marker.bindPopup(txt);
        } else {
            let txt =`Weather in ${item.city_name}: ${item.weather}.<br>The temperature is: ${item.temp}° F. \n
            <br>Lat: ${item.lat}°, 
            Long: ${item.lon}°
            <br>No air quality reading available in this area :(`
            if (item.name != null) {
                txt += `<br>Updated by: ${item.name}`
            }
            if (item.base64 != null) {
                txt += `<br><img src= ${item.base64} style= "height: 80px; margin-left: 30%;">`
            }
            marker.bindPopup(txt);

        }





        //const root = document.createElement('div');
        //root.setAttribute("class", "data")

        //const name = document.createElement('div');
        //name.setAttribute("style", "margin-top: 40px");

        //const geo = document.createElement('div');
        //const lati = document.createElement('div');
        //const long = document.createElement('div');

        //const timeDate = document.createElement('div');
        //const date = document.createElement('div');
        //const time = document.createElement('div');


        //Image sizing
        //const image = document.createElement('img');
        //image.setAttribute("style", "height: 180px; margin-bottom: 40px; margin-top: 10px;");

        //const newLine = document.createElement('p');
        //const breakl = document.createElement('br');

        //console.log(item);
        //name.textContent = "Location: "+ item.city_name;

        //lati.textContent = "Latitude: " +item.lat + "°";
        //long.textContent = "Longitude: "+item.lon + "°";
        //geo.append(lati);
        //geo.append(long);

        //console.log(item.timestamp)

        //const dateString = new Date(item.timestamp).toLocaleString();

        //console.log(dateString);
        //dateTime = dateString.split(", ");
        //console.log(timeDate);
        //date.textContent = "Date: " + dateTime[0];
        //time.textContent = "Time: " + dateTime[1];
        //timeDate.append(time);
        //timeDate.append(date);
        //timeDate.setAttribute("style", "margin-bottom: 40px");

        //image location
        //image.src = item.image64;

        //root.append(name, geo, timeDate);  //(name, geo, timeDate, image);
        //console.log(root);
        //centerBody.append(root);
    //console.log(val);
    }
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
//setInterval(removeAllChildNodes(centerTop), 4999);


//Reload Website by calling data request
//setInterval(getData, 1000);