var diamond = [
    name= "diamond",
    value = ["0"],
];
var ruby = [
    name="ruby",
    value= ["0"]
];
var opal = [
    name="opal",
    value = ["0"]
];
var emerald = [
    name="emerald",
    value = ["0"]
];
var winningValue = 0
var userTotal= 0




$("#Start").on("click",startGame())


function startGame(){
diamond.value = Math.floor(Math.random() * 3);
ruby.value = Math.floor(Math.random()*3);
opal.value= Math.floor(Math.random()*3);
emerald.value = Math.floor(Math.random()*3);
winningValue = Math.floor(Math.random()*5);


console.log("Diamond:", diamond.value | "Ruby:", ruby.value |"Opal", opal.value | "Emerald:", emerald.value | winningValue)
if (diamond.value===0){
    diamond.value=75
}else if (diamond.value === 1){
    diamond.value=80
}else if (diamond.value===2)
    diamond.value=100

console.log("Diamond:", diamond.value)


if (ruby.value===0){
    ruby.value= 50
}else if (ruby.value === 1){
    ruby.value= 60
}else if (ruby.value===2)
    ruby.value=75
console.log("Ruby:", ruby.value)


if (opal.value===0){
    opal.value= 15
}else if (opal.value === 1){
    opal.value= 25
}else if (opal.value===2)
    opal.value=50
console.log("Opal:", opal.value)


if (emerald.value===0){
    emerald.value= 10
}else if (emerald.value === 1){
    emerald.value= 15
}else if (emerald.value===2)
    emerald.value=25
console.log("Emerald:", emerald.value)

if (winningValue===0){
    winningValue= 300
}else if (winningValue === 1){
    winningValue= 350
}else if (winningValue===2){
    winningValue=400
}else if (winningValue===3){
    winningValue=450
}else if (winningValue===4)
    winningValue=500


    $("#diamond").on("click",diamond.value+userTotal)

    $("#ruby").on("click",ruby.value+userTotal)

    $("#opal").on("click",opal.value+userTotal)

    $("#emerald").on("click",emerald.value+userTotal)


    

winCheck()
console.log("Winning:", winningValue)
// $("#Winning-Number").text("Winning Number:"+ winningValue)
// $("#User-Number").text("Your Total:" + userTotal)
}

function winCheck(){
    $("#Winning-Number").text("Winning Number:"+ winningValue)
    $("#User-Number").text("Your Total:" + userTotal)
    if(userTotal === winningValue){
        alert("YOU WIN!")
    }}
