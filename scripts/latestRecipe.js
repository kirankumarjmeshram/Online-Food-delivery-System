let parent = document.getElementById("container");

async function getData(){

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
    let data = await res.json();
    console.log("data: ",data)

}