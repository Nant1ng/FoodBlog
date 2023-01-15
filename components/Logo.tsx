import Image from "next/image";

// finns inga props definition från sanity än, så man använder any för nu läget
function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        width={50}
        height={50}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjiELKhkgHcxEI_jZIIfJbHAR-USiRHMTGIQ&usqp=CAU"
        alt="logo"
      />
      {<>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
