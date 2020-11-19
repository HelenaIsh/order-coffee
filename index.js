let beverageNumber = 2;

const form = document.querySelector('.beverage').cloneNode(true);
let fieldSets = document.getElementsByTagName("fieldset");

document.querySelector('.add-button').addEventListener('click', function() {
        addForm();
        addClose();
});

function addForm(){
    let fieldSet = document.querySelector("fieldset:last-of-type");
    let newForm = form.cloneNode(true);
    fieldSet.after(newForm);
    newForm.querySelector('.beverage-count').innerHTML = `Напиток №${beverageNumber}`;
    beverageNumber++;
}

function addClose() {
    if (fieldSets.length > 1) {
       for (let fieldSet of fieldSets) {
           if (fieldSet.getElementsByClassName('close').length === 0){
               let close = document.createElement('div');
               close.classList.add('close');
               addEventDelete(close);
               fieldSet.append(close);
           }
       }
    }
}
function addEventDelete (node) {
    node.addEventListener('click', function(event) {
        let field = event.target.parentNode;
        deleteField(field);
    });
}

function deleteField (fieldSet) {
    fieldSet.remove();
    if (fieldSets.length === 1) {
        fieldSets[0].querySelector('.close').remove();
    }
}