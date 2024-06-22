function introduction(name){
            return `Hi, my name is ${name}.`}

console.log(introduction("Aki"));

function LogTwoValues(value1,value2){
    console.log(`The two values are ${value1} and ${value2}`);
}


LogTwoValues(12,19);

function introductionWithLanguage(name,language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguage("Aki","Ember.js"));



function introductionWithLanguageOptional(name , language ="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguageOptional("Gracie"));


