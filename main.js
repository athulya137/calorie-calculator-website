# calorie-calculator
function myfunction(){
    var a = document.forms["form_data"]["Brakefast"].value;
    var b = document.forms["form_data"]["Lunch"].value;
    var c = document.forms["form_data"]["Dinner"].value;
    var d = document.forms["form_data"]["Drinks"].value;
    var e= document.forms["form_data"]["Snacks"].value;
    var f= document.forms["form_data"]["Fruits"].value;

    a=parseInt(a);
    b=parseInt(b);
    c=parseInt(c);
    d=parseInt(d);
    e=parseInt(e);
    f=parseInt(f);

    var total=a+b+c+d+e+f;
    document.getElementById("out").textContent ="TOTAL CALORIES="+total;
    console.log(total)

}
