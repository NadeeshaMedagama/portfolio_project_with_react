export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="whitespace-nowrap text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                        Hi, I'm <span className="text-primary-light dark:text-primary-dark">Nadeesha Medagama</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
                        Software Engineering Undergraduate & DevOps Enthusiast
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
                        Passionate About Building Scalable Systems, Automating Deployments, And Optimizing Workflows While Pursuing My Degree In Software Engineering.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
                        >
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-3 border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-lg font-medium hover:bg-primary-light/10 transition-all"
                        >
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};