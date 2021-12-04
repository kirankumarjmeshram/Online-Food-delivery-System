let parent = document.getElementById("container");

async function getData(){

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
    let data = await res.json();
    console.log("data: ",data)

}
getData();

    function appendDiv(data) {
      data.forEach(({idMeal,strMeal,strMealThumb})=>{

        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=strMealThumb

        let h4=document.createElement("h4");
        h4.innerText=strMeal;

        let p=document.createElement("p");
        p.innerText="Id : "+idMeal;


        div.append(img,h4,p);

        parent.append(div);



      })
    }