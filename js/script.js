fetch("data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load data.json");
        }
        return response.json();
    })
    .then(data => {

        const educationContainer = document.getElementById("education-container");
        educationContainer.innerHTML = "";

        data.education.forEach(item => {

            const card = document.createElement("div");
            card.className = "education-card";

            card.innerHTML = `
                <h3>${item.level}</h3>
                <p><strong>${item.school}</strong></p>
                ${item.course ? `<p>${item.course}</p>` : ""}
                <p>${item.year}</p>
            `;

            educationContainer.appendChild(card);

        });


        const skillsContainer = document.getElementById("skills-container");
        skillsContainer.innerHTML = "";

        data.skills.forEach(skill => {

            const skillCard = document.createElement("div");
            skillCard.className = "skill-card";

            skillCard.innerHTML = `
                <h4>${skill.name}</h4>
                <p>${skill.level}</p>
            `;

            skillsContainer.appendChild(skillCard);

        });


        const projectsContainer = document.getElementById("projects-container");
        projectsContainer.innerHTML = "";

        data.projects.forEach(project => {

            const projectCard = document.createElement("div");
            projectCard.className = "project-card";

            projectCard.innerHTML = `
                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <a href="${project.github}" target="_blank">
                    GitHub
                </a>

                ${project.figma
                    ? `<a href="${project.figma}" target="_blank">
                        Figma
                    </a>`
                    : ""
                }
            `;

            projectsContainer.appendChild(projectCard);

        });


        const certificatesContainer = document.getElementById("certificates-container");
        certificatesContainer.innerHTML = "";

        data.certificates.forEach(certificate => {

            const certificateCard = document.createElement("div");
            certificateCard.className = "certificate-card";

            certificateCard.innerHTML = `
                <img src="${certificate.image}" alt="${certificate.title}">

                <h3>${certificate.title}</h3>

                <p><strong>Date:</strong> ${certificate.date}</p>

                <a href="${certificate.link}" target="_blank">
                    View Certificate
                </a>
            `;

            certificatesContainer.appendChild(certificateCard);

        });

    })

    .catch(error => {

        console.error(error);

        document.getElementById("education-container").innerHTML =
            "<p>Unable to load education data.</p>";

        document.getElementById("skills-container").innerHTML =
            "<p>Unable to load skills data.</p>";

        document.getElementById("projects-container").innerHTML =
            "<p>Unable to load project data.</p>";

        document.getElementById("certificates-container").innerHTML =
            "<p>Unable to load certificate data.</p>";

    });