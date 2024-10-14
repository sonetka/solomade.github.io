document.addEventListener("DOMContentLoaded", function () {
    const IphoneCost =
    {"v1": 60000, "v2": 80000, "v3": 100000};
    const IphoneComplectation =
    {"c1": 0, "c2": 3000, "c3": 15000};
    const IphoneServises =
    {"s1": 300, "s2": 1500};


    let field = document.getElementById("field");
    let model = document.getElementById("model");
    let buttonCalc = document.getElementById("buttonCalc");
    let result = document.getElementById("result");
    let radio = document.getElementByName("Iphone");
    let servises = document.getElementByName("servises");
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
