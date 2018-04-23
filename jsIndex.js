// Basic Calculator

    // get the user inputs, they get to choose which calculator they want to use.
    var calcType = prompt('Choose the type of Calculator you would like, (b)asic , (a)dvanced or bmi')
    var result;
    // If statement for choosing the basic calculator.
    if(calcType == "b" || calcType == "basic"){
      var value1 = prompt('enter first value');
      var choice = prompt('Choose your action (a)dd (s)ubtract (mu)ltiply (d)ivide (mo)dulus');
      var value2 = prompt('enter the second value');
    // Getting the user imputs for the function.
      switch (choice) {
        case "a":
          console.log("a");
          result = +value1 + +value2;
        break;
        case "add":
          console.log("a");
          result = +value1 + +value2;
        break;
        case "s":
          console.log("s");
          result = value1 - value2;
        break;
        case "subtract":
          console.log("s");
          result = value1 - value2;
        break;
        case "mu":
          console.log("mu");
          result = value1 * value2;
        break;
        case "multiply":
          console.log("mu");
          result = value1 * value2;
        break;
        case "divide":
          console.log("d");
          result = value1 / value2;
        break;
        case "d":
          console.log("d");
          result = value1 / value2;
        break;
        case "mo":
          console.log("mo");
          result = value1 % value2;
        break;
        case "modulus":
          console.log("mo");
          result = value1 % value2;
        break;
        // having 2 things the user can type to get the functionality they want
        // and getting a result from the users imputs.
        default:
          alert("Sorry that's an invalid request");
        // This will be displayed if the user puts an invalid answer into
        // any of the categorys.
      }
        // The else if statement for the advanced calculator.
    }else if (calcType == "a" || calcType == "advanced") {
      var value1 = prompt('enter first value');
      var choice = prompt('Choose your action (p)ower (s)quare root');
        if(choice == "p" || choice == "power"){
          var value2 = prompt('to the power of the second value');
            console.log(value2);
        }
        // Again getting the user imputs but only getting the second one when
        // using the power opperand as you do not need a second value.
      switch (choice) {
        case "s":
          result = Math.sqrt(value1);
          break;
          case "square root":
            result = Math.sqrt(value1);
          break;
          case "p":
            result = Math.pow(value1, value2);
          break;
          case "power":
            result = Math.pow(value1, value2);
          break;
          // having 2 things the user can type to get the functionality they want
          // and getting a result from the users imputs.
        default:
          alert("Sorry that's an invalid request");
          // This will be displayed if the user puts an invalid answer into
          // any of the categorys.
      }

    }else if (calcType == "bmi") {
      var choice = prompt('choose (i)mperial, pounds and inches, or (m)etric, kilograms and meters');
        if(choice == "i" || choice == "imperial"){
          var value1 = prompt('enter weight in pounds');
          var value2 = prompt('enter height in inches');
          var bmi1 = value2 * value2
          var bmi2 = value1 / bmi1;
          var result = bmi2 * 703;
          // The impirical calculation for bmi.
        }else if (choice == "m" || choice == "metric"){
          var value1 = prompt('enter weight in kilograms');
          var value2 = prompt('enter height in meters');
          var bmi1 = value1 / value2;
          result = bmi1 / value2;
          // The metric calculation for bmi.
        }else{
          alert("Sorry that's an invalid request");
          // This will be displayed if the user puts an invalid answer into
          // any of the categorys.
        }


    }
        alert("Your result is " + result);
        // Telling the user what their result is.


    // Calculator
    //
    // Timings
    // 45 - 90 minutes
    //
    // Tasks
    // Your task is to write a command line calculator application that has two settings, (b)asic and (a)dvanced.
    // - First you will need to ask the user for which calculator they want to use
    // - Then you will need to ask the user for the numbers to operate on.
    // - Then you need to work out what to do with the numbers, depending on what operation they choose.
    //
    // Basic:
    // - Additon
    // - Multiplication
    // - Division
    // - Subtraction
    //
    // Advanced:
    // - Power
    // - Square root
    //
    // Setup
    // There is no starter code for this app.
    //
    // Hints
    // Get user input - var hello = prompt("What is your name")
    // Output to console - console.log(hello)
    //
    // Bonus task - Add some additional functionality
    // Add the following calculator feature into your app.
    //
    // BMI Calculator
    // Calculate the BMI when given the height and weight - the user should be able to choose between the imperial and the metric system
    // - BMI Link 1
    // - BMI Link 1
    //
    // SUPER Bonus task
    // Add the following calculator feature into your app.
    // Trip Calculator
    // This feature asks the user for four inputs; distance, fuel efficiency (mpg), cost per gallon, speed and it will give you the time and price of your journey.
    // Example output: "Your trip will take 3.5 hours and cost £255.33.""
    // Note: For every 1 MPH over 60 MPH, reduce the the MPG by 2 MPG (i.e. a car that normally gets 30 mpg would only get 28 mpg if its speed were 61 mph.
    // Yes this gets silly at high speed where mpg goes to zero or gets negative - how will you handle this?)
