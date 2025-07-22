const homePage = (element)=>{
    element.textContent='';
    const home = document.createElement('div');
    home.textContent='This is home page';
    element.append(home);
}
module.exports={homePage};