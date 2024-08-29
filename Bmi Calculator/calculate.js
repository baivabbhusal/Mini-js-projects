const form=document.querySelector("form");

//taking height weight before event gives empty value
form.addEventListener("submit",function(e)
{
    e.preventDefault();//prevents submit in server

    const height=parseInt(document.querySelector("#height").value);
    //parse int convert to int and value give value
    const weight=parseInt(document.querySelector("#weight").value);

    const result=document.querySelector("#result");

    if(height==="" || height=="0" || isNaN(height))
    {
        result.innerHTML=`Please give a valid number.`;

    }

    else if(weight==="" || weight=="0" || isNaN(weight))
        {
            result.innerHTML=`Please give a valid number.`;
        }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        result.style.color="green";
        if(bmi<18.6){
            result.innerHTML=`<span>Under-Weight:${bmi}</span>`;
        }
        else if(bmi){
            result.innerHTML=`<span>Normal Range:${bmi}</span>`;
        }
        else{
            result.innerHTML=`<span>Over-Weight:${bmi}</span>`; 
        }
    } 
})
