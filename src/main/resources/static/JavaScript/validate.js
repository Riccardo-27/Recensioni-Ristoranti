
function verificaRistorante()
{
   var nomeRistTxt= document.getElementById("nome_rist");
   var Descr_RistTxt = document.getElementById("desc_rist");
   var ub_Rist = document.getElementById("Ub_ristorante");

   var nomeRist = nomeRistTxt.value;
   var descRist = Descr_RistTxt.value;
   var ubRist = ub_Rist.value;

   var ok = validateRistorante(nomeRist,descRist,ubRist);

    if(validateRistorante(nomeRist,descRist,ubRist))
    {
        let newTr = document.createElement("tr");

        let newTdNome = document.createElement("td");
        let newTdDescr = document.createElement("td");
        let newTdUb = document.createElement("td");
        let newTdCheckbox = document.createElement("td")

        let contentNome = document.createTextNode(nomeRist);
        let contentDescr = document.createTextNode(descRist);
        let contentUb = document.createTextNode(ubRist);

        newTr.appendChild(newTdNome);
        newTr.appendChild(newTdDescr);
        newTr.appendChild(newTdUb);
        newTr.appendChild(newTdCheckbox);


        newTdNome.appendChild(contentNome);
        newTdDescr.appendChild(contentDescr);
        newTdUb.appendChild(contentUb);

        newTr.style = "font-weight: bold";

        let tableElement = document.getElementsByTagName("table")[0];
        tableElement.appendChild(newTr);

    }
    else
    {
        alert("Mancano campi");
    }

}


function validateRistorante(nome, descr, ub)
{
    var validateOK = true;
    if (nome == "" || descr == "" || ub == "" || descr.length < 10)
    {
        validateOK = false;
    }

    return validateOK;
}

function  rimuoviRist()
{
    var ristSel = document.querySelectorAll(".ristoranteSel:checked")
    ristSel.forEach(function (elementSelected){
        elementSelected
    });
}
