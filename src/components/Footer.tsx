import {FaGithub, FaLinkedin, FaTwitter, FaFacebook} from 'react-icons/fa';
import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold mb-2">Nadeesha Medagama</h3>
                        <p className="text-gray-400">Creating digital experiences that matter</p>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/NadeeshaMedagama"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nadeesha-medagama-5aa827287/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="https://x.com/NadeeshaMe36209"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Twitter"
                        >
                            <FaTwitter className="w-6 h-6" />
                        </a>
                        <a
                            href="https://web.facebook.com/nadeesha.medagama"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Facebook"
                        >
                            <FaFacebook className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Nadeesha Medagama. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};