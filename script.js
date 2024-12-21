// Partie 1: Contrôle de la saisie des champs
    //les fonctions de controle de siasir
document.querySelector('#e_maile').addEventListener('blur',function(){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const email= document.querySelector('#e_maile');

    if(emailRegex.test(email.value)){
        email.classList.remove('is-invalid');
        email.classList.add('is-valid'); 
        console.log('yees') 
    }
    else{
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        console.log('no')
    }
    if(email.value==''){
        email.classList.remove('is-valid');
        email.classList.remove('is-invalid');
    }
});
document.querySelector('#nom').addEventListener('blur',function(){
    const regex = /^[a-zA-Z ]{2,30}$/;
    const nom= document.querySelector('#nom');

    if(regex.test(nom.value)){
        nom.classList.remove('is-invalid');
        nom.classList.add('is-valid'); 
        console.log('yees') 
    }
    else{
        nom.classList.remove('is-valid');
        nom.classList.add('is-invalid');
        console.log('no')
    }
});
function scrin(){
    var cv =document.getElementById('cv');
    var formulaires =document.getElementById('formulaires');
    console.log(formulaires)
    cv.classList.toggle('cvn');
    formulaires.classList.toggle('formulairesn');
}

document.querySelector('#tel').addEventListener('blur', function(){
    const regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    const tel = document.querySelector('#tel');

    if (regex.test(tel.value) ) {
        tel.classList.remove('is-invalid');
        tel.classList.add('is-valid'); 
        console.log('yees') ;
    } else {
        tel.classList.remove('is-valid');
        tel.classList.add('is-invalid');
        console.log('no');
    }
});

var focusedInputId = null;
function getInputIdOnFocus(event) {
    focusedInputId = event.target.id;
}

document.querySelectorAll('input').forEach(function(input) {
    input.addEventListener('kydown', function(event) {
        getInputIdOnFocus(event);
        console.log("ID de l'input:", focusedInputId);
    });
});

document.querySelector('#adresse').addEventListener('blur',function(){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const adresse= document.querySelector('#adresse');

    if(!adresse.value==''){
        adresse.classList.remove('is-invalid');
        adresse.classList.add('is-valid'); 
        console.log('yees') 
    }
    else{
        adresse.classList.remove('is-valid');
        adresse.classList.add('is-invalid');
        console.log('no')
    }
 
});



(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  var indice = 0;
  function addcompetence() {
    var parentDiv = document.getElementById('competence');
    var element = `<span><i class="fa fa-dot-circle-o" aria-hidden="true"></i><span><input style="margin:3px;" type="text" id="competence${indice}" class="form-control" >`;
    var newDiv = document.createElement('div');
    newDiv.innerHTML = element;
    console.log(newDiv);
    newDiv.className = '';
    parentDiv.appendChild(newDiv);
    var paren = document.getElementById('competence_1');
    var elemen = `<li id="competence${indice}1"></li>`;
    var newDi = document.createElement('div');
    newDi.innerHTML = elemen;
    console.log(newDi);
    newDi.className = '';
    console.log(paren)
    paren.appendChild(newDi, paren.lastElementChild);
    indice += 1;
    var newInput = newDiv.querySelector('input');
    newInput.addEventListener('focus', function(event) {
        getInputIdOnFocus(event);
        console.log("ID de l'input:", focusedInputId);
        console.log(typeof(focusedInputId))
        document.getElementById(focusedInputId).addEventListener('keydown',ecrire(focusedInputId));   
        
    });
   
}

function removeCompetence() {
    var parentDiv = document.getElementById('competence');
    var lastChild = parentDiv.lastElementChild;
    if (lastChild) {
        parentDiv.removeChild(lastChild);
        
    } 
    var parentDiv = document.getElementById('competence_1');
    var lastChild = parentDiv.lastElementChild;
    if (lastChild) {
        parentDiv.removeChild(lastChild);
        
    } 
}
//-----------------longe
var indice2 = 0;
function addlangues() {
    console.log('jhdgdj')
  var parentDiv = document.getElementById('langue');
  var element = `<span><i class="fa fa-dot-circle-o" aria-hidden="true"></i><span><input style="margin:3px;" type="text" id="langue${indice2}" class="form-control" >`;
  var newDiv = document.createElement('div');
  newDiv.innerHTML = element;
  console.log(newDiv);
  newDiv.className = '';
  parentDiv.appendChild(newDiv);
  var paren = document.getElementById('langue_1');
  var elemen = `<li id="langue${indice2}1"></li>`;
  var newDi = document.createElement('div');
  newDi.innerHTML = elemen;
  console.log(newDi);
  newDi.className = '';
  console.log(paren)
  paren.appendChild(newDi, paren.lastElementChild);
  indice2 += 1;
  var newInput = newDiv.querySelector('input');
  newInput.addEventListener('focus', function(event) {
      getInputIdOnFocus(event);
      console.log("ID de l'input:", focusedInputId);
      console.log(typeof(focusedInputId))
      document.getElementById(focusedInputId).addEventListener('keydown',ecrire(focusedInputId))
;   
      
      
  });
 
}


function removelangues() {
    var parentDiv = document.getElementById('langue');
    var lastChild = parentDiv.lastElementChild;
    if (lastChild) {
        parentDiv.removeChild(lastChild);
        
    } else {
        
    }
    var parentDiv = document.getElementById('langue_1');
    var lastChild = parentDiv.lastElementChild;
    if (lastChild) {
        parentDiv.removeChild(lastChild);
        
    } 
}

function ecrire(elemente){
    let div = document.getElementById(elemente);
    let div1 =document.getElementById(elemente+'1');
    div.onkeyup = ()=>{
        div1.innerHTML = div.value ;
    }
    
}
function getInputIdOnFocus(event) {
    focusedInputId = event.target.id;
    return focusedInputId
}


document.querySelectorAll('input').forEach(function(input) {
    input.addEventListener('focus', function(event) {
        getInputIdOnFocus(event);
        console.log("ID de l'input:f", focusedInputId);
       
        
     
    });
}); 
// Partie 2: Affichage du CV

    // les Fonctions de mise à jour les information

var nom1 = document.getElementById('nom1');
var nom = document.getElementById('nom');
nom.onkeydown = function(){
    nom.onkeyup = function(){
        nom1.innerHTML='<span><i class="fa fa-user-circle" aria-hidden="true"></i> </span>'+nom.value ;
    }
}
e_maile.onkeydown = function(){
    e_maile.onkeyup =function(){
        e_maile1.innerHTML='<span><i class="fa fa-envelope" aria-hidden="true"></i></span> '+e_maile.value ;
    }
}
var tel1 = document.getElementById('tel1');
var tel = document.getElementById('tel');
tel.onkeydown = function(){
    tel.onkeyup =function(){
        tel1.innerHTML='<i class="fa fa-phone" aria-hidden="true"></i> '+tel.value ;
    }
}
var adresse1 = document.getElementById('adresse1');
var adresse = document.getElementById('adresse');
adresse.onkeydown = function(){
    adresse.onkeyup =function(){
        adresse1.innerHTML='<i class="fa fa-home" aria-hidden="true"></i> '+adresse.value ;
    }
}
var root = document.querySelector(':root');
var root_style = getComputedStyle(root);
var x =parseInt(root_style.getPropertyValue('--size_x'));
var y =parseInt(root_style.getPropertyValue('--size_y'));
var font_size =parseInt(root_style.getPropertyValue('--font_size'));
var c =17/640 ;
let a = parseInt(root_style.getPropertyValue('--font_size'));
function font_talle(t){
    a =c*x;
    if (t=='plus'){
        a +=0.3;
    }
    if (t=='minus'){
        a -=0.3;
    }
    c = a/x ;
    console.log(a)
    root.style.setProperty('--font_size',`${a}px`);
}
  
function zoom(z){
    console.log('a1=',a)
    console.log('c=',c)
    if (z=='z_plus'){
        x +=40 ;
        y = x*1.4;
        font_size=x*c;
    }
    if (z=='z_minus'){
        x -=40;
        y = x*1.4;
        font_size=x*c;
    }
 
 root.style.setProperty('--size_x',`${x}px`);
 root.style.setProperty('--size_y',`${y}px`);
 root.style.setProperty('--font_size',`${font_size}px`);
    console.log(`${x}px`)
}

// Partie 3: Validation du formulaire et imprime cv

function imprimerDiv() {
    
    let valimg =document.getElementById('valimg');
    let invalidelist = document.querySelectorAll('.is-invalid');
    let inputlist = document.querySelectorAll('input');
    let textarealist=document.querySelectorAll('textarea');
    let validimg = true;
    let valchamp =true;
    let valinfo=true;
    let valinfovid=true;
    let imprime =true;

    
    for (i= 0; i<=3; i++){

        console.log('i:',i)
        console.log('kl:',)
        if(inputlist[i].value==''){
            inputlist[i].classList.add('is-invalid'); 
            valinfovid=false;
            console.log('rr')
        }else{
            if(inputlist[i].classList.contains('is-invalid')){
                valinfo=false;
                console.log('gg :',inputlist[3])
                
            }
        
        }
        
    }

    for (i=0; i<textarealist.length;i++){
        if(textarealist[i].value==''){
            valchamp=false;
            textarealist[i].classList.add('is-invalid');  
        }
    }
    for (i= 4; i<inputlist.length; i++) {
        
        if (inputlist[i].value==''){
            valchamp=false;
            inputlist[i].classList.add('is-invalid');
            console.log('l:',inputlist[i].classList) 
        } 
    }
    if(!valprint){
        valimg.style.display="block";
        preview_contenair.style.filter="drop-shadow(0px 0px 5px red) invert(5%)";
        previewImage1.style.borderColor="red";
        imprime=false;
    }
  
     function erroralert(){
    
    if(!valchamp||!valinfovid){
            return 'Attention, certains champs sont vides.';
        }
    if (!valinfo&&!valchamp){
        return 'Attention, certaines informations sont incorrectes et certains champs sont vides.,';
    }
    if (!valinfo){
        return 'Attention, certaines informations sont incorrectes ';
    }
   
    if(!imprime){
        return 'choisure un photo!';
    }

  }
  console.log('inputlis[4}=',inputlist[4])
  if(!valchamp||!valinfo||!imprime||!valinfovid){
    alert(erroralert())
  }
    

    if (imprime && valinfo&&valchamp&&valinfovid){
        root.style.setProperty('--size_x',`${1080}px`);
        root.style.setProperty('--size_y',`${1080*1.4}px`);
        root.style.setProperty('--font_size',`${1080*c}px`);
        print();
        root.style.setProperty('--size_x',`${x}px`);
        root.style.setProperty('--size_y',`${y}px`);
        root.style.setProperty('--font_size',`${x*c}px`);
    }
        function removeInvalidClass(event) {
            const element = event.target;
            const excludedIds = ['e_maile', 'nom', 'tel', 'adresse'];
            if (!excludedIds.includes(element.id) && element.value.trim() !== '') {
                element.classList.remove('is-invalid');
            }
        }
        const allInputs = document.querySelectorAll('input:not(#e_maile):not(#nom):not(#tel):not(#adresse)');
        const allTextareas = document.querySelectorAll('textarea');
        allInputs.forEach(input => {
            input.addEventListener('blur', removeInvalidClass);
        });
        
        allTextareas.forEach(textarea => {
            textarea.addEventListener('blur', removeInvalidClass);
        });
}
p_profile.onkeydown = function(){
    console.log('ffff')
    p_profile.onkeyup = function(){
        var p_profile1 = document.getElementById('p_profile1');
        p_profile1.innerHTML=p_profile.value ;
        console.log('zz',p_profile.value)
    }
}   
document.addEventListener("DOMContentLoaded", () => {
    const fontSelect = document.getElementById("fontSelect");
    fontSelect.addEventListener("change", () => {
        const selectedFont = fontSelect.value;
        changeFontFamily(selectedFont);
        
    });
  });
  function changeFontFamily(fontFamily) {
    root.style.setProperty('--font-familly',fontFamily);
  }
  var indice3 = 0;
  function addformation() {
    var parentDiv = document.getElementById('formation');
    var element = `<span><i class="fa fa-dot-circle-o" aria-hidden="true"></i><span><input style="margin:3px; " type="text" id="formation${indice3}" class="form-control" >`;
    var newDiv = document.createElement('div');
    newDiv.innerHTML = element;
    console.log(newDiv);
    newDiv.className = '';
    parentDiv.appendChild(newDiv);
    var paren = document.getElementById('formation_1');
    var elemen = `<li id="formation${indice3}1"></li>`;
    var newDi = document.createElement('div');
    newDi.innerHTML = elemen;
    console.log(newDi);
    newDi.className = '';
    console.log(paren)
    paren.appendChild(newDi, paren.lastElementChild);
    indice3 += 1;
    var newInput = newDiv.querySelector('input');
    newInput.addEventListener('focus', function(event) {
        getInputIdOnFocus(event);
        console.log("ID de l'input:", focusedInputId);
        console.log(typeof(focusedInputId))
        document.getElementById(focusedInputId).addEventListener('keydown',ecrire(focusedInputId));      
    }); 
}
