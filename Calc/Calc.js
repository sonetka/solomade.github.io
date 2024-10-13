document.addEventListener("DOMContentLoaded", function () {
    const IphoneCost =
    {"v1": 60000, "v2": 80000, "v3": 100000};

    let field = document.getElementById("field");
    let model = document.getElementById("model");
    let buttonCalc = document.getElementById("buttonCalc");
    let result = document.getElementById("result");
    buttonCalc.addEventListener("click", function () {
        let inp = field.value;
        if (inp.match(/^\d+$/) !== null) 
        {
            let res = IphoneCost[model.value] * inp;
            result.textContent = res.toLocaleString();
        } 
        else 
        {
            result.textContent = "Некорректный ввод количества";
        }
    });
});
