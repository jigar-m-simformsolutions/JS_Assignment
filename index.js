// let Bio = {};
// var i = 0;

// // function showTable(){
// //     var xhttp = new XMLHttpRequest();

// //     xhttp.onreadystatechange = function(){[i]   
// //         if(this.readyState == 4 && this.status == 200){
// //             var response = JSON.parse(xhttp.responseText);
// //             var persons = response.Person;

// //             var temp = "";
// //             // var div = document.createElement('tableDiv');
// //             // var table = document.createElement('table');
// //             // var thead = document.createElement('thead');
// //             // var tbody = document.createElement('tbody');

// //             for(var i=0; i< persons.length; i++){
// //                 temp += '<tr>';
// //                 temp += '<td>'+persons[i].firstName+'</td>';
// //                 temp += '<td>'+persons[i].lastName+'</td>';
// //                 temp += '<td>'+persons[i].age+'</td>';
// //                 temp += '<td>'+persons[i].country+'</td></tr>';
// //             }
// //             document.getElementById('data').innerHTML = temp;
// //             // tbody.appendChild(temp);
// //             // table.appendChild(thead);
// //             // table.appendChild(tbody);
// //             // div.appendChild(table);
// //         }
// //     };

// //     xhttp.open('GET','index.json',true);
// //     xhttp.send();
// // }
// // var xhttp = new XMLHttpRequest();

// // xhttp.onreadystatechange = function(){[i]   
// //     if(this.readyState == 4 && this.status == 200){
// //         var response = JSON.parse(xhttp.responseText);
// //         var persons = response.Person;

// //         var temp = "";

// //         for(var i=0; i< persons.length; i++){
// //             temp += '<tr>';
// //             temp += '<td>'+persons[i].firstName+'</td>';
// //             temp += '<td>'+persons[i].lastName+'</td>';
// //             temp += '<td>'+persons[i].age+'</td>';
// //             temp += '<td>'+persons[i].country+'</td></tr>';
// //         }
// //         document.getElementById('data').innerHTML = temp;
// //     }
// // };

// // xhttp.open('GET','index.json',true);
// // xhttp.send();

// // function f1(){
// //     var a = document.getElementsByTagName('button');
// //     a.addEventListener('click',showTable,true);
// // }

const addData =(ev) =>{
    ev.preventDefault();
    let Data = {
        id: i,
        firstName: document.getElementById('fname').value,
        lastName : document.getElementById('lname').value,
        age: document.getElementById('age').value,
        country: document.getElementById('country').value
    }

    i++;
    const Bio = Object.assign(Data);
    Bio.push(Data);
    console.log(Bio);
    document.forms[0].reset();
    console.log(Bio.length);


    var temp ="";
    for(var j=0; j<= Bio.length; j++){
        temp += '<tr>';
        temp += '<td>'+Bio[j].firstName+'</td>';
        temp += '<td>'+Bio[j].lastName+'</td>';
        temp += '<td>'+Bio[j].age+'</td>';
        temp += '<td>'+Bio[j].country+'</td></tr>';
    }
    // console.log(temp);
    document.getElementById('data').innerHTML = temp;

    let demo = document.querySelector('#demo');
    demo.textContent = '\n' + JSON.stringify(Bio, '\t', 5);


}

// document.addEventListener('DOMContentLoaded', () =>{
//     document.getElementById('btn').addEventListener('click',showTable);
// });

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('btn').addEventListener('click',addData);   
});

// var row =0;
// document.addEventListener('DOMContentLoaded', () =>{
//     document.getElementById('btn').addEventListener('click',showTable);   
// });

// function showTable(){
//     var fname =document.getElementById('fname').value;
//     var lname =document.getElementById('lname').value;
//     var age =document.getElementById('age').value;
//     var country =document.getElementById('country').value;

//     if(!fname || !lname || !age || !country){
//         alert("Please fill all the details....");
//         return ;
//     }

//     console.log(fname);

//     var temp ="";
//     for(var j=0; j< row; j++){
//         temp += '<tr>';
//         temp += '<td>'+fname+'</td>';
//         temp += '<td>'+lname+'</td>';
//         temp += '<td>'+age+'</td>';
//         temp += '<td>'+country+'</td></tr>';
//     }

//     document.getElementById('data').innerHTML = temp;

//     // var display = document.querySelector('#data');
//     // var newRow = display.insertRow(row);

//     // console.log(newRow);
//     // var cell1 = newRow.insertCell(0);
//     // var cell2 = newRow.insertCell(1);
//     // var cell3 = newRow.insertCell(2);
//     // var cell4 = newRow.insertCell(3);

//     // console.log(cell1);

//     // cell1.innerHTML = fname;
//     // cell2.innerHTML = lname;
//     // cell3.innerHTML = age;
//     // cell4.innerHTML = country;

//     row++;
// }