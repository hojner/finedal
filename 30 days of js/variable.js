const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
//var2 = challenge.replace("JavaScript", "Python")
let sentence2 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'


let var2 = sentence.replace(/[%#&$@/;!?,.]/gi, "")
var3 = var2.split(" ")

words = {}
var3.forEach(element => {
    words[element] = (words[element] || 0) + 1
});



console.log(words)