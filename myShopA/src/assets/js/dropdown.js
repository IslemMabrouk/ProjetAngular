class DropdownList {
    constructor(idSelect, liste) {
        this.select = document.getElementById(idSelect);

        liste.forEach(opt => {
            this.select.innerHTML += `
    <option value="${opt.id}" >${opt.nom}</option>
    `;
        });

    }
}