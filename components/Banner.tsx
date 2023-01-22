function Banner() {
  return (
    <div className="flex flex-col  font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Nantings Weekly Food Blog</h1>
        <h2 className="pt-5">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#6b0a7f]">
            Every Foodies{" "}
          </span>
          favourite blog
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New food recipes every week!
      </p>
    </div>
  );
}

export default Banner;
