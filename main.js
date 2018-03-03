function displayMycars(){
   cars=["BMW","Volvo","Saab","Ford"];
    alert("我有" + cars[0]);
    for (var i=1;i<cars.length;i++)
    {
    alert("我还有" + cars[i]);
    } 
    alert('羡慕吧!');
}

var clickNum = 0;
function clickButton() {
    clickNum++;
    if(clickNum==1){
        alert('^(*￣(oo)￣)^让你点你就点!');
    }else if(clickNum == 2){
        alert('^(*￣(oo)￣)^是不是有病啊!还点！');
    }else if(clickNum == 3){
        alert('^(*￣(oo)￣)^求你别点了！！！！');
    }else if(clickNum >3){
        alert('好吧^(*￣(oo)￣)^你赢了！');
    }
}

function hateMycars() {
    alert('承认你的嫉妒吧凡人！');
    displayMycars();
}