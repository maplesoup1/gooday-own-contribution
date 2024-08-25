import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex justify-center items-center bg-white" style={{ width: '840px', height: '615px' }}>
      <div className="w-full h-full p-8 shadow-md rounded-md flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-8 text-center">Contact Us</h1>
          <form className="h-full flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <label htmlFor="name" className="block text-base font-medium text-gray-700">Name*</label>
                <div className="border-b border-gray-400 mt-2">
                  <input type="text" name="name" id="name" required
                        className="w-full py-1 bg-transparent outline-none focus:ring-0 focus:border-none"/>
                </div>
              </div>
              <div className="mb-8">
                <label htmlFor="email" className="block text-base font-medium text-gray-700">Email*</label>
                <div className="border-b border-gray-400 mt-2">
                  <input type="email" name="email" id="email" required
                        className="w-full py-1 bg-transparent outline-none focus:ring-0 focus:border-none"/>
                </div>
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-base font-medium text-gray-700">Message*</label>
                <textarea name="message" id="message" required
                          className="mt-2 w-full h-32 bg-transparent outline-none border border-gray-400 rounded-md p-2 focus:ring-0"></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit"
                        className="py-3 px-10 mt-2 border border-transparent shadow-sm text-lg font-bold rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="text-center text-sm text-gray-500 mt-4">
          This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className="text-yellow-500 underline">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="text-yellow-500 underline">Terms of Service</a> apply.
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
