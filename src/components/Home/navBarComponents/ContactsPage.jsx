import React from 'react'

const ContactsPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-screen-xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
                <address>
                    <p className="mb-1">123 Main Street</p>
                    <p className="mb-1">City, State ZIP</p>
                    <p className="mb-1">Phone: (123) 456-7890</p>
                    <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
                </address>
                </div>
                <div className="bg-white rounded p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-3">Send Us a Message</h2>
                <form>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
                      <input type="text" id="name" className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400" />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>  
                      <input type="email" id="email" className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400" />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
                      <textarea id="message" rows="4" className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"></textarea>
                    </div>
                    
                    <div>
                      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ContactsPage;