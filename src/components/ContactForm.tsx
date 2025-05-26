import React, { useRef, useState } from 'react';
import { FiSend, FiUser, FiMail, FiMessageSquare, FiPhone, FiMapPin } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';

emailjs.init("NjYMfOZ52dnee_Ffw");

const ContactSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required')
});

export const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string }>({});

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: ContactSchema,
        onSubmit: async (values, { resetForm }) => {
            setIsSubmitting(true);
            setSubmitStatus({});

            try {
                if (!formRef.current) return;

                // Replace with your EmailJS service ID, template ID, and public key
                await emailjs.sendForm(
                    'service_qexhaaw ',
                    'template_r6zqa5z',
                    formRef.current,
                    'NjYMfOZ52dnee_Ffw'
                );

                setSubmitStatus({ success: true, message: 'Message sent successfully!' });
                resetForm();
            } catch (error) {
                setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
            } finally {
                setIsSubmitting(false);
            }
        }
    });

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        Get In <span className="text-primary-light dark:text-primary-dark">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
                </div>

                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 bg-primary-light dark:bg-primary-dark p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <p className="mb-8">
                                Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <FiMail className="mr-4"/>
                                    <span>nadeeshamedagama@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <FiMapPin className="mr-4"/>
                                    <span>Bandaragama, Sri Lanka</span>
                                </div>
                                <div className="flex items-center">
                                    <FiPhone className="mr-4"/>
                                    <span>+94 76 640 0393</span>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 p-8">
                            {submitStatus.message && (
                                <div
                                    className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}
                                >
                                    {submitStatus.message}
                                </div>
                            )}

                            <form ref={formRef} onSubmit={formik.handleSubmit}>
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FiUser className="text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.name && formik.touched.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-700 focus:ring-primary-light dark:focus:ring-primary-dark'} bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300`}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    {formik.errors.name && formik.touched.name && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formik.errors.name}</p>
                                    )}
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                                        Your Email
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FiMail className="text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.email && formik.touched.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-700 focus:ring-primary-light dark:focus:ring-primary-dark'} bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300`}
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    {formik.errors.email && formik.touched.email && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formik.errors.email}</p>
                                    )}
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                                        Your Message
                                    </label>
                                    <div className="relative">
                                        <div className="absolute top-3 left-3">
                                            <FiMessageSquare className="text-gray-400" />
                                        </div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formik.values.message}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.message && formik.touched.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-700 focus:ring-primary-light dark:focus:ring-primary-dark'} bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300`}
                                            placeholder="Your message here..."
                                        ></textarea>
                                    </div>
                                    {formik.errors.message && formik.touched.message && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formik.errors.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center py-3 px-6 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-opacity-90 transition-all"
                                >
                                    {isSubmitting ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            <FiSend className="mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};