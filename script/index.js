
var map = L.map('map', {
    center: [-16.37, -48.95], 
    zoom: 13,
    
    
});


//LOGO 



L.Control.Watermark=L.Control.extend({
    onAdd:function(map){
        var img = L.DomUtil.create('img');
        img.src = 'logo.png';
        img.style.width = '200px';
        return img;
        },
        onRemove:function(map){},
        });
        L.control.watermark = function(opts){
            return new L.Control.Watermark(opts);
            }
        L.control.watermark({position:'topleft'}).addTo(map);




// MAPA DARK

var Dark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);




let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
 {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


let googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
maxZoom: 20,

subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map)

googleSat = L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    
}).addTo(map)







//ALPHAVILLE
let alphaville = L.geoJSON(areaAlphaville)

let alphavilleMarcador = L.marker([-16.323061, -48.923073])
.bindPopup(`
    <strong>ALPHAVILLE</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong>10001459722<hr>
    <strong>MEDIDOR: </strong>10331989-1<hr>
    <strong>ENDEREÇO: </strong>Condomínio Alphaville<hr>
    


`)

let crAlphaville = L.layerGroup([alphaville, alphavilleMarcador])






//AREA ETA1

var marcadorEta = L.marker([-16.294447,-48.951382])
.bindPopup(`
    <strong>ETA</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong><hr>
    <strong>MEDIDOR: </strong><hr>
    
`)

let areaEta1 = L.geoJSON(eta1Eta2)
let areaEta1rede200 = L.geoJSON(rede200)

let areaTotalEta1 = L.layerGroup([areaEta1,areaEta1rede200,marcadorEta])

// AREA ETA3

let eta3A21 = L.geoJSON(areaEta3A21).bindPopup('ETA3 A-21').setStyle({
    fillColor: '#00FFFF	',
    fillOpacity:0.4,
    weight:0.5,
    color: "#fff",
    

})
let eta3A23 = L.geoJSON(areaEta3A23).bindPopup('ETA3 A-23').setStyle({
    fillColor: '#00FFFF',
    fillOpacity:0.4,
    weight:0.5,
    color: "#fff",
    

})
let eta3A24 = L.geoJSON(areaEta3A24).bindPopup('ETA3 A-24').setStyle({
    fillColor: '#00FFFF',
    fillOpacity:0.4,
    weight:0.5,
    color: "#fff",
    

})

let crEta3 = L.layerGroup([eta3A21,eta3A23,eta3A24,marcadorEta ])




// AREA MATINHA 


var marcadorR1 = L.marker([-16.309795, -48.955825])
.bindPopup(`
    <strong>R1 - Matinha</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong>20077610<hr>
    <strong>MEDIDOR: </strong>2498391-8<hr>
    <strong>ENDEREÇO: </strong>Rua Edna de Oliveira Faria, nº. 01, Bairro Maracanã<hr>
    


`)

let matinha = L.geoJSON(areaMatinha)
let crMatinha = L.layerGroup([matinha,marcadorR1])

matinha.bindPopup(`
    <strong>AREA DE INFLUÊNCIA DA MATINHA</strong><hr>
    <strong>Nº Total de economias: 35.173</strong><hr>

<table>
<tr>
<td>


    <li>SETOR CENTRAL</li> 
    <li>MARACANÃ</li>
    <li>JUNDIAÍ</li>
    <li>SÃO JORGE</li>
    <li>VILA SANTA MARIA</li>
    <li>SETOR CENTRAL</li>
    <li>SÃO JORGE</li>
    <li>VILA GÓIS</li>
    <li>VILA BRASIL</li>
    <li>ANDRACEL CENTER</li>
    <li>CALIXTO ABRÃO</li>
    <li>CIDADE JARDIM</li>
    <li>VILA FABRIL</li>

</td>

<td>

    <li>JARDIM DAS OLIVEIRAS</li> 
    <li>JARDIM GOIANO</li>
    <li>PARQUE MICHEL</li>
    <li>CHACARAS COLORADO</li>
    <li>DOM PEDRO II</li>
    <li>VILA TOCANTINS</li>
    <li>FREI EUSTÁQUIO</li>
    <li>VILA GOIÁS</li>
    <li>JARDIM PETRÓPOLIS</li>
    <li>RES. TERESINHA BRAGA</li>
    <li>JARDIM SILVEIRA</li>
    <li>RES. PARÍS</li>
    <li>RES. VALÊNCIA</li>

</td>
</tr>
</table>
`)



// AREA CALIXTÓPOLIS

var marcadorCalixtopolis = L.marker([-16.402564, -48.977347])
.bindPopup(`
    <strong>ETA</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong><hr>
    <strong>MEDIDOR: </strong><hr>
    


`)
let rapCalixtopolis = L.geoJSON(areaRapCalixtopolis)
let relCalixtopolis = L.geoJSON(areaRelCalixtopolis)

let crCalixtopoliis = L.layerGroup([rapCalixtopolis,relCalixtopolis, marcadorCalixtopolis])

// R3 - jardim américa

var marcadorR3 = L.marker([-16.351551, -48.942586])
.bindPopup(`
    <strong>R3 - JARDIM AMÉRICA</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong>20403320<hr>
    <strong>MEDIDOR: </strong>10688042-0<hr>
    
    <strong>ENDEREÇO: </strong>Avenida Anderson Cleiton, Qd. 02. Jardim América<hr>

    


`)

let r3 = L.geoJSON(areaR3).bindPopup(`

<strong>AREA DE INFLUÊNCIA DO R3</strong><hr>
<strong>Nº Total de economias: 24.834</strong><hr>
    

<table>
<tr>
<td>


    <li>SETOR CENTRAL</li> 
    <li>JUNDIAÍ</li>
    <li>JUNDIAÍ</li>
    <li>JD NAÇÕES UNIDAS</li>
    <li>JOÃO LUIZ DE OLIVEIRA</li>
    <li>JARDIM SUIÇO</li>
    <li>PQ DAS NAÇÕES</li>
   

</td>

<td>

    <li>JD ANA PAULA</li> 
    <li>SÃO JOSÉ</li>
    <li>SANTA CECÍLIA</li>
    <li>IAPC</li>
    <li>CONJ. VILA VERDE</li>
    <li>BAIRRO BATISTA</li>
    <li>JD SANTANA</li>
    

</td>
</tr>
</table>
`).setStyle({

    fillColor:'#00008B',
    fillOpacity: 0.4,
    weight: 1,
    color: '#00008B'
})

let crR3 = L.layerGroup([r3,marcadorR3])


//ELEVADO JAIARA

let jaiara = L.geoJSON(relJaiara).bindPopup(`

<strong>AREA DE INFLUÊNCIA REL JAIARA</strong><hr>
<strong>Nº Total de economias: 18.377</strong><hr>
    

<table>
<tr>
<td>


    <li>JD. ALEXANDRINA</li> 
    <li>CONJ. MIRAGE</li>
    <li>ANEXO ITAMARATY</li>
    <li>VILA JAYARA</li>
    <li>VILA HARMONIA</li>
    <li>JD. PROGRESSO</li>
    <li>PQ IRACEMA</li>
   

</td>

<td>

    <li>JD DAS AMÉRICAS</li> 
    <li>B. ANTÔNIO FERNANDES</li>
    <li>JARDIM VILLAGE</li>
    <li>RES. MÔNICA BRAGA</li>
    <li>RES. VILLA BELLA</li>
    
    

</td>
</tr>
</table>
`).setStyle({

    fillColor:'#D8BFD8',
    fillOpacity: 0.4,
    weight: 2,
    color: '#D3D3D3'
})


let crJaiara = L.layerGroup([jaiara,marcadorEta])
// AREA DE INFLUENCIA DO BANDERAS 

      
var marcadorBandeiras = L.marker([-16.283327, -48.967083])
.bindPopup(`
    <strong>BANDEIRAS</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong><hr>
    <strong>MEDIDOR: </strong><hr>
    


`)
let bandeiras = L.geoJSON(areaBandeiras).bindPopup(`

<strong>AREA DE INFLUÊNCIA BANDEIRAS</strong><hr>
<strong>Nº Total de economias: 11.799</strong><hr>
    

<table>
<tr>
<td>


    <li>VILA JAYARA</li> 
    <li>BAIRRO BANDEIRAS</li>
    <li>ADRIANA PARQUE</li>
    <li>RES. JANDAIA</li>
    <li>RES. LAS PALMAS</li>
    <li>LABO DOS BURITIS</li>
    <li>RES. VERONA</li>
   

</td>


</tr>
</table>
`).setStyle({

    fillColor:'#B0E0E6',
    fillOpacity: 0.4,
    weight: 1,
    color: '#D3D3D3'
})

let crBandeiras = L.layerGroup([marcadorBandeiras, bandeiras])

//AREA AEROPORTO

 

let marcadorAeroporto = L.marker([-16.358706, -48.918266])

.bindPopup(`
    <strong>CR AEROPORTO</strong><hr>
    
    <strong>UC:  </strong>10018363332<hr>
    <strong>Medidor: </strong>11282733-1<hr>
    <strong>Endereço: </strong>Av. Pirineus esquina com Avenida Presidente Vargas, Setor Alvorada<hr>
    
`)


let rapAeroporto = L.geoJSON(areaRapAeroporto).bindPopup('RAP AEROPORTO').bindPopup(`

<strong>AREA DE INFLUÊNCIA RAP AEROPORTO</strong><hr>

<tr>
<td>


    <li>RESID. BOA ESPERANÇA</li> 
    
</td>


</tr>

`)
let relAeroporto = L.geoJSON(areRelAeroporto).bindPopup('REL AEROPORTO').bindPopup(`

<strong>AREA DE INFLUÊNCIA REL AEROPORTO</strong><hr>

    


<tr>
<td>


    <li>JARDIM ALVORADA</li> 
    <li>BAIRRO CAMPOS ELISIOS</li>
    <li>SETOR INDUSTRIAL AEROPORTO</li>
    <li>VILA OPERARIA</li>
    <li>JARDIM PLANALTO</li>
    <li>JARDIM VERA CRUZ</li>
    <li>PARQUE SAO CONRADO</li>
    <li>RESIDENCIAL GABRIELA</li>
    <li>COND. RESID. BELAS ARTES</li>
   

</td>


</tr>

`)
let crAeroporto = L.layerGroup([rapAeroporto, relAeroporto, marcadorAeroporto])

// AREA R2 - OFICIAIS

let marcadorR2 = L.marker([-16.299172, -48.947188])

.bindPopup(`
    <strong>CR R2 - OFICIAIS</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong>10010025896<hr>
    <strong>MEDIDOR: </strong>1451537-7<hr>
    <strong>ENDEREÇO: </strong>Avenida Universitária, nº5, Entrada da Vila dos Oficiais<hr>

    
    


`)

let R2 = L.geoJSON(r2).bindPopup(`

<strong>AREA DE INFLUÊNCIA DO R2</strong><hr>
<strong>Nº Total de economias: 35.821</strong><hr>
    

<table>
<tr>
<td>


    <li>Jd. ALEXANDRINA</li> 
    <li>Conj. MIRAGE</li>
    <li>ANEXO ITAMARATY</li>
    <li>VILA JAYARA</li>
    <li>VILA HARMONIA</li>
    <li>JARDIM PROGRESSO</li>
    <li>PQ IRACEMA</li>
   

</td>

<td>

    <li>JD DAS AMÉRICAS</li> 
    <li>B. ANTÔNIO FERNANDES</li>
    <li>JARDIM VILLAGE</li>
    <li>RES. MÔNICA BRAGA</li>
    <li>RES. VILLA BELLA</li>
    
    

</td>
</tr>
</table>
`)
// .setStyle({

//     fillColor:'#FFD700',
//     fillOpacity: 0.2,
//     weight: 1,
//     color: '#FFD700'
// })

let crR2 = L.layerGroup([R2,marcadorR2])

//AREA BURITIS

var marcadorBuritis = L.marker([-16.336436, -48.897335])
.bindPopup(`
    <strong>CR BURITIS</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong>10012792550<hr>
    <strong>MEDIDOR: </strong>11069771-5<hr>
    <strong>ENDEREÇO: </strong>Travessa 04, Qd. 11, Lt. 01, s/n, Residencial Buritis<hr>
    


`)
let buritis = L.geoJSON(areaBuritis).bindPopup(`

<strong>AREA DE INFLUÊNCIA DO BURITIS</strong><hr>
<strong>Nº Total de economias: </strong>714<hr>
    

<table>
<tr>
<td>
    <li>RESIDENCIAL FLAMBOYANT</li>
    <li>RESIDENCIAL BURITIS</li>
    
</td>


</tr>
</table>
`).setStyle({

    fillColor:'#FFD700',
    fillOpacity: 0.2,
    weight: 1,
    color: '#FFD700'
})

let crBuritis = L.layerGroup([marcadorBuritis,buritis])



//AREA ARCO VERDE 
var marcadorArcoVerde = L.marker([-16.366759, -48.940971])
.bindPopup(`
    <strong>ARCO VERDE</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong><hr>
    <strong>MEDIDOR: </strong><hr>
    
`)
let arcoVerde = L.geoJSON(areaArcoVerde).bindPopup('ARCO VERDE')
let crArcoVerde = L.layerGroup([arcoVerde,marcadorArcoVerde])

//FLOR DE LIZ / IBIRAPUERA

var marcadorFlorDeLis = L.marker([-16.345048, -48.905705])
.bindPopup(`
    <strong>FLOR DE LIZ</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong><hr>
    <strong>MEDIDOR: </strong><hr>
    
`)

let florDeLiz = L.geoJSON(areaFlorDeLiz).bindPopup('FLOR DE LIZ')
let crFlorDeLiz = L.layerGroup([marcadorFlorDeLis,florDeLiz])


//AREA ONOGAS
var marcadorOnogas = L.marker([-16.356344, -48.933663])
.bindPopup(`
    <strong>ONOGAS</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong><hr>
    <strong>MEDIDOR: </strong><hr>
    


`)

let onogas = L.geoJSON(areaOnogas).bindPopup('ONOGAS')
let crOnogas = L.layerGroup([onogas, marcadorOnogas])

//AREA LOURDES
var marcadorLourdes = L.marker([-16.346927, -48.920855])
.bindPopup(`
    <strong>LOURDES</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong><hr>
    <strong>MEDIDOR: </strong><hr>
    
`)
let lourdes = L.geoJSON(areaLourdes).bindPopup('LOURDES')

let crLourdes = L.layerGroup([marcadorLourdes,lourdes])

// AREA REL SAO JOAO
var marcadorSaoJoao = L.marker([-16.383606, -48.959548])
.bindPopup(`
    <strong>SÃO JOÃO</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong><hr>
    <strong>MEDIDOR: </strong><hr>
    


`)
let relSaoJoao = L.geoJSON(areaRelSaoJoao).bindPopup('REL SAO JOÃO')

let crSaoJoao = L.layerGroup([marcadorSaoJoao,relSaoJoao])


//AREA AYRTON SENNA

var marcadorAyrtonSenna = L.marker([-16.328043, -48.920431])
.bindPopup(`
    <strong>AYRTON SENNA</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong><hr>
    <strong>MEDIDOR: </strong><hr>
    


`)


let ayrtonSenna = L.geoJSON(areaAyrtonSenna).setStyle({
    fillColor:'black',
    fillOpacity:.2,
}).bindPopup('ITALIA')

let crAyrtonSenna = L.layerGroup([marcadorAyrtonSenna,ayrtonSenna])

//CR ANNA VILLE
var marcadorAnaVille = L.marker([-16.350412, -48.900284])
.bindPopup(`
    <strong>ANA VILLE</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong><hr>
    <strong>MEDIDOR: </strong><hr>
    


`)

let rapAnaville = L.geoJSON(areaRapAnaVille)
let relAnaVille = L.geoJSON(areaRelAnaville)

let crAnaville = L.layerGroup([rapAnaville, relAnaVille, marcadorAnaVille])


//CR SANTO ANDRE
var marcadorSantoAndre = L.marker([-16.359292, -48.960211])
.bindPopup(`
    <strong>SANTO ANDRÉ</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong><hr>
    <strong>MEDIDOR: </strong><hr>
    


`)
let santoAndre = L.geoJSON(areaSantoAndre)

// CR VIVIAN PARQUE


var marcadorVivianParque = L.marker([-16.379407, -48.982231])
.bindPopup(`
    <strong>SANTO ANDRÉ</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong><hr>
    <strong>MEDIDOR: </strong><hr>
    


`)
let rapVivianParque = L.geoJSON(areaVivianParque)
let rapCopacabana = L.geoJSON(areaCopacabana)
let crVivianParque = L.layerGroup([rapVivianParque, rapCopacabana, marcadorVivianParque])




// //CENTRO E RESERVAÇAO CALIXTÓPOLIS
// var marcadorCalixtopolis = L.marker([ -16.40244890556079, -48.97729822669524])

// .bindPopup(`
//     <strong>CENTRO DE RESERVAÇÃO CALIXTOPOLIS</strong><hr>
//     <strong>UNIDADE CONSUMIDORA: </strong><hr>
//     <strong>MEDIDOR: </strong><hr>
//     <strong>Nº Total de economias: 35.173</strong><hr>


// `)




// AREA VILA FORMOSA APOIADO
var marcadorVilaFormosa = L.marker([-16.353742, -48.937912])
.bindPopup(`
    <strong>VILA FORMOSA</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong><hr>
    <strong>MEDIDOR: </strong><hr>
    


`)
let rapVilaFormosa = L.geoJSON(areaRapVilaFormosa)
.bindPopup(`

<strong>AREA VILA FORMOSA APOIADO</strong><hr>
<strong>Nº Total de economias: 35.821</strong><hr>
<table>
<tr>
<td>


    <li>JARDIM ALEXANDRINA</li> 
    <li>CONJUNTO MIRAGE</li>
    <li>ANEXO ITAMARATY</li>
    <li>VILA JAYARA</li>
    <li>VILA HARMONIA</li>
    <li>JARDIM PROGRESSO</li>
    <li>PQ IRACEMA</li>
   

</td>

<td>

    <li>JD DAS AMÉRICAS</li> 
    <li>B. ANTÔNIO FERNANDES</li>
    <li>JARDIM VILLAGE</li>
    <li>RES. MÔNICA BRAGA</li>
    <li>RES. VILLA BELLA</li>
    
    

</td>
</tr>
</table>
`).setStyle({

    fillColor:'#6495ED',
    fillOpacity: 0.5,
    weight: 2,
    color: '#6495ED'
})
let crVilaFormosa = L.layerGroup([marcadorVilaFormosa,rapVilaFormosa])


// CR RECANTO DO SOL
var marcadorRecantoSol = L.marker([-16.284307, -48.937594])
.bindPopup(`
    <strong>RECANTO DO SOL</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong><hr>
    <strong>MEDIDOR: </strong><hr>
    


`)
let rapRecantoDoSol = L.geoJSON(areaRecantoDoSol)
let crRecantoDoSol = L.layerGroup([rapRecantoDoSol, marcadorRecantoSol])


// CR MARIANA 
var marcadorMariana = L.marker([-16.361773, -48.989256])
.bindPopup(`
    <strong>MARIANA</strong><hr>
    <strong>UNIDADE CONSUMIDORA: </strong><hr>
    <strong>MEDIDOR: </strong><hr>
    


`)

let rapMariana = L.geoJSON(areaRapMariana).bindPopup('APOIADO')
let relMariana = L.geoJSON(areaRelMariana).bindPopup('ELEVADO')

let crMariana = L.layerGroup([rapMariana, relMariana, marcadorMariana])


let areaDaiaSaoJoao = L.geoJSON(relDaia)

//ALDEIA DOS SONHOS

let aldeiaArea1 = L.geoJSON(aldeia1)
let aldeiaArea2 = L.geoJSON(aldeia2)
let marcadorAldeia = L.marker([-16.256756, -49.004697]).bindPopup(`
<strong>CR ALDEIA DOS SONHOS</strong><hr>
<a href='#'><img src='./json/aldeia/aldeia.jpeg' width=300px;  /></a></ hr></br></hr>
<strong>UNIDADE CONSUMIDORA: </strong>21324580<hr>

<strong>MEDIDOR: </strong>10384768-5<hr>
<strong>ENDEREÇO: </strong>Rua Araguaia, Qd. 24, Lt. 3/4 - Residencial Aldeia dos Sonhos<hr>
<a href='https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1bq2OB1NdtxXd0QwMoDFM3A3DVvYq-NQr' target='_blanck'>CROQUI</a>



`)

let areaAldeia = L.layerGroup([aldeiaArea1, aldeiaArea2, marcadorAldeia])


// SATÉLITE GOOGLE



//====================================================

function highlightFeature(e){
    var layer = e.target

    layer.setStyle({
        weight:5,
        color: '',
        dashArray: '',
        fillOpacity: '.2'

    })

    if(!L.Browser.ie && !L.Browser.opera && !L.Browser.edge){
        layer.bringToFrond()
    }
    // info.update(layer.feature.properties)
}


//===================================================



function resetHighlight(e){

    geojson.resetStyle(e.target)
    // info.update()
}



let bairros = L.geoJSON(setores,{

    
    onEachFeature: function(feature, layer){


        
        // layer.on({
        //     mouseover: highlightFeature,
        //     mouseout: resetHighlight,


            
        // })
        layer.bindPopup(feature.properties.Name)
        
        // layer.setStyle(feature.options.color='red')
    }
}).setStyle({

    fillColor:'',
    fillOpacity: 0,
    weight: 1,
    // color: '#fff'
})





let baseMaps = {

  "Dark": Dark,

  "Open Streat Map": osm,
  "Google Maps": googleStreets,
  "Google Satélite": googleSat
  
}


let overLayMaps = {

    "SETORES": bairros,
    
    "AEROPORTO": crAeroporto,
    "ALDEIA DOS SONHOS": areaAldeia,
    "ALPHAVILLE": crAlphaville,
  
  "R1 - MATINHA": crMatinha,
  "R2 - OFICIAIS": crR2,
  "R3  - JARDIM AMÉRICA": crR3,
  "REL JAYARA": crJaiara,
  "BANDEIRAS": crBandeiras,
  "RAP VILA FORMOSA": crVilaFormosa,    
  "REL DAIA / BARRILETE SÃO JOÃO": areaDaiaSaoJoao,
 "AREA ETA 1 / ETA 2": areaTotalEta1,
 "AREA ETA 3": crEta3,
  "CR CALIXTÓPOLIS": crCalixtopoliis,
  "CR MARIANA": crMariana,
  "RECANTO DO SOL": crRecantoDoSol,
  "RAP VILA FORMOSA": crVilaFormosa,
  "CR VIVIAN PARQUE": crVivianParque,
  "ANA VILLE": crAnaville,
  "AYRTON SENNA": crAyrtonSenna,
  "REL SÃO JOÃO": crSaoJoao,
  "LOURDES": crLourdes,
  "ONOGÁS": crOnogas,
  "FLOR DE LIZ": crFlorDeLiz,
  "ARCO VERDE":crArcoVerde,
  "BURITIS": crBuritis,
  }

L.control.layers(baseMaps, overLayMaps).addTo(map)
L.Control.geocoder().addTo(map);


console.log(setores)