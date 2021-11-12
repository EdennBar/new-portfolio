 const education=[{
    id:1,
    study:'The Open University',
    image:'https://eadtu.eu/images/articles/publicaties/intro/israel.PNG',
    education:'Full-Stack Course',
    date:'05/2021 - 08/2021',

},
{
    id:2,
    study:'Holon Institute of Technology',
    image:'https://upload.wikimedia.org/wikipedia/he/d/df/Logo_hit%2B50.jpg',
    education:'Bachelor of Computer Science',
    date:'10/19 - present',  
}
]

// const card=document.createElement('div')
// card.innerHTML=`<div class="card" style="width: 18rem;">
// <img src="..." class="card-img-top" alt="...">
// <div class="card-body">
//   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// </div>
// </div>`
// document.querySelector('.col-project').appendChild(card)
// console.log(card)

education.map((item,index)=>{
if(index%2==0){
     const col=document.querySelector('.col')
    col.style=' display: flex; align-items: center;justify-content: center;'
     // console.log(col)
      const card=document.createElement('div')
      card.className='card'
      card.style='width: 18rem;border-radius: 7px; '

    card.innerHTML=` <img src=${item.image} class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${item.education}</p>
      <p class="card-text">${item.date}</p>
    </div>`
   col.appendChild(card)
}else if(index%2!=0){
    const createSecondCol=document.createElement('div')
    createSecondCol.className='col'
    createSecondCol.style=' display: flex; align-items: center;justify-content: center;'
   // console.log(sCard)

    const card=document.createElement('div')
    card.className='card'
    card.style='width: 18rem;border-radius: 7px; '
    

  card.innerHTML=` <img src=${item.image} class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${item.education}</p>
    <p class="card-text">${item.date}</p>
  </div>`

  const rowOfCard=document.querySelector('.row.cards')
  rowOfCard.appendChild(createSecondCol)
  createSecondCol.appendChild(card)

}

})




const projects = [{
  id:1,
  projectName: 'E-commerce App',
  description:'Node, React, MySQL, Matriel-UI, hash, React hooks,React Router,cookies, Components and Props,authentication, bycrpt.',                                     
  githubLink:'https://github.com/EdennBar/shop/tree/master',
},
{
  id:2,
  projectName: 'Portfolio App ',    
  description:'Matriel-UI:React UI framework, React Router, React hooks, Components and Props.',
  githubLink:'https://github.com/EdennBar/portfolio/tree/master',
} ,
{
id:3,
projectName: 'Movies App ',    
description:'Matriel-UI:React UI framework, React hooks, React Router,(TMDB) API, Components and Props.',
githubLink:'https://github.com/EdennBar/Movies/tree/master',
}
,{
  id:4,
  projectName:'Weather',
  description:'Matriel-UI:React UI framework,  React Redux, AccuWeather APIs',
  githubLink:'https://github.com/EdennBar/Eden-Bar-18-09-2021',
}
,{
  id:5,
  projectName:'Flickr-Gallery',
  description:'Matriel-UI:React UI framework,  React Redux, Flickr APIs',
  githubLink:'https://github.com/EdennBar/Flickr-Gallery',
},{
  id:6,
  projectName:'Apiary',
  description:'Matriel-UI:React UI framework, Display react table only to token authenticated users',
  githubLink:'https://github.com/EdennBar/react-projects-portal/tree/master/src',
}
];









projects.map((item,index)=>{
  const getParentRow=document.querySelector('.row.projects-cards');

  const proCol=document.createElement('div');
  //console.log(proCol)
  proCol.className='col';
  proCol.style="display: flex; align-items: center;justify-content: center;"
  getParentRow.appendChild(proCol);

  const cards=document.createElement('div')
  cards.className='card'
  cards.style="width:50rem;height:120px; background-color: #112240;"

  

  cards.innerHTML=`<div class="card-body>
  <div class="container">
  <div class="row">
      
  <div class="col">
          <h5 style="color:rgb(220,220,220);flex-grow:1;">${item.projectName}</h5>        
      </div>
      
      <div class="col">
          <a href=${item.githubLink}><i class="fa fa-github fa_custom fa-2x" style="color: #64ffda;"></i></a> 
       </div>
  
       </div>
  <p style="color:rgb(220,220,220); margin-top: 20px;" class="card-text">${item.description}.</p>
  </div>
  </div>`
  proCol.appendChild(cards);

  
})






