import React from "react";


function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="text-headingColor text-2xl font-bold mb-8 ">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center rounded-xl overflow-hidden shadow-lg">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[500px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.61184928622!2d31.176061312150544!3d30.
              05961134437937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!
              2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1723249383324!5m2!1sen!2seg"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>


          <div className="w-full md:w-1/2 sm:h-[500px] overflow-auto px-4 py-8 lg:px-8 lg:flex items-center bg-gray-100 bg-opacity-100">
            <form className="w-full">
              <div className="mb-3 text-smallTextColor font-medium">
                <label htmlFor="name" className="">
                  Your Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="focus:outline-headingColor w-full p-2 rounded"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3 text-smallTextColor font-medium">
                <label htmlFor="email" className="">
                  E-mail:
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="focus:outline-headingColor w-full p-2 rounded"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3 text-smallTextColor font-medium">
                <label htmlFor="subject" className="">
                  Subject:
                </label>
                <input
                  type="text"
                  name="name"
                  id="subject"
                  className="focus:outline-headingColor w-full p-2 rounded"
                  placeholder="Enter your subject"
                />
              </div>

              <div className="mb-3 text-smallTextColor font-medium">
                <label htmlFor="subject" className="">
                  Your Message:
                </label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  rows={3}
                  className="focus:outline-headingColor w-full p-2 rounded"
                  placeholder="Write your message.."
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center text-white font-medium 
                          py-2 px-2 rounded-lg max-h-[40px] w-full bg-primaryColor hover:bg-headingColor
                          hover:font-medium duration-200 ease-in"
              >
                Send Your Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
