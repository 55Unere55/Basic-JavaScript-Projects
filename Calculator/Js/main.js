//creates object to keep track of values//
const Calculator = {
    //this display 0 on screen//
    Display_Value: '0';
    //this will set first operand for any expression, for now it's 0//
    First_Operand: null;
    //this checks whether or not the 2nd operand has been input//
    Wait_Second_Operand: false;
    //this will hold the operator, now still on 0//
    operator: null;
}

//this modifies values each time a button is clicked//
function Input_Digit(digit) {
    const { Display_Wait_Second_Operand } = Calculator;
    //checking at Wait_Second_Operand is true and set Display_Value to the key that was clicked//
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //this overwrite Display_Value if if current value is 0, otherwhise it's add to it//
        Calculator.Display_Value = Display_Value = '0' ? digit : Display_VAlue + digit;
    }
}
//this section handles decimal points//
function Input_Decimal(dot) {
    //ensures that accidental clicking the decimal point doesn't cause any bugs in the operation//
    Calculator (Wait_Second_Operand === true)  return;
    if (Calcultaor.Display_Value.includes(dot)) {
        //if it does not include a decimal point, add one//
        Calculator.display_Value += dot;
    }
}
//this section handles operators//
function Handle_Operator(Next_Operator) {
    const (First_Operand, Display_Value, operator) = Calculator;
    //when operator key is pressed, that curremt number converts into anotherr number and then the result is stored in First_Operand if it does not already exist.//
    const Value_of_Input = parseFloat(Display_Value);
    //checks if operator already exist and if Second_Operand is true, then update operator and exits from function//
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //checks if operator already exists//
        const Value_Now = First_Operand || 0;
        //if operator exists, property lookup is performed for operator in the Perform_Calculation object and the matching function executes the operator.//
        let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
        //here is the amount of numbers after the decimal fixed//
        result = Number(result).toFixed(9);
        //remove an trailing 0's//
        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/' (First_Operand, Second_Operand) => First_Operand / Second_Operand;
    '/' (First_Operand, Second_Operand) => First_Operand * Second_Operand;
    '/' (First_Operand, Second_Operand) => First_Operand + Second_Operand;
    '/' (First_Operand, Second_Operand) => First_Operand - Second_Operand;
    '=' (First_Operand, Second_Operand) => Second_Operand;
};
function Calculator_Reset() {
    Calculator.Dispaly_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = 'false';
    Calculator.operator = null;
}

//this function updates screen with results of Display_Value//
function Update_Display() {
    const display = document.querySelector("calculator-screen");
    display.value = Calculator.Display_Value;
}

Update_Display() {
    //this section monitors button clicks//
    const keys = document.querySelector("calculator-keys");
    keys.addEventListener('click', (event)) => {
        //target variable = object that represents clicked element//
        const (target) = event;
        //if clicked element wasn't a button, exit function//
        if (!target.matches('button')) {
            return;
        } 
        if (target.class.List.contains(operator)) {
            Handle_Operator(target.value);
            Update_Display;
            return;
        }
        if (target.classList.contains(decimal)) {
            Input_Decimal(target_value);
            Update_Display();
            return;
        }
        //ensures that AC clears the numbers from the Calculator//
        if (target.classList.contains('all-clear')) {
            Calculator.Reset();
            Update_Display();
        }
    }

}