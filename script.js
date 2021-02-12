"use strict";

window.addEventListener("DOMContentLoaded", init);

const allStudents = [];
const Student = {
    firstName: "",
    lastName: "",
    middleName: "unknown",
    nickName: "unknown",
    gender: "",
    house: "",
    image: "unknown"
};

function init() {
    console.log("init");
    loadJSON();
}

function loadJSON() {
    console.log("loadJSON");
    fetch("https://petlatkea.dk/2020/hogwarts/students.json")
    .then(r => r.json())
    .then (jsonData => {
        // loaded --> prepare objects
        prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
    console.log("prepareObjects");
    jsonData.forEach(jsonObject => {
        // new object created with cleaned data --> will be in allAnimals
        const student = Object.create(Student);
        // cleaning data
        const firstSpace = fullname.indexOf(" ");
        const lastSpace = fullname.lastIndexOf(" ");
        // spliting every word
        // .trim()
        // first letter
        // .substring(0,1).toUpperCase();
        // rest
        // .substring(1).toLowerCase();
        // first letter + rest
        // .textContent = first letter + rest;
        // caps after - 
        // SOMETHING

        // firstName

        // lastName

        // middleName

        // nickName

        // gender

        // house

        // new object 
        const texts = jsonObject.fullname.split(" ");
        student.firstName = texts[0];
        student.lastName = texts[];
        student.middleName = texts[];
        student.nickName = texts[]
        student.gender = jsonObject.gender;
        student.house = jsonObject.house;
        // student.image = ;

        allStudents.unshift(student);
    });
    displayList();
}

function displayList() {
    console.log("displayList");
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";
    // build a new list
    allStudents.forEach(displayStudent);
}

function displayStudent(student) {
    console.log("displayStudent");
    // create clone / aka cloning my template in html
    const clone = document.querySelector("template#student").content.cloneNode(true);
    // set clone data
    clone.querySelector("[data-field=firstName]").textContent = student.firstName;
    clone.querySelector("[data-field=lastName]").textContent = student.lastName;
    clone.querySelector("[data-field=middleName]").textContent = student.middleName;
    clone.querySelector("[data-field=nickName]").textContent = student.nickName;
    clone.querySelector("[data-field=gender]").textContent = student.gender;
    clone.querySelector("[data-field=house]").textContent = student.house;
    // clone.querySelector("[data-field=image]").textContent = student.image;
    // append clone to list
    document.querySelector("#list tbody").appendChild(clone);
}








// fullName gender house
// function dataRecieved(data) {
//     console.log(data);

// }

// clean up 
// function cleanUpData() {
//     // remove first the space
//     // student
//     const firstSpace = student.indexOf(" ");
//     const lastSpace = student.lastIndexOf(" ");
//     const slash = student.includes(" \")

//     const firstName = student.fullname.substring(0,firstSpace);
//     const middleName = student.fullname.substring(firstSpace, lastSpace);
//     const lastName = student.fullname.substring(lastSpace);
//     // nickname has / 
//     const nickName = student.fullname;
//     console.log(firstName);
//     console.log(middleName);
//     console.log(lastName);


//     // remove space infront
//     // first character big
//     // rest small 
//     // nickname ?? where

// }

// function cleanUpFullName() {}

// function cleanUpHouse() {}