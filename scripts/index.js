let timeout;
let visible = document.getElementById("container");
async function getRecipe(search_item) {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search_item}`
    );
    let data = await res.json();
    console.log("data:", data.meals);
    appendResultToDiv(data.meals)
  } 

  function debounce(func,delay){
      let input_value =document.getElementById("input_text").value ;

      if(timeout){
          clearTimeout(timeout)
      }if(input_value==""){
          visible.style.visibility ="hidden";
      }else{
          timeout=setTimeout(()=>{
              func(input_value)
          },delay);
      }
  }

  function appendResultToDiv(data){
       
    let list = document.getElementById("recipe_search_list")
    let input_value = document.getElementById("input_text").value;
    list.innerHTML =null;
    visible.style.visibility="visible";
    data.forEach((el)=> {

        let div=document.createElement("div");
        div.onclick=function() {
            appendRecipe(el)
            input_value.innerText="";
            visible.style.visibility="hidden";
            console.log(el)

        }
        let title=el.strMeal;
        div.append(title);
        list.append(div);

    })
}


function appendRecipe(el) {
    let parent=document.getElementById("searchedRecipe")
    parent.innerHTML=null;

    let image=document.createElement("img");
    image.src=el.strMealThumb;

    let title=document.createElement("h2");
    title.innerText=el.strMeal;

    let category=document.createElement("p");
    category.innerText="Category : "+el.strCategory;

    let include=document.createElement("p");
    include.innerText="Ingredients : ";

    let source=document.createElement("p");
    source.innerHTML="Source : "+`<a href=${el.strSource}>Click here</a>`;

    let instruction=document.createElement("p");
    instruction.innerText=el.strInstructions;

    let video=document.createElement("p");
    video.innerHTML="Click Here to watch Youtube Video : "+`<a href=${el.strYoutube}>Click here</a>`;



    let list = document.createElement("ul");

    let ingredient1=document.createElement("li")
    if(!el.strIngredient1=="") {
        ingredient1.innerText=el.strIngredient1;
        list.append(ingredient1);
    }
    let ingredient2=document.createElement("li")
    if(!el.strIngredient2=="") {
        ingredient2.innerText=el.strIngredient2;
        list.append(ingredient2);
    }
    let ingredient3=document.createElement("li")
    if(!el.strIngredient3=="") {
        ingredient3.innerText=el.strIngredient3;
        list.append(ingredient3);
    }
    let ingredient4=document.createElement("li")
    if(!el.strIngredient4=="") {
        ingredient4.innerText=el.strIngredient4;
        list.append(ingredient4);
    }
    let ingredient5=document.createElement("li")
    if(!el.strIngredient5=="") {
        ingredient5.innerText=el.strIngredient5;
        list.append(ingredient5);
    }
    let ingredient6=document.createElement("li")
    if(!el.strIngredient6=="") {
        ingredient6.innerText=el.strIngredient6;
        list.append(ingredient6);
    }
    let ingredient7=document.createElement("li")
    if(!el.strIngredient7=="") {
        ingredient7.innerText=el.strIngredient7;
        list.append(ingredient7);
    }
    let ingredient8=document.createElement("li")
    if(!el.strIngredient8=="") {
        ingredient8.innerText=el.strIngredient8;
        list.append(ingredient8);
    }
    let ingredient9=document.createElement("li")
    if(!el.strIngredient9=="") {
        ingredient9.innerText=el.strIngredient9;
        list.append(ingredient9);
    }
    let ingredient10=document.createElement("li")
    if(!el.strIngredient10=="") {
        ingredient10.innerText=el.strIngredient10;
        list.append(ingredient10);
    }
    let ingredient11=document.createElement("li")
    if(!el.strIngredient11=="") {
        ingredient11.innerText=el.strIngredient11;
        list.append(ingredient11);
    }
    let ingredient12=document.createElement("li")
    if(!el.strIngredient12=="") {
        ingredient12.innerText=el.strIngredient12;
        list.append(ingredient12);
    }
    let ingredient13=document.createElement("li")
    if(!el.strIngredient13=="") {
        ingredient13.innerText=el.strIngredient13;
        list.append(ingredient13);
    }
    let ingredient14=document.createElement("li")
    if(!el.strIngredient14=="") {
        ingredient14.innerText=el.strIngredient14;
        list.append(ingredient14);
    }
    let ingredient15=document.createElement("li")
    if(!el.strIngredient15=="") {
        ingredient15.innerText=el.strIngredient15;
        list.append(ingredient15);
    }
    let ingredient16=document.createElement("li")
    if(!el.strIngredient16=="") {
        ingredient16.innerText=el.strIngredient16;
        list.append(ingredient16);
    }
    let ingredient17=document.createElement("li")
    if(!el.strIngredient17=="") {
        ingredient17.innerText=el.strIngredient17;
        list.append(ingredient17);
    }
    let ingredient18=document.createElement("li")
    if(!el.strIngredient18=="") {
        ingredient18.innerText=el.strIngredient18;
        list.append(ingredient18);
    }
    let ingredient19=document.createElement("li")
    if(!el.strIngredient19=="") {
        ingredient19.innerText=el.strIngredient19;
        list.append(ingredient19);
    }
    let ingredient20=document.createElement("li")
    if(!el.strIngredient20=="") {
        ingredient20.innerText=el.strIngredient20;
        list.append(ingredient20);
    }

    parent.append(image,title,category,include,list,instruction,source,video)


}
 