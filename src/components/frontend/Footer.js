import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_skvzar1",
        "template_2ox9rmi",
        formRef.current,
        "2zKK-EKLfrPe0NirY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main id="contact" className="bg-section ">
      <section className="container mx-auto">
        <article className="text-center">
          <h1 className="font-semibold text-xl pt-5 md:text-3xl">
            Get in touch
          </h1>
        </article>
        <section className="flex w-full h-[500px]">
          <section className="md:w-6/12 p-5 h-full flex flex-col items-center">
            <article className="w-full h-full flex flex-col justify-between">
              <article className="flex flex-col gap-8">
                <p className="text-sm font-normal">
                  We’re here to help! Here are a few ways you can reach us:
                </p>
                <p className="text-sm font-medium">
                  Phone: <span className="font-normal">+254 710 123 456</span>
                </p>

                <p className="text-sm font-medium">
                  Email:{" "}
                  <span className="font-normal">contact@contact.exchange</span>
                </p>
                <p className="text-sm font-normal">
                  Or simply fill in the form below and we’ll get back to you.
                </p>
              </article>
              <article className="flex flex-col md:flex-row justify-between w-full">
                <div>
                  <h3 className="font-bold mb-3">About Us</h3>
                  <h4 className="text-sm my-1 ">Home</h4>
                  <h4 className="text-sm my-1 ">Features</h4>
                  <h4 className="text-sm my-1 ">Contact Us</h4>
                </div>
                <div>
                  <h3 className="font-bold mb-3">Community</h3>
                  <h4 className="text-sm my-1 ">Twitter</h4>
                  <h4 className="text-sm my-1 ">Discord</h4>
                  <h4 className="text-sm my-1 ">Telegram</h4>
                </div>
                <article>
                  <h3 className="font-bold mb-3">Socials</h3>
                  <div className="flex gap-8">
                    <a
                      href={`https://twitter.com/MauriceNganga5`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex items-center cursor-pointer transition ease-in-out hover:scale-110  justify-center rounded-full">
                        <FaTwitter size={"1.5rem"} />
                      </div>
                    </a>
                    <a
                      href={`https://github.com/moryno/`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex items-center cursor-pointer transition ease-in-out hover:scale-110  justify-center rounded-full">
                        <FaGithub size={"1.5rem"} />
                      </div>
                    </a>
                    <a
                      href={`https://www.linkedin.com/in/mauricenganga`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex items-center cursor-pointer transition ease-in-out hover:scale-110 justify-center rounded-full">
                        <FaLinkedin size={"1.5rem"} />
                      </div>
                    </a>
                  </div>
                </article>
              </article>
            </article>
          </section>
          <section className="md:w-6/12 p-5 h-full">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full h-full flex flex-wrap flex-col lg:flex-row items-center gap-1"
            >
              <input
                className="p-2 w-full lg:w-formLg xl:w-form ring-gray-300 ring-1 rounded-sm"
                type="text"
                name="user_name"
                placeholder="Full Name"
              />
              <input
                className="p-2 w-full lg:w-formLg xl:w-form ring-gray-300 ring-1 rounded-sm"
                type="email"
                name="user_email"
                placeholder="Email"
              />

              <input
                className="p-2 min-w-full ring-gray-300 ring-1 rounded-sm"
                type="text"
                name="user_subject"
                placeholder="Subject"
              />
              <textarea
                className="p-2 min-w-full ring-gray-300 ring-1 rounded-sm"
                cols="30"
                name="message"
                rows="10"
                placeholder="Message..."
              ></textarea>
              <button className="bg-contactButton text-white font-medium p-2 w-fit cursor-pointer">
                Send message
              </button>
              {success && (
                <span className=" text-green-500 p-3 ring-1 rounded-md ring-green-500 w-fit">
                  Mail sent. Thank you.
                </span>
              )}
            </form>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Footer;
