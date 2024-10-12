window.addEventListener("DOMContentLoaded", function () 
{
  const IphoneCost = {"v1": 60000, "v2": 80000, "v3": 100000};
  let Field = document.getElementById("field");
  let Model = document.getElementById("model");
  let CalcButton = document.getElementById("buttonCalc");
  let Result = document.getElementById("result");
  CalcButton.addEventListener("click", function () {
        let input = Field.value;
        if (input.match(/^\d+$/) !== null) {
            let x = IphoneCost[Model.value] * input;
            Result.innerText = x;
        } 
        else 
        {
            Result.innerText = "Некорректный ввод";
        }
    });
});
