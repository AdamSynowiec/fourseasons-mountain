import React, { useState } from 'react'
import Container from '../container/Container'
import logoX from '../../assets/images/logo/logo-x.svg'
import H2 from '../headings/H2';
import Config from '../../Config';
import { Link } from "react-router-dom";

const FloatingInput = ({ label, name, type = "text", value, onChange }) => {
    const isActive = value.length > 0;

    return (
        <div className="relative mb-8">
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full bg-transparent border-b-2 border-white text-white pt-6 pb-2 px-1 focus:outline-none"
            />
            <label
                className={`absolute left-1 text-white transition-all duration-300 pointer-events-none ${isActive ? 'text-sm -top-1' : 'top-6 text-base'}`}
            >
                {label}
            </label>
        </div>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        privacyAccepted: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const validate = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Imię i nazwisko jest wymagane.";
        if (!formData.email) {
            newErrors.email = "Email jest wymagany.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Podaj poprawny adres email.";
        }
        if (!formData.phone) newErrors.phone = "Telefon jest wymagany.";
        if (!formData.message) newErrors.message = "Wiadomość jest wymagana.";
        if (!formData.privacyAccepted) newErrors.privacyAccepted = "Musisz zaakceptować Politykę prywatności.";
        return newErrors;
    };

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setSuccessMessage("");
        setShowSuccess(true);
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        try {
            await fetch(`${Config.url.baseUrl}/server/mailer`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            setSuccessMessage("Wiadomość została wysłana!");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            setErrors({ form: "Wystąpił błąd. Spróbuj ponownie później." });
        }
        setIsSubmitting(false);

        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);

    };

    return (
        <div id="kontakt" className="bg-[#1E1E1E] border-t border-[#3E3E3E] lg:py-auto">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="lg:col-span-4 py-[64px] border-t lg:border-r lg:border-t-0 border-[#3E3E3E] order-2 lg:order-1 text-center lg:text-left">
                        <H2>Kontakt</H2>
                        <span className='block font-poppins text-[#A8853F] text-[18px] mb-[24px]'>tel: {Config.contact.phoneFormated}</span>
                        <span className='block font-poppins font-normal text-[12px] lg:text-[18px] text-[#B5B5B5] mb-4'>Adres biura sprzedaży</span>
                        <ul className='font-poppins font-normal text-[14px] text-[#B5B5B5] mb-[24px]'>
                            <li>KGD GROUP</li>
                            <li>ul. Koło Strzelnicy 2/2</li>
                            <li>30-219 Kraków</li>
                        </ul>
                        <img src={logoX} className='mt-[64px] w-1/2 md:max-w-[250px] mx-auto lg:mx-0' alt="Logo" />
                    </div>

                    <div className="lg:col-span-8 py-[64px] lg:pl-[64px] order-1 lg:order-2">
                        <H2>Napisz do nas</H2>
                        <form className='flex flex-col' onSubmit={handleSubmit}>
                            <FloatingInput
                                label="Imię i nazwisko"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}
                            <FloatingInput
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
                            <FloatingInput
                                label="Telefon"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mb-2">{errors.phone}</p>}

                            <div className="relative mb-8">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="8"
                                    className="w-full bg-transparent border-b-2 border-white text-white pt-6 pb-2 px-1 focus:outline-none"
                                />
                                <label
                                    className={`absolute left-1 text-[#F4F1ED] transition-all duration-300 pointer-events-none ${formData.message.length > 0 ? 'text-sm -top-1' : 'top-6 text-base'}`}
                                >
                                    Wiadomość
                                </label>
                                {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
                            </div>
                            <div className="relative mb-8">
                                <input
                                    type="checkbox"
                                    id="privacyAccepted"
                                    checked={formData.privacyAccepted}
                                    onChange={handleChange}
                                />
                                <label htmlFor="privacyAccepted" className="text-white pl-4">Wyrażam zgodę na przetwarzanie moich danych osobowych oraz potwierdzam, że zapoznałem się z treścią <Link to={"/"} target="_blank" className="underline hover:no-underline">Polityki prywatności</Link></label>
                                {errors.privacyAccepted && (
                                    <p className="text-red-500 text-sm mt-1">{errors.privacyAccepted}</p>
                                )}
                            </div>
                            {errors.form && <p className="text-red-500 text-sm mb-2">{errors.form}</p>}
                            {successMessage && (
                                <p
                                    className={`fixed left-0 transform -translate-x-0 right-0 transition-all duration-500 ease-in-out 
      ${showSuccess ? 'bottom-0 opacity-100' : '-bottom-full opacity-0'} 
      bg-green-800 text-white p-4 text-center font-poppins font-normal shadow-lg  w-auto`}
                                >
                                    {successMessage}
                                </p>
                            )}
                            <button
                                type="submit"
                                className='lg:max-w-[250px] bg-[#F4F1ED] text-black p-4 font-poppins cursor-pointer'
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Wysyłanie..." : "Wyślij"}
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
