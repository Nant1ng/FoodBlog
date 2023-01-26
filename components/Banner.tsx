function Banner() {
  return (
    <div className="flex flex-col  font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Andrés Weekly Food Blog</h1>
        <h2 className="pt-5 text-3xl">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#6b0a7f]">
            Every Foodies
          </span>
          {" "}favourite blog
        </h2>
      </div>
      <p className="mt-5 md:mt-2 max-w-sm text-2xl">
        New food{" "}
        <span className="underline decoration-4 decoration-[#6b0a7f]">
          Recipes Every
        </span>
        {" "}week!
      </p>
    </div>
  );
}

export default Banner;
