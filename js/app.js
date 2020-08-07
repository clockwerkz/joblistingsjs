let searchInput = [];


document.addEventListener("DOMContentLoaded", ()=>{
  const body = document.querySelector('body');
  body.addEventListener('click', (e)=>{
    if (e.target.classList.contains('card__tag') && searchInput.indexOf(e.target.textContent) === -1){
      searchInput.push(e.target.textContent);
      renderSearchBar();
      render(searchInput.length === 0 ? data : filterSearchInput(data));
    }
    if (e.target.classList.contains("search__clear")){
      searchInput = [];
      renderSearchBar();
    }
    if (e.target.classList.contains("fa-times")){
      let searchTag = e.target.parentNode.textContent.trim();
      console.log(searchTag);
      searchInput = searchInput.filter(tag => tag !== searchTag);
      renderSearchBar();
      render(searchInput.length === 0 ? data : filterSearchInput(data));
    }
  });
    render(data);
    renderSearchBar();
});


function filterSearchInput(data) {
  return data.filter(job => {
    const searchArray = job.languages.concat(job.tools);
    searchArray.push(job.role);
    searchArray.push(job.level);
    let onList = true;
    for (let i=0; i < searchInput.length; i++) {
      console.log(job);
      if (searchArray.indexOf(searchInput[i]) === -1) {
        onList = false;
      }
    }
    if (onList) return job;
  });
}


function renderSearchBar() {
  const searchBar = document.querySelector(".search__tags");
  const searchBox = document.querySelector(".search");
  if (searchInput.length === 0) {
    searchBox.classList.remove("show");
    searchBar.innerHTML = '';
    render(data);
  } else {
    if (searchInput.length ===1) {
      searchBox.classList.add("show");
    }
    const searchStrings = searchInput.map(tag => `<li class="search__tag">${tag} <i class="fas fa-times"></i></li>`).join('');
    searchBar.innerHTML = searchStrings;
  }
}

function render(arr) {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    arr.forEach(card => container.innerHTML += template(card))
}


function template(job) {
  const {company, position, logo, postedAt, contract, location, role, level, languages, tools}  = job;

  let tagsLi = languages.concat(tools).map(tag => `<li class="card__tag">${tag}</li>`).join('');

  return `
    <div class="card  ${job.featured ? 'card--highlight' : ''}">
    <div class="card__body">
      <div class="card__img">
        <img src="${logo}" />
      </div>
      <div class="card__info">
        <div class="company">
          <h2 class="company__title">${company}</h2>
          <ul class="company__tags">
            ${job.new ? '<li class="company__tag">NEW</li>' : ''}
            ${job.featured ? '<li class="company__tag">FEATURED</li>' : ''}
          </ul>
        </div> <!-- .card__company -->
        <h1 class="card__title">${position}</h1>
        <ul class="card__description">
          <li class="description-tag">${postedAt}</li>
          <li class="description-tag">${contract}</li>
          <li class="description-tag">${location}</li>
        </ul>
      </div> <!-- .card__info -->
      
    </div> <!-- .card__body -->
    <ul class="card__tags">
    <li class="card__tag">${role}</li>
    <li class="card__tag">${level}</li>
      ${tagsLi}
    </ul>
  </div> <!-- .card -->
    `
}
