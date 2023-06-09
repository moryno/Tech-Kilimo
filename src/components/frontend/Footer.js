import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
          <h1 className="font-bold text-2xl pt-5 md:text-4xl">Get in touch</h1>
        </article>
        <section className="flex">
          <section className="flex flex-col md:flex-row justify-around items-center">
            <article className="md:w-6/12 m-5 p-5 flex flex-col justify-around md:h-[400px]">
              <h1 className="text-3xl font-bold">
                Interested in Helping out? Join with us now
              </h1>
              <h5 className="text-sm">
                Receive updates on our progress, community initiatives
              </h5>
            </article>
            <article className="md:w-6/12 m-5 p-5 flex flex-col justify-around md:h-[400px]">
              <h3 className="font-bold">Ubuntu Dao</h3>
              <p className="text-sm font-semibold">
                Ubuntu DAO is a Decentralized verification system that uses a
                DAO and blockchain technology to enable transparent and secure
                consensus, allowing users to easily verify real-world scenarios
                online and start community initiatives
              </p>
              <div>
                <i class="bx bxl-twitter bx-md"></i>
                <i class="bx bxl-facebook bx-md"></i>
                <i class="bx bxl-instagram bx-md"></i>
              </div>
              <div className="flex flex-col md:flex-row justify-around w-[100%]">
                <div className="my-2">
                  <h3 className="font-bold mb-3">About Us</h3>
                  <h4 className="text-sm my-1 ">Home</h4>
                  <h4 className="text-sm my-1 ">Features</h4>
                  <h4 className="text-sm my-1 ">Contact Us</h4>
                </div>
                <div className="my-2">
                  <h3 className="font-bold mb-3">Community</h3>
                  <h4 className="text-sm my-1 ">Twitter</h4>
                  <h4 className="text-sm my-1 ">Discord</h4>
                  <h4 className="text-sm my-1 ">Telegram</h4>
                </div>
                <div className="my-2">
                  <h3 className="font-bold mb-3">Contact Us</h3>
                  <h4 className="text-sm my-1 ">+254 799 559 285</h4>
                  <h4 className="text-sm my-1 ">ubuntuDao@gmail.com</h4>
                </div>
              </div>
            </article>
          </section>
          <section className="container mx-auto p-5">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full flex flex-wrap mt-5 flex-col lg:flex-row items-center gap-5"
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
              <button className="bg-contactButton text-white font-semibold p-2 w-fit cursor-pointer">
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
