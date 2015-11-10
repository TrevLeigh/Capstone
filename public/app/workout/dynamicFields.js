function addFields(){
    var number = document.getElementById("sets").value;
    
    var container = document.getElementById("reps");
    
    while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
    for(i=0;i<number;i++){
        
        var input = document.createElement("input");
        
        input.setAttribute("class", "form-control");
        input.type = "Number";
        input.name = "rep" + i;
        input.required = true;
        container.appendChild(input);
        
        container.appendChild(document.createElement("br"));
        
    }
}