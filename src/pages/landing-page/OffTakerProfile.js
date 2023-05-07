import classNames from "classnames";
import { AiFillStar } from "react-icons/ai";

const OffTakerProfile = () => {
  return (
    <main>
      <section className="container mx-auto flex">
        <section className="w-7/12 px-10 box-border">
          <h1 className="font-semibold mb-5 text-xl">About the off-taker</h1>
          <section className="flex mb-5">
            <article>
              <img
                className=" w-32 h-32 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="profile"
              />
            </article>
            <article className="pl-3">
              <div className="flex flex-col">
                <div className="flex gap-1">
                  <h3 className="font-semibold">Jane Smith</h3>
                  <p className="text-gray-500">@janesmith271</p>
                </div>
                <div className="h-32 flex flex-col justify-between">
                  <div className="flex items-center gap-x-0.5 text-orang">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <p>5</p>
                    <p className="text-gray-500">(96)</p>
                  </div>
                  <button className="py-2 px-3 font-medium w-fit border border-gray-300 rounded-sm">
                    Contact me
                  </button>
                </div>
              </div>
            </article>
          </section>
          <section className="p-5 mb-10 border border-gray-200">
            <article className="flex flex-wrap">
              <div className="w-1/2 pb-3">
                <p className="text-gray-500 text-sm">From</p>
                <h4 className="font-bold text-gray-600 text-sm">Italy</h4>
              </div>
              <div className="w-1/2 pb-3">
                <p className="text-gray-500 text-sm">Member since</p>
                <h4 className="font-bold text-gray-600 text-sm">April 2020</h4>
              </div>
              <div className="w-1/2 pb-3">
                <p className="text-gray-500 text-sm">From</p>
                <h4 className="font-bold text-gray-600 text-sm">Italy</h4>
              </div>
              <div className="w-1/2 pb-3">
                <p className="text-gray-500 text-sm">From</p>
                <h4 className="font-bold text-gray-600 text-sm">Italy</h4>
              </div>
              <div className="w-1/2 pb-3">
                <p className="text-gray-500 text-sm">From</p>
                <h4 className="font-semibold">Italy</h4>
              </div>
              <div className="w-1/2 pb-3">
                <p className="text-gray-500 text-sm">From</p>
                <h4 className="font-bold text-gray-600 text-sm">Italy</h4>
              </div>
              <div className="w-1/2 pb-3">
                <p className="text-gray-500 text-sm">From</p>
                <h4 className="font-bold text-gray-600 text-sm">Italy</h4>
              </div>
            </article>
            <p className="text-sm border-t border-gray-200 py-5 font-medium text-gray-700">
              I'm a university student with 2 years of graphic design experience
              and video editing. I can create Logos, Shopidy dropshipping
              stores. Customer satisfaction is my number one priority. Send me a
              message if you need assistance with anything.
            </p>
          </section>
          <section>
            <h1 className="font-semibold text-gray-700 pb-5">What I do</h1>
            <h3 className="font-medium text-sm text-gray-500 pb-5">
              Certified Shopify Dropshipping Expert!
            </h3>
            <article className="mb-10">
              <h3 className="font-semibold text-gray-700 pb-1">
                What to expect?
              </h3>
              <ul>
                <li className="font-normal text-sm text-gray-500">
                  - An awesome premium unique design for 1 product store
                </li>
                <li className="font-normal text-sm text-gray-500">
                  - Compelling description with images and Gifs
                </li>
                <li className="font-normal text-sm text-gray-500">
                  - Email sequence for recovering abandoned cart
                </li>
                <li className="font-normal text-sm text-gray-500">
                  - Product review
                </li>
                <li className="font-normal text-sm text-gray-500">
                  - Professional Theme (worth 180 USD to 450 USD)
                </li>
                <li className="font-normal text-sm text-gray-500">
                  - Free Shipping Bar, currency converter, and all apps you
                  need.
                </li>
                <li className="font-normal text-sm text-gray-500">
                  - Order Tracking
                </li>
                <li className="font-normal text-sm text-gray-500">
                  - Provide FREE support after completion of work
                </li>
              </ul>
            </article>
          </section>
          {/* Reviews */}
          <article className="border-t py-10 border-gray-200">
            <div className="flex">
              <img
                className=" w-8 h-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="profile"
              />
              <div className="pl-1">
                <h3 className="text-xs font-bold">Suzan Kamau</h3>

                <div className="flex text-xs  items-center gap-x-0.5 text-orang">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <p>5</p>
                  <p className=" text-xs text-gray-500 pl-1">3 weeks ago</p>
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs font-medium text-gray-600">
                Communication with Jane is fast and super easy. If you have a
                question or some doubts he's always there to help you!
              </p>
            </div>
          </article>
          <article className="border-t py-10 border-gray-200">
            <div className="flex">
              <img
                className=" w-8 h-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="profile"
              />
              <div className="pl-1">
                <h3 className="text-xs font-bold">Suzan Kamau</h3>

                <div className="flex text-xs  items-center gap-x-0.5 text-orang">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <p>5</p>
                  <p className=" text-xs text-gray-500 pl-1">3 weeks ago</p>
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs font-medium text-gray-600">
                Communication with Jane is fast and super easy. If you have a
                question or some doubts he's always there to help you!
              </p>
            </div>
          </article>
          <article className="border-t py-10 border-gray-200">
            <div className="flex">
              <img
                className=" w-8 h-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="profile"
              />
              <div className="pl-1">
                <h3 className="text-xs font-bold">Suzan Kamau</h3>

                <div className="flex text-xs  items-center gap-x-0.5 text-orang">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <p>5</p>
                  <p className=" text-xs text-gray-500 pl-1">3 weeks ago</p>
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs font-medium text-gray-600">
                Communication with Jane is fast and super easy. If you have a
                question or some doubts he's always there to help you!
              </p>
            </div>
          </article>
        </section>
        {/* Left */}
        <section
          className={classNames({
            "flex md:py-2 flex-col": true,
            "right-0 md:sticky overflow-auto md:top-[40px] md:z-0 top-0 z-20 fixed": true,
            "px-10  box-border": true,
            "md:h-[calc(100vh_-_40px)] h-full md:w-5/12": true,
            "transition-transform .3s ease-in-out md:translate-x-0": true,
          })}
        >
          <article className="border border-gray-300 rounded-sm h-96">
            Hello
          </article>
        </section>
      </section>
    </main>
  );
};

export default OffTakerProfile;
