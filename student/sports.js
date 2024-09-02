document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownContent = document.getElementById('dropdownContent');
    const treeSection = document.getElementById('treeSection');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupDesc = document.getElementById('popup-desc');
    const popupCareers = document.getElementById('popup-careers');
    const popupClose = document.getElementById('popup-close');
    const popupExtra = document.getElementById('popup-extra');   
const fieldData = {
    sports: `
      <ul>
        <li>
          <span data-desc="Physical Education focuses on sports, fitness, and health-related topics." data-careers="Sports Coach, Fitness Trainer, Sports Manager">Physical Education</span>
          <ul>
            <li><span data-desc="Sports Science involves the study of human movement and exercise physiology." data-careers="Sports Scientist, Exercise Physiologist, Sports Nutritionist">Sports Science</span></li>
            <li><span data-desc="Sports Management includes the administration and organization of sports teams and events." data-careers="Sports Manager, Event Coordinator, Athletic Director">Sports Management</span></li>
            <li><span data-desc="Body Building involves training and developing muscular strength and endurance." data-careers="Body Builder, Personal Trainer, Fitness Coach">Body Building</span></li>
            <li><span data-desc="Cricket is a team sport played with a bat and ball." data-careers="Cricket Player, Coach, Umpire">Cricket</span></li>
            <li><span data-desc="Football is a team sport played with a round ball." data-careers="Football Player, Coach, Referee">Football</span></li>
            <li><span data-desc="Table Tennis is a racket sport played on a table." data-careers="Table Tennis Player, Coach, Umpire">Table Tennis</span></li>
            <li><span data-desc="Badminton is a racket sport played on a court." data-careers="Badminton Player, Coach, Umpire">Badminton</span></li>
            <li><span data-desc="Volleyball is a team sport played with a ball on a court." data-careers="Volleyball Player, Coach, Referee">Volleyball</span></li>
            <li><span data-desc="Running involves racing or jogging as a form of exercise or competition." data-careers="Runner, Coach, Sports Manager">Running</span></li>
          </ul>
        </li>
        <li>
          <span data-desc="Sports Coaching involves training and developing athletes to enhance performance." data-careers="Sports Coach, Athletic Trainer, Performance Analyst">Sports Coaching</span>
        </li>
      </ul>
    `,
    arts: `
      <ul>
        <li>
          <span data-desc="Arts involves various forms of creative expression, including visual arts and performing arts." data-careers="Artist, Art Director, Curator">Arts</span>
          <ul>
            <li><span data-desc="Visual Arts encompasses painting, sculpture, and graphic design." data-careers="Painter, Sculptor, Graphic Designer">Visual Arts</span></li>
            <li><span data-desc="Performing Arts includes theater, dance, and music." data-careers="Actor, Dancer, Musician">Performing Arts</span></li>
            <li><span data-desc="Art History studies historical artworks and their cultural significance." data-careers="Art Historian, Museum Curator, Art Critic">Art History</span></li>
            <li><span data-desc="Designing involves creating visual elements for various mediums." data-careers="Graphic Designer, UI/UX Designer, Fashion Designer">Designing</span></li>
            <li><span data-desc="Modeling involves creating three-dimensional representations of objects or characters." data-careers="3D Modeler, Fashion Model, Architectural Modeler">Modeling</span></li>
          </ul>
        </li>
      </ul>
    `
  };
  
    dropdownButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const field = this.getAttribute('data-field');
            treeSection.innerHTML = `<div class="tree">${fieldData[field]}</div>`;
            dropdownContent.classList.remove('show');

            // Add hover functionality for new tree items
            const spans = document.querySelectorAll('.tree li span');
            spans.forEach(span => {
                span.addEventListener('mouseenter', function () {
                    const title = this.textContent;
                    const description = this.getAttribute('data-desc');
                    const careers = this.getAttribute('data-careers').split(', ');

                    popupTitle.textContent = title;
                    popupDesc.textContent = description;
                    popupCareers.innerHTML = careers.map(career => `<li>${career}</li>`).join('');

                    const extraInfo = getExtraInfo(title);
                    popupExtra.textContent = extraInfo;

                    popup.style.display = 'block';
                });

                span.addEventListener('mouseleave', function () {
                    popup.style.display = 'none';
                });
            });
        });
    });

    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    function getExtraInfo(title) {
        const extraInfoData = {
            "Sports Science": "Sports Science involves understanding the physical and physiological effects of exercise on the body.",
            "Sports Management": "Sports Management focuses on the organizational aspects of sports, including team management and event planning.",
            "Sports Coaching": "Sports Coaching is about training athletes to improve their skills and performance in their chosen sport.",
            "Visual Arts": "Visual Arts includes traditional and contemporary forms of art such as painting, sculpture, and digital design.",
            "Performing Arts": "Performing Arts involves live performance arts such as theater, dance, and music, focusing on artistic expression.",
            "Art History": "Art History examines artworks from various periods, exploring their cultural and historical significance."
        };

        return extraInfoData[title] || "No additional information available.";
    }
});
