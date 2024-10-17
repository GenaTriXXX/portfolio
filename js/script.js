const skills = {
    data: [
        {skillName: 'HTML', level: 40, cssClass: 'skill-item_html', iconName: 'skill-html.svg'},
        {skillName: 'CSS', level: 40, cssClass: 'skill-item_css', iconName: 'skill-css.svg'},
        {skillName: 'Python', level: 10, cssClass: 'skill-item_python', iconName: 'skill-python.svg'},
        {skillName: 'C++', level: 80, cssClass: 'skill-item_cpp', iconName: 'skill-c++.svg'}
    ],
    generateList: function(parentElement){
        let skillList = document.querySelector(parentElement)

        if(!skillList) return;

        this.data.forEach((item) => {
            const dt = document.createElement('dt');
            const dd = document.createElement('dd');
            const div = document.createElement('div');
            
            dt.classList.add('skill-item');
            dt.classList.add(item.cssClass);
            dd.classList.add('skill-level');
            
            dt.textContent = item.skillName;
        
            div.textContent = `${item.level}%`;
            div.style.width = `${item.level}%`;
            
            dd.appendChild(div);
            
            skillList.appendChild(dt);
            skillList.appendChild(dd);
        
            dt.style.backgroundImage = `url(../img/${item.iconName})`
          });
    }
}


skills.generateList('dl.skill-list');