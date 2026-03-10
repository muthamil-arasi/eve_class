let myPromise = new Promise(function(resolve, reject) {

    let success = True;

    if (success) {
        resolve("Operation Successful");
    } else {
        reject("Operation Failed");
    }

});

const element = document.getElementsByClassName('name');
element.style.color="blue";
