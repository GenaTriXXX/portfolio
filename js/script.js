const skills = {
    data: [
        {skillName: 'HTML', level: 40, iconName: 'skill-html.svg'},
        {skillName: 'CSS', level: 40, iconName: 'skill-css.svg'},
        {skillName: 'Python', level: 10, iconName: 'skill-python.svg'},
        {skillName: 'C++', level: 80, iconName: 'skill-c++.svg'}
    ],
    generateList: function(parentElementSelector){
        let skillList = document.querySelector(parentElementSelector)

        if(!skillList) return;

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
    }
}


skills.generateList('dl.skill-list');