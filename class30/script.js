function clearScreen()
{
    document.getElementById("result").value = ""
}

function setScreenValue(value){
    document.getElementById("result").value +=value;
}
function calculateResult()
{
    const resultElement = document.getElementById("result");
    const exp =resultElement.value.trim();
    if (exp=="")
    {
        resultElement.value = "enter a value plz!🙏"
    }
    else
    {
        try {
            resultElement.value = eval(exp)
        }
        catch(e){
            resultElement.value = "invalid expression"
        }
    }
}