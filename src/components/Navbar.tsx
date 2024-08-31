import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <div className="py-4 border-b px-4">
      <MaxWidthWrapper>
        <div className="flex gap-1 text-2xl items-center text-slate-950 font-bold">
          Store
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
export default Navbar;
