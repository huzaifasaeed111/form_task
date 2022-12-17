


function myfunction() {
    var startdate = document.getElementById('startDate');
    var enddate = document.getElementById('endDate');
    var names = document.getElementById('name');
    var DoB = document.getElementById('DoB');
    var fileupload = document.getElementById('fileupload');

    if (startdate.value >= enddate.value) {
        alert("Start Date is Greater than End Date");
    }
    // for converting form data into json file
    var a = [];
    a.push({ names: `${names.value}` });
    a.push({ DoB: `${DoB.value}` });
    a.push({ startdate: `${startdate.value}` });
    a.push({enddate:`${enddate.value}`});
    a.push({fileupload: `${fileupload.value}`});
    localStorage.setItem("", JSON.stringify(a));
}




