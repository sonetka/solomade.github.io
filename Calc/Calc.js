window.addEventListener("DOMContentLoaded", function () 
{
  const IphoneCost = {"v1": 60000, "v2": 80000, "v3": 100000};
  let field = document.getElementById("field");
  let model = document.getElementById("model");
  let CalcButton = document.getElementById("buttonCalc");
  let Result = document.getElementById("result");
  CalcButton.addEventListener("click", function () {
        let input = field.value;
        if (inp.match(/^\d+$/) !== null) {
            let x = IphoneCost[model.value] * input;
            Result.innerText = x;
        } else {
            Result.innerText = "Некорректный ввод";
        }
    });
}
