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
  .bindPopup('<h3>REPRESENTANTES - AL</h3><p> • Maceió <br> Tiaraju Representações. <br> (053) 98113-4586</p>')

  //AM
  L.marker([-2.939494487801104, -59.89240534106408]).addTo(map)
  .bindPopup('<h3>REPRESENTANTES - AM</h3><p> • Manaus <br> Raimundo <br> (092) 99265-4869</p>')
  
  //BA
  L.marker([-12.724729869440507, -38.35242407931807]).addTo(map)
  .bindPopup('<h3>REPRESENTANTES - BA</h3><p> • Salvador <br> Face Representações. <br> (071) 99142-0401 </p><p> • Feira de Santana <br> Face Represntações. <br> (075) 99135-8900 <br> Jmr Representações. <br> (075) 99278-8775</p><p> • Interior e Sertão Bahia <br> Sérgio Representações. <br> (075) 99928- 2449</p>')

  //CE
  L.marker([-4.841650842589037, -39.38776235776653]).addTo(map)
  .bindPopup('<h3>REPRESENTANTES - CE</h3><p> • Fortaleza Sales Representações. (085) 98899-1482</p><p> • Interior MM Representações. (088) 99965-1183</p>')

  //ES
  L.marker([-20.211647713359866, -40.21833927808317]).addTo(map)
  .bindPopup('<h3>REPRESENTANTES - ES</h3><p> • Vitória <br> Italeo Comercial Eireli. <br> (027) 98831-3944 / (027) 99913-3360</p>')

  //MG
  L.marker([-19.806133392704453, -43.84856138986124]).addTo(map)
  .bindPopup('<h3>REPRESENTANTES - MG</h3><p> • Belo Horizonte VBO Representações. (031) 3047-6191 / (031) 98741-1296 (031) 98741-1231</p><p> • Zona da Mata Mineira J.C Representações. (032) 3225-8005 / (032) 99808-3961</p><p> • Vale do Aço e Nordeste de Minas <br> G.M. Representações. <br> (031) 3822-6870 / (031) 98508-2190 / <br> (031) 98855-2532</p>')

  //MS
  L.marker([-20.121420592140694, -53.83148742284188]).addTo(map)
  .bindPopup('<h3>REPRESENTANTES - MS</h3><p> • Campo Grande <br> S.M. Representações <br> (067) 99221-4341</p>')

  //PB
  L.marker([ -6.972810652292927, -34.632095055085685]).addTo(map)
  .bindPopup('<h3>REPRESENTANTES - PB</h3><p> • João Pessoa Fernando Lucena. (083) 99999-6795</p><p> • Campina Grande RRN Representações. (083) 99372-1916</p>')

  //PE
  L.marker([-8.384091736637336, -37.9636751492335]).addTo(map)
  .bindPopup('<h3>REPRESENTANTES - PE</h3><p> • Recife <br> Montemor Representações. <br> (081) 99615-2367 <br> Reis Representações. <br> (081) 98666-8099 <br> Meios Representações. <br> (081) 99408-6510</p><p> • Interior <br> Galatas Representações. <br> (087) 99625-6126</p>')

  //PI
  L.marker([-5.012683996164629, -42.66708237200614]).addTo(map)
  .bindPopup('<h3>REPRESENTANTES - PI</h3><p> • Teresina <br> Prime Representações <br> (086) 99981-2233</p>')
  
  //RJ
  L.marker([-22.809353963954756, -43.038706976293405]).addTo(map)
  .bindPopup('<h3>REPRESENTANTES - RJ</h3><p>• Rio de Janeiro e Região Grande Rio <br>Gran\'s Rio Representações Ltda.<br>(021) 98129-4206 / (021) 99915-0125<br>Representações Melo Ltda.<br>(021) 99988-9910 / (021) 99988-0011 /<br>(021) 99557-4499<br>Tina Representações Comerciais Ltda.<br>(021) 96412-0646</p><p> • Região dos Lagos<br> Saqua Rio Comercio e serviços Ltda.<br> (022) 99975-2300 / (022) 2653-3170</p><p> • Norte do Rio<br> Iran Roque Teixera.<br> (032) 99102-6378</p>')

  //RN
  L.marker([-5.726287904338677, -36.97073363097768]).addTo(map)
  .bindPopup('A<h3>REPRESENTANTES - RN</h3><p> • Natal <br> Belnil Representacões. <br> (083) 99999-6795 / (084) 99652-2662</p>')

  //RS
  L.marker([-29.986692629742773, -51.21141376560703]).addTo(map)
  .bindPopup('<h3>REPRESENTANTES - RS</h3><p>• POA e Região dos Sinos<br>Raira Representações Ltda.<br>(051) 98457-0890 / (051) 3336-0141</p>')

  //SE
  L.marker([-10.463150917947136, -37.22390152207728]).addTo(map)
  .bindPopup('<h3>REPRESENTANTES - SE</h3><p> • Aracaju <br> Pemafe Representações. <br> (079) 99992-7401</p>')

  //SP
  L.marker([-23.43745084720217, -46.60617335140764]).addTo(map)
  .bindPopup('<h3>REPRESENTANTES - SP</h3><p> • Capital, Região Leste e Guarulhos <br> Gam. Comercio e Representações Ltda. <br> (011) 98293-5252</p><p> • Região Metropolitana <br> Cooperativa Arrozeira Extremo Sul Ltda. <br> (053) 98111-6294</p><p> • SP (Interior) <br> Cooperativa Arrozeira Extremo Sul Ltda. <br> Matriz - (053) 98106-1321</p>')
  
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

