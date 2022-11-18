const collection = document.getElementsByTagName("img");
for (let i = 0; i < collection.length; i++) {
    if(i%2==0)
    {
        color="red";
    }
    else
    {
        color="green";
    }
  collection[i].style.border=" 5px solid "+color;
}
