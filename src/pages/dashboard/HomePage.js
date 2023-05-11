import React from "react";

const HomePage = () => {
  return (
    <main className="bg-dashboardBg min-h-full p-5">
      <section className="flex container mx-auto">
        <section className="w-3/12 box-border">
          <section className="bg-white h-[50vh] px-5 pb-5 mb-5">
            <article className="flex w-full items-center justify-between">
              <div className="flex items-center py-1 gap-1">
                <img
                  className="rounded-full w-7 h-7 object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="profile"
                />
                <h3 className="text-xs font-medium">Jane Smith</h3>
              </div>
            </article>
          </section>
          <section className="bg-white w-full h-[50vh] mb-5">
            <article className="flex items-center w-full justify-between p-5">
              <h3 className="text-gray-700">Inbox</h3>
              <span className="text-button cursor-pointer">View All</span>
            </article>
            <article>
              <article className="flex items-center w-full gap-1 my-2 px-5 py-3 border-t border-gray-200 cursor-pointer hover:bg-slate-100">
                <img
                  className="rounded-full w-7 h-7 object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="profile"
                />
                <div className="w-full">
                  <div className="flex w-full items-center justify-between">
                    <p className="font-semibold text-gray-500 text-xs">
                      tillie5245
                    </p>
                    <p className="font-normal text-gray-400 text-xs">
                      5 months
                    </p>
                  </div>
                  <p className="text-gray-500 text-xs">Hello, I glad you ...</p>
                </div>
              </article>
            </article>
          </section>
        </section>
        <section className="w-9/12 pb-5 pl-20 pr-5 box-border">Home</section>
      </section>
    </main>
  );
};

export default HomePage;
