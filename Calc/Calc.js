window.addEventListener("DOMContentLoaded", function () {
    const IphoneCost =
    {"v1": 60000, "v2": 80000, "v3": 100000};

    let Field = document.getElementById("field");
    let model = document.getElementById("model");
    let CalcButton = document.getElementById("buttonCalc");
    let Result = document.getElementById("result");
    CalcButton.addEventListener("click", function () {
        let inp = Field.value;
        if (inp.match(/^\d+$/) !== null) 
        {
            let res = IphoneCost[model.value] * inp;
            Result.innerText = res;
        } 
        else 
        {
            Result.innerText = "Некорректный ввод количества";
        }
    });
});
