const skills = {
    data: [
        { skillName: 'HTML', level: 40, iconName: 'skill-html.svg' },
        { skillName: 'CSS', level: 30, iconName: 'skill-css.svg' },
        { skillName: 'Python', level: 10, iconName: 'skill-python.svg' },
        { skillName: 'C++', level: 80, iconName: 'skill-c++.svg' }
    ],
    generateList: function (parentElementSelector) {

        let skillList = document.querySelector(parentElementSelector)

        if (!skillList) return;

        skillList.innerHTML = '';

        this.data.forEach((item) => {
            const dt = document.createElement('dt');
            const dd = document.createElement('dd');
            const div = document.createElement('div');

            dt.classList.add('skill-item');
            dd.classList.add('skill-level');

            dt.textContent = item.skillName;

            div.textContent = `${item.level}%`;
            div.style.width = `${item.level}%`;

            dd.appendChild(div);

            skillList.append(dt, dd);

            dt.style.backgroundImage = `url(img/${item.iconName})`
        });
    },
    sortMode: null,
    SortList: function (type) {
        if (skills.sortMode == null || skills.sortMode != type) {
            skills.data.sort(getComparer(type));
            console.log(`отсортировали данные по ${type}`);
        }
        else {
            skills.data.reverse();
            console.log('инвертировали порядок сортировки');
        }

        skills.sortMode = type;
        skills.generateList('dl.skill-list');
    }
}

skills.generateList('dl.skill-list');

let sortBtnsBlock = document.querySelector('div.Buttons-Sort');

sortBtnsBlock.addEventListener('click', (e) => {
    let target = e.target;

    if (target.nodeName == 'BUTTON') {
        switch (target.dataset.type) {
            case 'name':
                skills.SortList('skillName');
                break;
            case 'level':
                skills.SortList('level');
                break;

            default:
                console.log('SUR');
        }
    }

});

function getComparer(prop) {
    return function (a, b) {
        if (a[prop] < b[prop]) {
            return -1;
        }
        if (a[prop] > b[prop]) {
            return 1;
        }

        return 0;
    }
}

function Compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }

    return 0;
}

let menuBlock = document.querySelector('nav.main-nav');
let closeButnBlock = document.querySelector('button.nav-btn_close');
console.log(menuBlock);
console.log(closeButnBlock);

const menu = {
    open: function () {
        menuBlock.classList.add('main-nav_closed');
        closeButnBlock.classList.remove('nav-btn_close');
        closeButnBlock.classList.add('nav-btn_burger');
        closeButnBlock.innerHTML = '<span class="visually-hidden">Открыть меню</span>';
    },
    close: function () {
        menuBlock.classList.remove('main-nav_closed');
        closeButnBlock.classList.remove('nav-btn_burger');
        closeButnBlock.classList.add('nav-btn_close');
        closeButnBlock.innerHTML = '<span class="visually-hidden">Закрыть меню</span>';
    }
}

closeButnBlock.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-btn_burger')) {
        menu.close();
    }
    else {
        menu.open();
    }
})