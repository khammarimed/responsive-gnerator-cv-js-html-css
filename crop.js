let fileInput = document.getElementById("file");
let image = document.getElementById("image");
var valprint = false;
const previewButton = document.getElementById("preview");
const previewImage = document.getElementById("preview-image");
const previewImage1 = document.getElementById("previewImage1");
const preview_contenair = document.getElementById("preview_contenair");
const valimg = document.getElementById('valimg');
let cropper = "";
let fileName = "";

fileInput.onchange = () => {
  preview_contenair.src = "";
  
  let reader = new FileReader();
  
  reader.readAsDataURL(fileInput.files[0]);

  reader.onload = () => {
    image.setAttribute("src", reader.result);
    if (cropper) {
      cropper.destroy();
    }
   
    cropper = new Cropper(image, {
      aspectRatio: 1,
    });
    previewButton.classList.remove("hide");
  };
  fileName = fileInput.files[0].name.split(".")[0];
};

previewButton.addEventListener("click", (e) => {
  e.preventDefault();
  let imgSrc = cropper.getCroppedCanvas({}).toDataURL();
  // Set preview
  valimg.style.display = "none";
  preview_contenair.style.filter = "none";
  previewImage.style.filter = "none";
  previewImage1.style.filter = "none";
  previewImage1.style.borderColor = "green";
  valprint = true;
  previewImage.src = imgSrc;
  previewImage1.src = imgSrc;
});

window.onload = () => {
  previewButton.classList.add("hide");
};

function afchi_wra() {
  var wrapper = document.getElementById('wrapper');
  wrapper.style.display = 'block';
}

function sup_wra() {
  let wrapper = document.getElementById('wrapper');
  wrapper.style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
  const additionalFields = document.getElementById('additionalFields');
  const displayAdditionalInfo = document.getElementById('displayAdditionalInfo');

  function updateFormationDisplay() {
    const formations = document.querySelectorAll('.formation-group');
    displayAdditionalInfo.innerHTML = '';
    formations.forEach((formation, index) => {
      const establishment = formation.querySelector('input[name^="establishment"]').value;
      const startDate = formation.querySelector('input[name^="startDate"]').value;
      const endDate = formation.querySelector('input[name^="endDate"]').value;
      const description = formation.querySelector('textarea[name^="description"]').value;

      const displayElement = document.createElement('div');
      displayElement.innerHTML = `
        <div class="ht">
          <div class="ht1"><p style="font-size: 0.6em;padding-top: 0.6em;margin-left: -0.75em;color: #414141;"> de ${startDate} a ${endDate} </p></div>
          <div class="ht2"><p><i class="fa fa-circle" aria-hidden="true"></i> ${establishment} </p><p style="font-size: 0.6em; margin-left: 1.3em;">${description}</p></div>
        </div>
      `;
      displayAdditionalInfo.appendChild(displayElement);
    });
  }

  document.getElementById('addFormationButton').addEventListener('click', () => {
    const formationCount = document.querySelectorAll('.formation-group').length + 1;

    const formationGroup = document.createElement('div');
    formationGroup.classList.add('formation-group');
    formationGroup.innerHTML = `
      <div class="klm">
        <div class="form-group1">
          <div>
            <label for="startDate${formationCount}">Date de début:</label>
            <input class="form-control" type="date" id="startDate${formationCount}" name="startDate${formationCount}">
          </div>
          <div>
            <label for="endDate${formationCount}">Date de fin:</label>
            <input class="form-control" type="date" id="endDate${formationCount}" name="endDate${formationCount}">
          </div>
        </div>
        <div class="form-group"></div>
        <div class="form-group">
          <label for="establishment${formationCount}">Formation:</label>
          <input class="form-control" type="text" id="establishment${formationCount}" name="establishment${formationCount}">
        </div>
        <div class="form-group">
          <label for="description${formationCount}">description d'une formation:</label>
          <textarea class="form-control" id="description${formationCount}" name="description${formationCount}"></textarea>
        </div>
        <button type="button" class="remove-button">Supprimer</button>
      </div>
    `;
    additionalFields.appendChild(formationGroup);

    formationGroup.querySelector('.remove-button').addEventListener('click', () => {
      additionalFields.removeChild(formationGroup);
      updateFormationDisplay();
    });

    formationGroup.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', updateFormationDisplay);
    });
  });

  const experienceContainer = document.getElementById('experienceContainer');
  const experienceDisplayContainer = document.getElementById('experienceDisplayContainer');

  function updateExperienceDisplay() {
    const experiences = document.querySelectorAll('.experience-group');
    experienceDisplayContainer.innerHTML = '';
    experiences.forEach((experience, index) => {
      const jobTitle = experience.querySelector('input[name^="jobTitle"]').value;
      const company = experience.querySelector('input[name^="company"]').value;
      const startDate = experience.querySelector('input[name^="startDate"]').value;
      const endDate = experience.querySelector('input[name^="endDate"]').value;
      const jobDescription = experience.querySelector('textarea[name^="jobDescription"]').value;

      const displayElement = document.createElement('div');
      displayElement.innerHTML = `
        <div class="ht">
          <div class="ht1"><p style="font-size: 0.6em;padding-top: 0.6em;margin-left: -0.75em;color: #414141;"> de ${startDate} a ${endDate} </p><i style="font-size: 0.8em;" class="fa fa-building" aria-hidden="true"></i><i style="font-size: 0.66em;">${company} </i></div>
          <div class="ht2"><p><i class="fa fa-circle" aria-hidden="true"></i> ${jobTitle} </p>
            <p style="font-size: 0.6em; margin-left: 1.3em;">${jobDescription}</p></div>
        </div>
      `;
      experienceDisplayContainer.appendChild(displayElement);
    });
  }

  function addExperienceForm() {
    const experienceCount = document.querySelectorAll('.experience-group').length + 1;

    const experienceGroup = document.createElement('div');
    experienceGroup.classList.add('experience-group');
    experienceGroup.innerHTML = `
      <div class="klm">
        <div class="form-group">
          <label for="jobTitle${experienceCount}">Intitulé du poste:</label>
          <input class="form-control" type="text" id="jobTitle${experienceCount}" name="jobTitle${experienceCount}">
        </div>
        <div class="form-group">
          <label for="company${experienceCount}">Entreprise:</label>
          <input class="form-control" type="text" id="company${experienceCount}" name="company${experienceCount}">
        </div>
        <div class="form-group1">
          <div class="form-group">
            <label for="startDate${experienceCount}">Date de début:</label>
            <input class="form-control" type="date" id="startDate${experienceCount}" name="startDate${experienceCount}">
          </div>
          <div class="form-group">
            <label for="endDate${experienceCount}">Date de fin:</label>
            <input class="form-control" type="date" id="endDate${experienceCount}" name="endDate${experienceCount}">
          </div>
        </div>
        <div class="form-group">
          <label for="jobDescription${experienceCount}">Description du poste:</label>
          <textarea class="form-control" id="jobDescription${experienceCount}" name="jobDescription${experienceCount}"></textarea>
        </div>
        <button type="button" class="remove-button">Supprimer</button>
      </div>
    `;
    experienceContainer.appendChild(experienceGroup);

    experienceGroup.querySelector('.remove-button').addEventListener('click', () => {
      experienceContainer.removeChild(experienceGroup);
      updateExperienceDisplay();
    });

    experienceGroup.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', updateExperienceDisplay);
    });
  }

  document.getElementById('addExperienceButton').addEventListener('click', addExperienceForm);
});
