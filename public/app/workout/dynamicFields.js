/*function addFields(){
    var number = document.getElementById("sets").value;
    
    var rep = document.getElementById("reps");
    
    while (rep.hasChildNodes()) {
                rep.removeChild(rep.lastChild);
            }
    for(i=0;i<number;i++){
        
        var input = document.createElement("input");
        
        input.setAttribute("name","Reps");
        input.setAttribute("ng-model", "Reps");
        input.setAttribute("class", "form-control");
        input.setAttribute("min", 1);
        input.setAttribute("type","Number");
        input.required = true;
        rep.appendChild(input);
        
        rep.appendChild(document.createElement("br"));
        
    }
}*/