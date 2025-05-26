export const Skills = () => {
    const skills = [
        { name: 'JavaScript', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'CI/CD Pipelines', level: 80 },
        { name: 'Python', level: 80 },
        { name: 'React', level: 85 },
        { name: 'Cloud Platforms', level: 80 },
        { name: 'Containerization', level: 85 },
        { name: 'Version Control', level: 80 }
    ];

    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        My <span className="text-primary-light dark:text-primary-dark">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
                </div>

                <div className="max-w-3xl mx-auto">
                    {skills.map((skill, index) => (
                        <div key={index} className="mb-6">
                            <div className="flex justify-between mb-1">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {skill.name}
                </span>
                                <span className="text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                <div
                                    className="bg-primary-light dark:bg-primary-dark h-2.5 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};