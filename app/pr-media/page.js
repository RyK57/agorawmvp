"use client"

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { SocialIcon } from 'react-social-icons';

const PRMediaManagement = () => {
    const [date, setDate] = useState(new Date());


    return (
        <div className="p-8 bg-[#FFFFF6] min-h-screen">
            <h1 className="text-2xl font-bold text-[#660000] mb-8">PR and Media Management</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Press Inquiry and Event Management */}
                <section className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-xl font-semibold text-[#660000] mb-4">Event Management</h2>
                    <div className="relative text-black" style={{ height: '300px' }}>
                        <Calendar onChange={setDate} value={date} />
                    </div>
                </section>

                {/* Social Media Integration */}
                <section className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-xl font-semibold text-[#660000] mb-4">Social Media Integration</h2>

                    {/* Social Media Account Icons */}
                    <div className="flex space-x-4 mb-4">
                        <SocialIcon url="https://twitter.com/" bgColor="#660000" />
                        <SocialIcon url="https://facebook.com/" bgColor="#660000" />
                        <SocialIcon url="https://instagram.com/" bgColor="#660000" />
                    </div>

                    {/* Post Entry */}
                    <div className="mb-4">
                        <textarea
                            className="w-full p-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                            rows="4"
                            placeholder="What's on your mind?"
                        ></textarea>
                    </div>

                    {/* File Attachment */}
                    <div className="mb-4">
                        <label className="block mb-2 text-[#660000] font-semibold" htmlFor="file-upload">
                            Attach files
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            multiple
                            className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer focus:outline-none"
                        />
                    </div>

                    {/* Posting Options */}
                    <div className="flex justify-between items-center">
                        <div>
                            {/* Checkboxes for each platform */}
                            <label className="inline-flex items-center mr-4">
                                <input type="checkbox" className="form-checkbox text-[#660000]" />
                                <span className="ml-2 text-gray-700">Twitter</span>
                            </label>
                            <label className="inline-flex items-center mr-4">
                                <input type="checkbox" className="form-checkbox text-[#660000]" />
                                <span className="ml-2 text-gray-700">Facebook</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox text-[#660000]" />
                                <span className="ml-2 text-gray-700">Instagram</span>
                            </label>
                        </div>

                        {/* Post Button */}
                        <button
                            type="button"
                            className="py-2 px-4 bg-[#660000] text-white font-semibold rounded-lg shadow-md hover:bg-[#7a1f1f] focus:outline-none"
                        >
                            Post Now
                        </button>
                    </div>
                </section>


                {/* Brand Deal Management and One Click Post Everywhere Feature */}
                {/* Using full width for emphasis on these sections */}
                {/* Brand Deal Management */}
                <section className="bg-white rounded-lg shadow p-4 md:col-span-2">
                    <h2 className="text-xl font-semibold text-[#660000] mb-4">Brand Deal Management</h2>

                    {/* Mock Table for Brand Deals */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3 px-6">Brand</th>
                                    <th scope="col" className="py-3 px-6">Deal Status</th>
                                    <th scope="col" className="py-3 px-6">Value</th>
                                    <th scope="col" className="py-3 px-6">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b">
                                    <td className="py-4 px-6">Nike</td>
                                    <td className="py-4 px-6">Negotiating</td>
                                    <td className="py-4 px-6">$100,000</td>
                                    <td className="py-4 px-6">
                                        <button className="font-medium text-[#660000] hover:underline">View</button>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td className="py-4 px-6">Adidas</td>
                                    <td className="py-4 px-6">Closed</td>
                                    <td className="py-4 px-6">$150,000</td>
                                    <td className="py-4 px-6">
                                        <button className="font-medium text-[#660000] hover:underline">View</button>
                                    </td>
                                </tr>
                                {/* More rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="bg-white rounded-lg shadow p-4 md:col-span-2">
                    <h2 className="text-xl font-semibold text-[#660000] mb-4">One Click Post Everywhere</h2>
                    <button className="bg-[#660000] text-white p-2 rounded hover:bg-[#7a1f1f] transition-colors">
                        Post Now
                    </button>
                </section>
            </div>
        </div>
    );

};

export default PRMediaManagement;
