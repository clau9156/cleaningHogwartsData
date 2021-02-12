"use strict";

init();

function init() {
    fetch("https://petlatkea.dk/2020/hogwarts/students.json")
    .then(r => r.json())
    .then (dataRecieved);
}

// fullName gender house
function dataRecieved(data) {
    console.log(data);

}

// clean up 
function cleanUpData() {
    // remove first the space
    // student
    const firstSpace = student.indexOf(" ");
    const lastSpace = student.lastIndexOf(" ");
    const slash = student.includes(" \")

    const firstName = student.fullname.substring(0,firstSpace);
    const middleName = student.fullname.substring(firstSpace, lastSpace);
    const lastName = student.fullname.substring(lastSpace);
    // nickname has / 
    const nickName = student.fullname;
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);


    // remove space infront
    // first character big
    // rest small 
    // nickname ?? where

}

// function cleanUpFullName() {}

// function cleanUpHouse() {}
