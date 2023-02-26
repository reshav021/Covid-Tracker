const url = "https://disease.sh/v3/covid-19/ALL";

const el = {
  el1: document.querySelector('.tc'),
  el2: document.querySelector('.td'),
  el3: document.querySelector('.tr'),
  el9: document.querySelector('.ta'),
  el4: document.querySelector('#search'),
  el5: document.querySelector('.model'),
  el6: document.querySelector('.tcc'),
  el7: document.querySelector('.tdd'),
  el8: document.querySelector('.trr'),
  el10: document.querySelector('.tae'),
  close:document.querySelector('#close'),
  searchCountry:document.querySelector('#searchCountry'),
  tcs:document.querySelector('.tcs'),
  tds:document.querySelector('.tds'),
  trd:document.querySelector('.trd'),
  tae:document.querySelector('.tae'),
  img:document.querySelector('.img1'),
};

function displayData(link){
  fetch(link)
    .then(json => json.json())
    .then(data => {
      el.el1.innerHTML = data.cases;
      el.el2.innerHTML = data.deaths;
      el.el3.innerHTML = data.recovered;
      el.el9.innerHTML = data.active;
    });
}

function searchData(val){
  fetch(`https://disease.sh/v3/covid-19/countries/${val}?strict=true`).
  then(data => data.json()).
  then(function(e){
    el.tcs.innerHTML = e.cases;
    console.log(e);
    el.tds.innerHTML = e.deaths;
    el.trd.innerHTML = e.recovered;
    el.tae.innerHTML = e.active;
    el.img.src = e.countryInfo.flag;
  });
}

el.searchCountry.addEventListener('keyup',function(){
  searchData(el.searchCountry.value);
});


function displayModel(){
  document.querySelector('.app').classList.add('hide');
  el.el5.classList.remove('hide');
};

el.el4.addEventListener('click',function(){
  displayModel();
});

el.close.addEventListener('click',function(){
  el.el5.classList.add('hide');
  document.querySelector('.app').classList.remove('hide');
});

displayData(url);