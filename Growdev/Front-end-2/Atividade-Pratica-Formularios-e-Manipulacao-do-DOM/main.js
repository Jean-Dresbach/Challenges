const form = document.getElementsByTagName("form")[0];

const submit = document.getElementById("submit");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.name.value;
    const address = form.address.value;
    const city = form.city.value;
    const state = form.state.value;
    const jobNature = form.jobNature.value;
    const miniCurriculo = form.miniCurriculo.value;
    const arrayCheckBoxes = [];
    const checkBoxes = document.querySelectorAll('#areaOfInterest>input[type="checkbox"]:checked');
    if (checkBoxes.length === 0) {
        alert("Você deve marcar pelo menos uma área de interesse!")
        return;
    }
    checkBoxes.forEach(box => arrayCheckBoxes.push(box.value))
    const user = {
        personalData: {
            name,
            address,
            city,
            state
        },
        professionalData: {
            jobNature,
            areaOfInterest: arrayCheckBoxes,
            miniCurriculo
        }
    }
    console.log(user);
});

