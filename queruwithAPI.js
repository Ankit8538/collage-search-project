let allu="http://universities.hipolabs.com/search?name=";

let but=document.querySelector('button');
but.addEventListener('click',async function()
{
    let inp=document.querySelector('input');
    let cuntry=inp.value;
  console.log("button was click");
  let collarray=await getuniv(cuntry);
  showcoll(collarray);
})

function showcoll(accoll)
{
    let unor=document.querySelector('.unorder')
   
    unor.innerText="";
  for(jk of accoll)
    {
        let list=document.createElement('li')
     list.innerText=jk.name;  
    unor.appendChild(list);
    console.log(jk);
}
}


async function getuniv(couter)
{
    try
    {
    let allco= await axios.get(allu+couter);
    return allco.data;
    } catch (err)
    {
        console.log(err);
        return err=[];
    }
}

