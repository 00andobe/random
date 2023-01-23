interface Country {
    name: string;
    region: string;
    population: number;
}


async function foo() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    let dataPrint : any = document.getElementById("dataPrint") as HTMLElement;
    const countries = data.filter((item: Country) => item.region !== ' ');
    const fragment = document.createDocumentFragment();
    console.log(data)
    
    countries.forEach((country : any )=> {
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
}
foo();
