import book from "../assets/gitamBookN.png";
import shirt from "../assets/gitamShirtN.png";
import cap from "../assets/gitamCapN.png";

const Merch = () => {
  return (
    <div className="absolute flex flex-row justify-around top-[1600px] w-full h-[276px] items-center">
      <div className="flex gap-40">
        <div className="group relative">
          <img
            src={cap}
            alt="cap"
            className="w-auto h-[110px] object-contain group-hover:animate-linearSpin"
          />
        </div>
        <div className="group relative">
          <img
            src={shirt}
            alt="shirt"
            className="w-auto h-[160px] object-contain group-hover:animate-enlarge"
          />
        </div>
        <div className="group relative">
          <img
            src={book}
            alt="book"
            className="w-auto h-[157px] object-contain group-hover:animate-linearSpin"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-blue-400 font-[700] text-[50px]">Carry Gitam with You</h1>
        <p className="w-[530px]">
          From hoodies to stationery and everything in between, our merchandise lets you carry a
          piece of Gitam wherever you go. Wear it, use it, and keep the memories close!
        </p>
        <button
          onClick={() => window.open("https://shop.gitam.edu/", "_blank")}
          className="text-white px-4 py-2 rounded-full"
          style={{ backgroundColor: "#007069" }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Merch;
