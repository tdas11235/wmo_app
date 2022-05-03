function feed()
{
    let nm= document.getElementById("item2").value;
    if (nm==="")
    {
        alert("empty");
    } 
    else
    {
        const parent= document.getElementById("tasks");
        const child= document.createElement("li");
        child.textContent= nm;
        const bt= document.createElement("a");
        bt.textContent="X";
        bt.href="javascript:void(0)";
        //link takes no-where ... returns to same page. javascript: "stay on same page" void() "return undefined"
        //so "do nothing"
        bt.className= "remove";
        child.appendChild(bt);
        parent.appendChild(child);
    }
    document.getElementById("item2").value="";
}
let cancel= document.querySelector("ul");
cancel.addEventListener("click", function(event)
{
    const parent= document.getElementById("tasks");
    let child= event.target.parentNode;                //returns the element that triggered the event
    parent.removeChild(child);
});