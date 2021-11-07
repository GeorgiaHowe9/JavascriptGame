function play() {

    //Javascript Game

    var firstName = prompt("What is your name?");

    var string1 = "Hello";
    var string2 = ", do you want to know the date today?";
    var dateObj = new Date();

    var question = `${string1} ${firstName} ${string2}`

    alert(question)

    var response = confirm("Please confirm");
    var goodBye = "Goodbye"
    var finalWord = `${goodBye} ${firstName}`;

    if (response) {
        alert(dateObj);
    } else {

        var response2 = confirm("What about the weather?");
        var weatherList = ["raining", "sunny", "windy", "snowing"];

        let randomValue = weatherList[Math.floor(Math.random() * weatherList.length)];

        var it = "It's"
        var and = "and"
        var degrees = "degrees"

        if (response2) {
            alert(`${it} ${randomValue}`)
        } else {
            alert(finalWord);
        }
    }
}