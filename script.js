// Declaring and initializing variables
let submit = document.getElementById("submit");
let output = document.getElementById("output");

submit.addEventListener("click", () => {
    // create a Date object from input value
    let date1 = new Date(document.getElementById("date-1").value);
    let date2 = new Date(document.getElementById("date-2").value);

    // check if the input dates are valid if valid calculate the difference
    if(date1.getTime() && date2.getTime()){
        // calculate difference in time using getTime function
        // getTime calculates number of years since January 1,1970
        let timeDifference = date2.getTime() - date1.getTime();

        //Since this value is in milliseconds we need to convert it into days
        //We want the difference to be a non-negative number. Hence we use Math.abs()
        let dayDifference = Math.abs(timeDifference / (1000 * 3600 * 24));
        output.innerHTML = `Difference between the two dates is <span>${dayDifference} days</span>`;
    }
    else{
        output.innerHTML = "Please select a valid date";
    }
});