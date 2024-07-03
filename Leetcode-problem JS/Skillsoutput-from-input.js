/*
input = [
{
name:"Nithesh",
tech:["HTML","CSS","JAVA","JS"]
},
{
name:"Hari",
tech:["NodeJS","CSS","React","JS"]
},
{
name:"Sathish",
tech:["Angular","CSS","React","HTML"]
}
]

for this input is need the output as below

output = {
"HTML":["Nithesh","Sathish"],
"CSS":["Sivakumar","Nithesh","Hari","Sathish"],
"JS":[.,"Nithesh","Hari".],
"ReactJS":["Hari","Sathish"],
"NodeJs":["Hari"]
}*/


const input = [
    {
        name: "Nithesh",
        tech: ["HTML", "CSS", "JAVA", "JS"]
    },
    {
        name: "Hari",
        tech: ["NodeJS", "CSS", "React", "JS"]
    },
    {
        name: "Sathish",
        tech: ["Angular", "CSS", "React", "HTML"]
    }
];

function transformInput(input) {
    const output = {};

    input.forEach(person => {
        person.tech.forEach(tech => {
            if (!output[tech]) {
                output[tech] = [];
            }
            output[tech].push(person.name);
        });
    });

    return output;
}

const output = transformInput(input);
console.log(output);




