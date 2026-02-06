import Image from "next/image";

export default function HomePage() {
  return (
    <div className="w-[939px] h-[1925px] relative bg-gradient-to-b from-blue-900/60 to-sky-200/50 overflow-hidden">

      {/* Top stacked images */}
      <Image
        src="https://placehold.co/144x216"
        alt="Item"
        width={144}
        height={216}
        className="w-36 h-52 left-[514px] top-[252px] absolute border border-blue-500/50"
      />

      <Image
        src="https://placehold.co/181x216"
        alt="Item"
        width={181}
        height={216}
        className="w-44 h-52 left-[567px] top-[188px] absolute"
      />

      <Image
        src="https://placehold.co/144x205"
        alt="Item"
        width={144}
        height={205}
        className="w-36 h-52 left-[676px] top-[150px] absolute"
      />

      {/* Hero text */}
      <div className="left-[70px] top-[222px] absolute text-blue-950 text-5xl font-bold font-['Inter']">
        Find and <br /> Recover Easily
      </div>

      {/* Item list */}
      <div className="left-[373px] top-[552px] absolute text-blue-950 text-5xl font-semibold font-['Inter']">
        Item List
      </div>

      {/* Item cards */}
      <Image
        src="https://placehold.co/217x241"
        alt="Item"
        width={217}
        height={241}
        className="w-56 h-60 left-[70px] top-[635px] absolute rounded-2xl"
      />

      <Image
        src="https://placehold.co/217x241"
        alt="Item"
        width={217}
        height={241}
        className="w-56 h-60 left-[355px] top-[635px] absolute rounded-2xl"
      />

      <Image
        src="https://placehold.co/217x241"
        alt="Item"
        width={217}
        height={241}
        className="w-56 h-60 left-[640px] top-[622px] absolute rounded-2xl"
      />

      {/* Blue overlay section */}
      <div className="w-[939px] h-64 left-0 top-[998px] absolute opacity-30 mix-blend-multiply bg-blue-500" />

      {/* Instruction texts */}
      <div className="w-[784px] h-16 left-[15px] top-[1138px] absolute text-blue-950 text-lg font-medium font-['Inter']">
        Do not know how to use the web at all, click the button and explore the web together
      </div>

      <div className="w-[784px] h-16 left-[479px] top-[1378px] absolute text-blue-950 text-lg font-medium font-['Inter']">
        Sign in or register here to have full access
      </div>

      <div className="w-[784px] h-16 left-[70px] top-[1686px] absolute text-blue-950 text-lg font-medium font-['Inter']">
        Click the button below to Report now.
      </div>

      {/* Section titles */}
      <div className="w-60 h-14 left-[222px] top-[1070px] absolute text-blue-950 text-4xl font-semibold font-['Inter']">
        Instruction
      </div>

      <div className="w-[603px] h-14 left-[268px] top-[1310px] absolute text-black text-3xl font-normal font-['Inter']">
        Not yet having Account to Report?
      </div>

      <div className="w-[603px] h-14 left-[70px] top-[1610px] absolute text-black text-4xl font-normal font-['Inter']">
        Do you Lost or Found the items?
      </div>

      {/* Buttons */}
      <div className="w-40 h-10 left-[370px] top-[931px] absolute bg-blue-950 rounded-[20px]" />
      <div className="w-40 h-10 left-[22px] top-[1179px] absolute bg-blue-950 rounded-[20px]" />
      <div className="w-40 h-10 left-[36px] top-[1727px] absolute bg-blue-950 rounded-[20px]" />
      <div className="w-40 h-10 left-[232px] top-[1727px] absolute bg-blue-950 rounded-[20px]" />
      <div className="w-40 h-10 left-[720px] top-[1419px] absolute bg-blue-950 rounded-[20px]" />

      {/* Button labels */}
      <div className="left-[77px] top-[1188px] absolute text-sky-200 text-xl font-normal font-['Inter']">
        View
      </div>

      <div className="left-[747px] top-[1428px] absolute text-sky-200 text-xl font-normal font-['Inter']">
        Sign In here
      </div>

      <div className="left-[411px] top-[940px] absolute text-sky-200 text-xl font-normal font-['Inter']">
        View All
      </div>

      <div className="left-[54px] top-[1736px] absolute text-sky-200 text-xl font-normal font-['Inter']">
        Report Found
      </div>

      <div className="left-[246px] top-[1736px] absolute text-sky-200 text-xl font-normal font-['Inter']">
        Report Lose
      </div>
    </div>
  );
}
