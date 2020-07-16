var text = "My name       is MD. Asaduzzman Santo. I am a Student.";
var count = 0;
for(var i = 0; i < text.length; i++){
    var char = text[i];
    if(char == " " && text[i - 1] !=" " ){
        count++;
    }
}
count++;
console.log(count);