import { BookLoader } from "react-awesome-loaders";

const MealLoader = (props) => {
  return (
    <section className="">
      <BookLoader
        background={"linear-gradient(135deg, #6066FA, #4645F6)"}
        desktopSize={"100px"}
        mobileSize={"80px"}
        textColor={"#4645F6"}
      />
    </section>
  );
};

export default MealLoader;
