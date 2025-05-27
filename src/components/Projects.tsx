import { Project } from '../types/types';

const projects: Project[] = [
    {
        id: 1,
        title: 'E-commerce Platform',
        description: 'A full-featured online store with product listings, cart functionality, and secure checkout.',
        tags: ['HTML', 'CSS', 'PHP', 'MySQL'],
        imageUrl: './assets/images/flowersales.png',
        demoUrl: '#',
        codeUrl: 'https://github.com/NadeeshaMedagama/kln_php_project_floraVista.git'
    },
    {
        id: 2,
        title: 'CI/CD with Jenkins',
        description: 'Integrated Jenkins with Version Control Systems to Streamline the Development.',
        tags: ['Jenkins', 'AWS', 'Shell Scripting', 'CI/CD'],
        imageUrl: '/assets/images/img.png',
        demoUrl: 'https://www.linkedin.com/posts/nadeesha-medagama-5aa827287_aws-ec2-jenkins-activity-7324357455994388480-SZuU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW2JJIBZi47mjvLbuK6oM9URnVIAyLG0Xg',
        codeUrl: 'https://www.linkedin.com/posts/nadeesha-medagama-5aa827287_aws-ec2-jenkins-activity-7324357455994388480-SZuU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW2JJIBZi47mjvLbuK6oM9URnVIAyLG0Xg'
    },
    {
        id: 3,
        title: 'Habit Tracker Mobile App',
        description: 'Real-time weather information with 5-day forecast and location-based services.',
        tags: ['React Native CLI ', 'TypeScript ', 'AsyncStorage'],
        imageUrl: '/assets/images/img_1.png',
        demoUrl: 'https://habit-tracker-mobile-app-demo-video.netlify.app/',
        codeUrl: 'https://github.com/NadeeshaMedagama/HabitTracker_mobile_application_with_react-native.git'
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        My <span className="text-primary-light dark:text-primary-dark">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-700 dark:text-gray-300"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                                <div className="flex space-x-4">
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-opacity-90 transition-all"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                    {project.codeUrl && (
                                        <a
                                            href={project.codeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center py-2 border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-lg hover:bg-primary-light/10 transition-all"
                                        >
                                            View Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};