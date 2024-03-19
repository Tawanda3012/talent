import React, { useState } from "react";
const Experience = () => {
    const [expData] = useState([
        {
            heading: 'Education',
            schoolName: 'Catholic University in Zimbabwe',
            degree: 'Bachelor of Business Management and Information Technology (Honours Degree)',
            year: ' 2019 - 2022',
            id: 1
        },
        {
            schoolName: 'Gweru Polytechnic College',
            degree: 'National Certificate in Information Technology',
            year: ' 2018 - 2018',
            id: 2
        },

    ])
    const [licencesCert] = useState([

        {
            heading: 'licences & certifications',
            schoolName: 'Catholic University in Zimbabwe',
            degree: 'Bachelor of Business Management and Information Technology (Honours Degree)',
            year: ' 2019 - 2022',
            id: 1
        },
        {
            schoolName: 'Gweru Polytechnic College',
            degree: 'National Certificate in Information Technology',
            year: ' 2018 - 2018',
            id: 2
        },
    ])
    const [volunteering] = useState([
        {
            heading: 'volunteering',
            role: 'Senior Technology Manager',
            company: 'Uncommon.org',
            year: ' 2019 - 2022',
            bio: `Our vision is a world where everyone, everywhere has equal access to life-changing technology skills. We do this by investing in the world's most impoverished communities and training the world’s next great technologists & entrepreneurs. We do this because we believe that more diversity in tech makes the world a better place.`,
            id: 1
        },
        {
            role: 'Senior Technology Manager',
            company: 'Uncommon.org',
            year: ' 2019 - 2022',
            bio: `Our vision is a world where everyone, everywhere has equal access to life-changing technology skills. We do this by investing in the world's most impoverished communities and training the world’s next great technologists & entrepreneurs. We do this because we believe that more diversity in tech makes the world a better place.`,
            id: 2
        },

    ])
    return (
        <>
            <div className="education mt-4">
                {expData.map((exp) => (
                    <div className="col-12 " key={exp.id}>
                        <h2 className="mb-4">{exp.heading}</h2>
                        <h4 className="mt-3">{exp.schoolName}</h4>
                        <p>{exp.year}</p>
                        <hr />
                    </div>
                ))}
            </div>
            <div className="licences mt-4">
                {licencesCert.map((exp) => (
                    <div className="col-12 " key={exp.id}>
                        <h2 className="mb-4">{exp.heading}</h2>
                        <h4 className="mt-3">{exp.schoolName}</h4>
                        <p>{exp.year}</p>
                        <hr />
                    </div>
                ))}
            </div>
            <div className="voluntary mt-4">
                {volunteering.map((vol) => (
                    <div className="col-12" key={vol.id}>
                        <h2 className="mb-4">{vol.heading}</h2>
                        <h4>{vol.role}</h4>
                        <h4>{vol.company}</h4>
                        <p>{vol.year}</p>
                        <p>{vol.bio}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Experience;