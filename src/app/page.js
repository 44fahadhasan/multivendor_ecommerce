import Category from "@/components/Home/Category/Category";
import FlashProducts from "@/components/Home/FlashProducts/FlashProducts";
import Hero from "@/components/Home/Hero/Hero";
import JustForYou from "@/components/Home/JustForYou/JustForYou";

const homePage = () => {
  return (
    <div className="py-14">
      <Hero />
      <Category />
      <FlashProducts />
      <JustForYou />
    </div>
  );
};

export default homePage;
