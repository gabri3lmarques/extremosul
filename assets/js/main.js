window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_4cu6raf', 'template_mi7pm37', this)
          .then(function() {
              alert("sua mensagem foi enviada com sucesso!")
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}

window.addEventListener("load", function(event) {

  var map = L.map('map').setView([-13.6629422, -69.6447615], 4);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ''
  }).addTo(map);

  //AL
  L.marker([-9.656898682525505, -35.408994756713646]).addTo(map)
  .bindPopup('<img src="./assets/img/pins/al.png">')

  //AM
  L.marker([-2.939494487801104, -59.89240534106408]).addTo(map)
  .bindPopup('<img src="./assets/img/pins/am.png">')
  
  //BA
  L.marker([-12.724729869440507, -38.35242407931807]).addTo(map)
  .bindPopup('<img src="./assets/img/pins/ba.png">')

  //CE
  L.marker([-4.841650842589037, -39.38776235776653]).addTo(map)
  .bindPopup('<img src="./assets/img/pins/ce.png">')

  //ES
  L.marker([-20.211647713359866, -40.21833927808317]).addTo(map)
  .bindPopup('<img src="./assets/img/pins/es.png">')

  //MG
  L.marker([-19.806133392704453, -43.84856138986124]).addTo(map)
  .bindPopup('<img src="./assets/img/pins/mg.png">')

  //MS
  L.marker([-20.121420592140694, -53.83148742284188]).addTo(map)
  .bindPopup('<img src="./assets/img/pins/ms.png">')

  //PB
  L.marker([ -6.972810652292927, -34.632095055085685]).addTo(map)
  .bindPopup('<img src="./assets/img/pins/pb.png">')

  //PE
  L.marker([-8.384091736637336, -37.9636751492335]).addTo(map)
  .bindPopup('<img src="./assets/img/pins/pe.png">')

  //PI
  L.marker([-5.012683996164629, -42.66708237200614]).addTo(map)
  .bindPopup('<img src="./assets/img/pins/pi.png">')
  
  //RJ
  L.marker([-22.809353963954756, -43.038706976293405]).addTo(map)
  .bindPopup('<img src="./assets/img/pins/rj.png">')

  //RN
  L.marker([-5.726287904338677, -36.97073363097768]).addTo(map)
  .bindPopup('<img src="./assets/img/pins/rn.png">')

  //RS
  L.marker([-29.986692629742773, -51.21141376560703]).addTo(map)
  .bindPopup('<img src="./assets/img/pins/rs.png">')

  //SE
  L.marker([-10.463150917947136, -37.22390152207728]).addTo(map)
  .bindPopup('<img src="./assets/img/pins/se.png">')

  //SP
  L.marker([-23.43745084720217, -46.60617335140764]).addTo(map)
  .bindPopup('<img src="./assets/img/pins/sp.png">')
  
});

const modalOverlay = document.querySelector(".modal-produtos-overlay");

function openModal(productPage){
  document.getElementById(productPage).style.display = "flex";
  modalOverlay.style.opacity = "1";
  modalOverlay.style.pointerEvents = "auto";
}

function closeModal(productPage){
  modalOverlay.style.opacity = "0";
  modalOverlay.style.pointerEvents = "none";
  setTimeout(function(){
    document.getElementById(productPage).style.display = "none";
  }, 400);
}

var isOpen = false;

