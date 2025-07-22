const aboutPage =(e)=>{
    e.textContent='';
    const about = document.createElement('div');
    about.textContent='This is about page';
    e.append(about);
}
module.exports={aboutPage};