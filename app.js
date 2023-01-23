"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function foo() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://restcountries.com/v3.1/all");
        const data = yield response.json();
        let dataPrint = document.getElementById("dataPrint");
        const countries = data.filter((item) => item.region !== ' ');
        const fragment = document.createDocumentFragment();
        console.log(data);
        countries.forEach((country) => {
            const div = document.createElement('div');
            div.classList.add('country');
            div.innerHTML = `<h2>${country.name.common}</h2>
                        <p>Region: ${country.region}</p>
                        <p>Population: ${country.population}</p>`;
            fragment.appendChild(div);
        });
        dataPrint.appendChild(fragment);
        // dataPrint.innerText = JSON.stringify(data);
        // console.log(JSON.stringify(data));
    });
}
foo();
