'use client'
import React, { useState } from "react";
import { toast } from "react-toastify";

interface ContactPageProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

export default function ContactPage() {
    const [data, setData] = useState<ContactPageProps>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const { firstName, lastName, email, phone, message } = data;
        if (!firstName || !lastName || !email || !phone || !message) {
            toast.error("Please fill all the fields")
            return
        }
        toast.success("Message sent successfully ")
        setData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        })
    }
    return (
        <div className="px-6 md:px-15 mt-10 ">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-8">
                Contact
            </h1>
            <div className="flex flex-col lg:flex-row gap-16">
                <div className="w-full lg:w-2/3">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="firstName" className="font-semibold text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    required
                                    id="firstName"
                                    value={data.firstName}
                                    onChange={(e) => setData({...data, firstName: e.target.value})}
                                    placeholder="Enter your first name"
                                    className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="lastName" className="font-semibold text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    required
                                    value={data.lastName}
                                    onChange={(e) => setData({...data, lastName: e.target.value})}
                                    id="lastName"
                                    placeholder="Enter your last name"
                                    className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-semibold text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={data.email}
                                onChange={(e) => setData({...data, email: e.target.value})}
                                placeholder="Enter your email address"
                                className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="font-semibold text-gray-700">Phone</label>
                            <input
                                type="tel"
                                required
                                id="phone"
                                value={data.phone}
                                onChange={(e) => setData({...data, phone: e.target.value})}
                               placeholder="Enter your phone number"
                                className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="font-semibold text-gray-700">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                required
                                value={data.message}
                                onChange={(e) => setData({...data, message: e.target.value})}
                                placeholder="Enter your message..."
                                className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black text-white font-semibold py-4 rounded hover:bg-gray-800 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}
