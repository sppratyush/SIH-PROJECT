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

    const streamData = {
        science: `
            <ul>
                <li>
                    <span data-desc="PCM focuses on mathematical and physical sciences, ideal for engineering and technical fields." data-careers="Engineer, Scientist, Architect">Physics, Chemistry, Math (PCM)</span>
                    <ul>
                        <li><span data-desc="Engineering encompasses various fields such as civil, mechanical, and software engineering." data-careers="Civil Engineer, Mechanical Engineer, Software Engineer">Engineering</span></li>
                        <li><span data-desc="Architecture involves designing and planning buildings, structures, and urban landscapes." data-careers="Architect, Urban Planner, Interior Designer">Architecture</span></li>
                    </ul>
                </li>
                <li>
                    <span data-desc="PCB is ideal for students aiming for careers in medicine, biology, or environmental sciences." data-careers="Doctor, Biotechnologist, Environmental Scientist, Pharmacist">Physics, Chemistry, Biology (PCB)</span>
                    <ul>
                        <li><span data-desc="Health Care involves diagnosing and treating illnesses to improve patient health." data-careers="Doctor, Surgeon, Medical Researcher, Pharmacist">Health Care</span></li>
                        <li><span data-desc="Biotechnology is a cutting-edge field involving the use of living organisms to develop products and technologies." data-careers="Biotechnologist, Genetic Engineer, Biochemist, Research Scientist">Biotechnology</span></li>
                    </ul>
                </li>
            </ul>
        `,
        commerce: `
            <ul>
                <li>
                    <span data-desc="Commerce stream is suited for students interested in business, finance, and economics." data-careers="Accountant, Business Analyst, Financial Planner, Entrepreneur">Commerce</span>
                    <ul>
                        <li><span data-desc="Accounting is the practice of recording, classifying, and analyzing financial transactions." data-careers="Accountant, Auditor, Tax Consultant, Financial Analyst">Accounting</span></li>
                        <li><span data-desc="Business studies covers the principles of running and managing a business or organization." data-careers="Business Manager, Entrepreneur, Consultant, Sales Manager">Business Studies</span></li>
                        <li><span data-desc="Economics is the study of how societies allocate resources and make decisions." data-careers="Economist, Financial Analyst, Policy Advisor, Statistician">Economics</span></li>
                        <li><span data-desc="Marketing involves promoting and selling products or services, including market research and advertising." data-careers="Marketing Manager, Brand Strategist, Sales Manager, Digital Marketer">Marketing</span></li>
                    </ul>
                </li>
            </ul>
        `,
        arts: `
            <ul>
                <li>
                    <span data-desc="Arts/Humanities is a diverse stream offering studies in social sciences, history, and literature." data-careers="Historian, Psychologist, Sociologist, Journalist">Arts/Humanities</span>
                    <ul>
                        <li><span data-desc="History involves the study of past events and their impact on the present and future." data-careers="Historian, Archaeologist, Museum Curator, Archivist">History</span></li>
                        <li><span data-desc="Psychology is the scientific study of the human mind and behavior." data-careers="Psychologist, Counselor, Social Worker, Human Resources">Psychology</span></li>
                        <li><span data-desc="Literature is the study of written works, including poetry, prose, and drama." data-careers="Writer, Editor, Journalist, Literary Critic">Literature</span></li>
                        <li><span data-desc="Sociology is the study of society, social relationships, and social institutions." data-careers="Sociologist, Social Worker, Human Resources, Policy Analyst">Sociology</span></li>
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
            const stream = this.getAttribute('data-stream');
            treeSection.innerHTML = `<div class="tree">${streamData[stream]}</div>`;
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
            "Engineering": "Engineering fields include civil, mechanical, software, and more, offering diverse career opportunities.",
            "Architecture": "Architects design and oversee the construction of buildings, creating functional and aesthetic spaces.",
            "Health Care": "Health Care professionals work in various settings, including hospitals, clinics, and research institutions.",
            "Biotechnology": "Biotechnology combines biology and technology to develop innovative products for healthcare, agriculture, and more.",
            "Accounting": "Accountants manage financial records, ensuring accuracy and compliance with regulations.",
            "Business Studies": "Business professionals are involved in management, strategy, and operations across industries.",
            "Economics": "Economists analyze economic data and trends to inform policy decisions and business strategies.",
            "Marketing": "Marketing experts promote products and services, utilizing market research and advertising techniques.",
            "History": "Historians research and interpret past events, contributing to our understanding of historical contexts.",
            "Psychology": "Psychologists study mental processes and behavior, offering insights into human development and mental health.",
            "Literature": "Literature professionals analyze and create written works, exploring themes, styles, and cultural contexts.",
            "Sociology": "Sociologists investigate social behavior, structures, and changes, influencing policy and social programs."
        };

        return extraInfoData[title] || "No additional information available.";
    }
});
