import { MdOutlineFavorite } from "react-icons/md";
const OffTaker = () => {
  return (
    <main className="w-[23%] h-[40vh] box-border">
      <section className="h-[20vh] flex justify-center  items-center rounded-md overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="profile"
        />
      </section>
      <section>
        <article className="flex w-full items-center justify-between">
          <div className="flex items-center py-1 gap-1">
            <img
              className="rounded-full w-7 h-7 object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="profile"
            />
            <h3 className="text-xs font-medium">Jane Smith</h3>
          </div>
          <p className="text-xs font-medium">Level 2</p>
        </article>
        <article className="flex flex-col">
          <p className="text-sm py-0.5">
            Mumias Sugar off-takers, Targeting a 75-ha land owner, who has
            planted sugarcane bread (31 is the best color standard fixed by the
            Government of India).{" "}
          </p>
          <div className="flex gap-1 items-center">
            <MdOutlineFavorite />
            <p className="font-semibold text-sm">5.0</p>
            <p className="font-medium text-sm text-gray-500">(174)</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default OffTaker;
