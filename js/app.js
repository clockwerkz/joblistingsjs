/*
OBJ STRUCTURE 
{
    company: 'Photosnap',
    position: 'Senior Frontend Developer',
    companyTags: ['New!','Featured'],
    img: 'images/photosnap.svg',
    description: ['1d ago', 'Full Time', 'USA Only'],
    tags: ['Frontend','Senior','HTML','CSS','JavaScript']

}
*/

// {
//   "id": 1,
//   "company": "Photosnap",
//   "logo": "./images/photosnap.svg",
//   "new": true,
//   "featured": true,
//   "position": "Senior Frontend Developer",
//   "role": "Frontend",
//   "level": "Senior",
//   "postedAt": "1d ago",
//   "contract": "Full Time",
//   "location": "USA Only",
//   "languages": ["HTML", "CSS", "JavaScript"],
//   "tools": []
// },
const arr = [
    {
        company: 'Photosnap',
        position: 'Senior Frontend Developer',
        new: true,
        featured: true,
        companyTags: ['New!','Featured'],
        logo: './images/photosnap.svg',
        description: ['1d ago', 'Full Time', 'USA Only'],
        tags: ['Frontend','Senior','HTML','CSS','JavaScript']
    
    },
    {
        company: 'Manage',
        position: 'Fullstack Developer',
        companyTags: ['New!','Featured'],
        img: 'images/manage.svg',
        description: ['1d ago', 'Part Time', 'Remote'],
        tags: ['Fullstack','Midweight','Python','React']
    
    }

]

document.addEventListener("DOMContentLoaded", ()=>{
    render(arr);
});


function render(arr) {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    arr.forEach(card => container.innerHTML += template(card))
}


function template(obj) {
  const {company, logo , description, tags}  = obj;
  const companyTags = [];
  if (obj.new) companyTags.push("new");
  if (obj.featured) companyTags.push("featured")
  let companyTagsLi = companyTags.map(tag => `<li class="company__tag">${tag.toUpperCase()}</li>`).join('');
  let descriptionLi = description.map(tag => `<li class="description-tag">${tag}</li>`).join('');
  let tagsLi = tags.map(tag => `<li class="card__tag">${tag}</li>`).join('');
  return `
    <div class="card card--highlight">
    <div class="card__body">
      <div class="card__img">
        <img src="${logo}" />
      </div>
      <div class="card__info">
        <div class="company">
          <h2 class="company__title">${company}</h2>
          <ul class="company__tags">
            ${companyTagsLi}
          </ul>
        </div> <!-- .card__company -->
        <h1 class="card__title">Senior Frontend Developer</h1>
        <ul class="card__description">
            ${descriptionLi}
        </ul>
      </div> <!-- .card__info -->
      
    </div> <!-- .card__body -->
    <ul class="card__tags">
      ${tagsLi}
    </ul>
  </div> <!-- .card -->
    `
}
/*
<!-- Item Start -->
  <div class="default-text">
  Photosnap
  New!
  Featured
  Senior Frontend Developer
  1d ago
  Full Time
  USA only
  <!-- Role -->
  Frontend
  <!-- Level -->
  Senior
  <!-- Languages -->
  HTML
  CSS
  JavaScript
  <!-- Item End -->

  
  <!-- Item Start -->
  Manage
  New!
  Featured
  Fullstack Developer
  1d ago
  Part Time
  Remote
  <!-- Role -->
  Fullstack
  <!-- Level -->
  Midweight
  <!-- Languages -->
  Python
  <!-- Tools -->
  React
  <!-- Item End -->

  <!-- Item Start -->
  Account
  New!
  Junior Frontend Developer
  2d ago
  Part Time
  USA only
  <!-- Role -->
  Frontend
  <!-- Level -->
  Junior
  <!-- Languages -->
  JavaScript
  <!-- Tools -->
  React
  Sass
  <!-- Item End -->

  <!-- Item Start -->
  MyHome
  Junior Frontend Developer
  5d ago
  Contract
  USA only
  <!-- Role -->
  Frontend
  <!-- Level -->
  Junior
  <!-- Languages -->
  CSS
  JavaScript
  <!-- Item End -->

  <!-- Item Start -->
  Loop Studios
  Software Engineer
  1w ago
  Full Time
  Worldwide
  <!-- Role -->
  Fullstack
  <!-- Level -->
  Midweight
  <!-- Languages -->
  JavaScript
  Ruby
  <!-- Tools -->
  Sass
  <!-- Item End -->

  <!-- Item Start -->
  FaceIt
  Junior Backend Developer
  2w ago
  Full Time
  UK only
  <!-- Role -->
  Backend
  <!-- Level -->
  Junior
  <!-- Languages -->
  Ruby
  <!-- Tools -->
  RoR
  <!-- Item End -->

  <!-- Item Start -->
  Shortly
  Junior Developer
  2w ago
  Full Time
  Worldwide
  <!-- Role -->
  Frontend
  <!-- Level -->
  Junior
  <!-- Languages -->
  HTML
  JavaScript
  <!-- Tools -->
  Sass
  <!-- Item End -->

  <!-- Item Start -->
  Insure
  Junior Frontend Developer
  2w ago
  Full Time
  USA only
  <!-- Role -->
  Frontend
  <!-- Level -->
  Junior
  <!-- Languages -->
  JavaScript
  <!-- Tools -->
  Vue
  Sass
  <!-- Item End -->

  <!-- Item Start -->
  Eyecam Co.
  Full Stack Engineer
  3w ago
  Full Time
  Worldwide
  <!-- Role -->
  Fullstack
  <!-- Level -->
  Midweight
  <!-- Languages -->
  JavaScript
  Python
  <!-- Tools -->
  Django
  <!-- Item End -->

  <!-- Item Start -->
  The Air Filter Company
  Front-end Dev
  1mo ago
  Part Time
  Worldwide
  <!-- Role -->
  Frontend
  <!-- Level -->
  Junior
  <!-- Languages -->
  JavaScript
  <!-- Tools -->
  React
  Sass
  <!-- Item End -->
</div>
*/