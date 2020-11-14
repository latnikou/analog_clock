
const deg = 6; 
const hr = document.querySelector('#hr');
const sc = document.querySelector('#sc'); 

setInterval(() => {
   let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transorm = `rotateZ(${(hh) + (mm/12)}deg`;
mn.style.transorm = `rotateZ(${mm}deg)`;
sc.style.transorm = `rotateZ(${sc}deg)`;ц
})
