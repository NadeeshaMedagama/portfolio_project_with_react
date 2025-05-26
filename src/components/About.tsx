export const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        About <span className="text-primary-light dark:text-primary-dark">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-light dark:border-primary-dark">
                            <img
                                src="../assets/images/nmprofile.jpeg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                            Who am I?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Passionate About Web Development and Cloud Technologies, with a Focus on Automation, Scalable Infrastructure, and CI/CD pipelines. Skilled in Problem-Solving and Building Responsive Applications, Aiming to Bridge Development and Operations with Efficient, User-Centric Solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Name:</h4>
                                <p className="text-gray-600 dark:text-gray-400">Nadeesha Medagama</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Email:</h4>
                                <p className="text-gray-600 dark:text-gray-400">nadeeshamedagama123@gmail.com</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-800 dark:text-white mb-2">From:</h4>
                                <p className="text-gray-600 dark:text-gray-400">Bandaragama, Sri Lanka</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Experience:</h4>
                                <p className="text-gray-600 dark:text-gray-400">1+ Years</p>
                            </div>
                        </div>

                        <a
                            href="https://drive.google.com/file/d/13F0Sximu1ee2oWif-aF2yAS-WAW45MX1/view?usp=drive_link"
                            download
                            className="inline-block px-6 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-opacity-90 transition-all"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};