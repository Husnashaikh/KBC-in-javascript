var question_list= [
    "How many continents are there?",           
    "What is the capital of India?",
    "NG mei kaun se course padhaya jaata hai?" ,   
    "which state of india has no shortest coastline?" ,  
    " which of these viruses taken it is name from a place  in malaysia?"
]
var options_list = [
    ["Four", "Nine", "Seven", "Eight"],
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"],
    ["maharastra","goa","odisa","west bangal"],
    ["nipah","ebola","influenia","HIV"]
]
var solution_list = [3, 4, 1, 2,2]
var answer=[["3.seven","4.eight"],["3.chennai","4.delhi"],["1.software enginearing","2. councealing"],["2. goa","3. odisa"],["2.ebola","4.HIV"]]
var i=0
var count=0
var p=0
console.log(".....welcome!To kaun banega cadepati....")
const d=require("readline-sync")
while (i<question_list.length){
    console.log("your question is...")
    console.log(question_list[i])
    console.log("your options are....")
    var j=0
    var z=i
    while (j<options_list[i].length){
        s=(options_list[z][j])
        console.log(j+1,s)
        j++
        }
        console.log('Do you want 50-50 lifeline....')
        const c=d.question('plss enter YES/NO')
            if  (c=="yes"){
                console.log("accept")
                if (count==0){
                    console.log(answer[z])
                    const r=d.questionInt("enter your answer")
                    if (r == solution_list[i]){
                        console.log("you are absolutely right..")
                         p=p+10000
                        console.log("you have won RS/-",p,)}
                    else {
                        console.log("oops your answer is Incorrect")
                        console.log("you have won RS/-",p)
                        break
                    }
                    count++
            }else{
                console.log("sorry ! u have already used your lifeline")
                 const r2=d.questionInt("enter answer")
                if (r2== solution_list[i]){
                    console.log("you are absolutely right..")
                    p=p+10000
                    console.log("you have won RS/-",p)}
                else{
                    console.log("oops your answer is Incorrect")
                    console.log("you have won RS/-",p)}
                }
            }
        else {
             const r3= d.questionInt("enter your answer")
            if (r3==solution_list[i]){
                console.log("you are absolutely right..")
                p=p+10000
                console.log("you have won RS/-",p)}
            else{
                console.log("oops your answer is incorrect")
                console.log("you have won RS/-",p)
            break
    }
    }
    i++
}
console.log("congratulations !")
console.log("your total amount is RS/-",p)
console.log("Thankyou! for participating....")



// result = Number('324e-1')  
// console.log(result); 