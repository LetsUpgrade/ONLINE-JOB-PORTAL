function search(){
    let filter=document.getElementById("inputUser").value.toUpperCase();
    let table=document.getElementById("Table-1");
    let tr=table.getElementsByTagName('tr');
    var l=0;
    let ntable=document.getElementById("Noresult");
    for(var i=1;i<tr.length;i++){
        let td=tr[i].getElementsByTagName('td')[0];
        if(td){
            let textvalue = td.textContent||td.innerHTML;
            if(textvalue.toUpperCase().indexOf(filter)>-1){
                tr[i].style.display="";
            }else{
                tr[i].style.display="none";
                l++;
            }
        }

    }
    if((tr.length-l-1)==0){
        ntable.style.display="block";
        table.style.display="none"
    }else{
        ntable.style.display="none";
        table.style.display="";
    } 
}
function cardsearch(){
    let cardfilter=document.getElementById("inputcard").value.toUpperCase();
    let mobile=document.getElementById("mobileview");
    let cards=mobile.getElementsByClassName("card");
    var c=0;
    let nocard=document.getElementById("nocard");
    let row = document.getElementById("row");
    for(var j=0;j<cards.length;j++){
        let head=cards[j].querySelector('h2')||cards[j].querySelector('h2');
        if(head){
            let cardtext = head.textContent||head.innerHTML;
            if(cardtext.toUpperCase().indexOf(cardfilter)>-1){
                cards[j].style.display="";
            }else{
                cards[j].style.display="none";
                c++;
            }
        }
    }
    if((cards.length-c)==0){
        nocard.style.display="block";
        row.style.display="none"
    }else{
        nocard.style.display="none";
        row.style.display="block";
    }
}