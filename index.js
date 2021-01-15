var i = 0;
let Bio = [];

const addData =(ev) =>{
    ev.preventDefault();
    var regName = /^[a-zA-Z]+$/;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var age = document.getElementById('age').value;
    var country = document.getElementById('country').value;

    if(!fname || !lname || !age || !country){
        document.getElementById('BoxErr').style.color = 'red';
        document.getElementById('BoxErr').style.fontFamily = 'Arial';
        document.getElementById('BoxErr').style.fontSize = 'larger'
        document.getElementById('BoxErr').innerHTML = 'please Fill all the Details.';
        document.getElementById('fname').focus();
    }else if(!regName.test(fname)){
        document.getElementById('fnameErr').style.color = 'red';
        document.getElementById('fnameErr').style.fontFamily = 'Arial';
        document.getElementById('fnameErr').style.fontSize = 'larger'
        document.getElementById('fnameErr').innerHTML = 'Please Enter Valid First name.';
        document.getElementById('fname').focus();
    }else if(!regName.test(lname)){
        document.getElementById('lnameErr').style.color = 'red';
        document.getElementById('lnameErr').style.fontFamily = 'Arial';
        document.getElementById('lnameErr').style.fontSize = 'larger'
        document.getElementById('lnameErr').innerHTML = 'Please Enter Valid Last name.';
        document.getElementById('lname').focus();
    }else if ( isNaN(age) || age < 18 || age > 99){
        document.getElementById('ageErr').style.color = 'red';
        document.getElementById('ageErr').style.fontFamily = 'Arial';
        document.getElementById('ageErr').style.fontSize = 'larger'
        document.getElementById('ageErr').innerHTML = 'Enter age between 16 to 99';
        document.getElementById('age').focus();
    }else if(country.value == ''){
        document.getElementById('selErr').style.color = 'red';
        document.getElementById('selErr').style.fontFamily = 'Arial';
        document.getElementById('selErr').style.fontSize = 'larger'
        document.getElementById('selErr').innerHTML = 'Please choose valid option';
        document.getElementById('country').focus();
    }
    else {
        let Data = {
            id: i,
            firstName: fname,
            lastName : lname,
            age: age,
            country: country,
        }
        i++;
        document.forms[0].reset();
        Bio.push(Data);
        var temp ="";
        for(var j=0; j< Bio.length; j++){
            temp += '<tr>';
            temp += '<td>'+ (j+1) +'</td>';
            temp += '<td>'+Bio[j].firstName+'</td>';
            temp += '<td>'+Bio[j].lastName+'</td>';
            temp += '<td>'+Bio[j].age+'</td>';
            temp += '<td>'+Bio[j].country+'</td></tr>';
        }
        document.getElementById('data').innerHTML = temp;
    }
}
document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('btn').addEventListener('click',addData);   
});
