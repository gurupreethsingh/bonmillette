import React from "react";
import { useNavigate } from "react-router-dom";
import healthy_snacks from "../../assets/blog_images/healty_snaks.jpg";
import white_snacks from "../../assets/blog_images/white_snacks.jpg";
import EachBlog from "../../components/blog_components/EachBlog";

const AllBlogs = () => {
  const blogs = [
    {
      id: 1,
      image: healthy_snacks,
      date: "November 7, 2024",
      title: "Snack Smart: How BonMillette Redefines Healthy Snacking",
      content: `Gone are the days when snacking was synonymous with unhealthy indulgence. Today, health-conscious consumers are seeking snacks that satisfy their cravings while providing real nutrition. That’s where BonMillette steps in, redefining the snacking experience with its millet-based creations.
      
        <strong>The Problem with Traditional Snacks:</strong>
        Many store-bought snacks are loaded with refined sugars, maida, and unhealthy fats like palm oil. While they may taste great, they often leave you feeling sluggish and guilty.

        <strong>Why BonMillette Stands Out:</strong>
        - Natural Sweeteners: No added sugar here! BonMillette uses jaggery and date syrup to sweeten its products naturally.
        - No Maida or Palm Oil: Unlike most snacks, BonMillette keeps things wholesome by avoiding refined ingredients.
        - Millet Magic: All products are millet-based, ensuring you get the fiber, protein, and essential nutrients your body needs.

        <strong>A Snack for Every Mood</strong>
        . Feeling Sweet? Indulge in Millet Bliss or Omega Bites, perfect with a cup of tea.
        . Craving Crunch? Grab some Ragi Pops or Millet Boondi Blast for a savory treat.
        . Need Energy? The Popped Millet Energy Bar is your perfect on-the-go companion.

        <strong>The BonMillette Promise</strong>
        BonMillette doesn’t just make snacks; it creates experiences. Every bite is a celebration of flavor, health, and tradition. Whether you’re looking for a quick energy boost or a guilt-free indulgence, BonMillette has you covered.

        <strong>Conclusion:</strong>
        Snacking smart is no longer a challenge with BonMillette. With its unique range of products, this brand proves that healthy eating can be fun, delicious, and full of variety. So, the next time you’re hungry, don’t reach for a packet of chips—reach for BonMillette and snack your way to better health!.
      `,
      author: " -- By BonMillette",
    },
    {
      id: 2,
      image: white_snacks,
      date: "November 8, 2024",
      title: "Millets: The Ancient Grains Making a Modern Comeback",
      content: `
      In today’s fast-paced world, where processed and fast foods dominate our diets, there’s a quiet revolution happening on the plate. Millets—these humble, nutrient-packed grains— are reclaiming their rightful place in kitchens across India and the world.

        <strong>What Are Millets?</strong>

        Millets are a group of ancient grains that have been cultivated in India for centuries. These include Ragi (finger millet), Jowar (sorghum), Bajra (pearl millet), Kodo, and others. Once considered the staple diet of rural communities, millets are now being rediscovered for their incredible health benefits and adaptability to modern recipes.

        <strong>Why the Sudden Popularity?</strong>

        - Nutritional Powerhouses: Millets are packed with protein, dietary fiber, vitamins, and minerals.
        - Low Glycemic Index: Ideal for diabetics, millets release energy slowly, keeping blood sugar levels in check.
        - Versatility in Cooking: From fluffy upmas and crispy dosas to sweet laddus and energy bars, millets can be turned into a variety of delicious dishes.

        <strong>Millets and Sustainability:</strong>

        Besides their health benefits, millets are ecological heroes. They require less water to grow, are naturally pest-resistant, and thrive in arid conditions. Choosing millets is not just good for your body but also for the planet.

        <strong>How BonMillette Is Making Millets Exciting Again:</strong>

        At BonMillette, we blend tradition with innovation to create snacks that are not only healthy but irresistibly tasty. From Millet Bliss laddus to the Meltaway Millet pak, each product is crafted to bring the goodness of millets to your table without compromising on flavor.

        <strong>Conclusion:</strong>
        
        Millets are more than just a food trend—they’re a lifestyle choice. By incorporating these ancient grains into your diet, you’re nourishing your body and contributing to sustainable agriculture. So, why not make the switch today? With BonMillette, healthy eating has never been this delicious!
      `,
      author: " -- By BonMillette",
    },
  ];

  const navigate = useNavigate();

  const handleBlogClick = (blog) => {
    navigate(`/single-blog/${blog.id}`, { state: blog });
  };

  return (
    <div>
      <div className="w-full md:w-5/6 mx-auto pt-5 pb-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="cursor-pointer"
              onClick={() => handleBlogClick(blog)}
            >
              <EachBlog
                image={blog.image}
                date={blog.date}
                title={blog.title}
                content={blog.content.replace(/<[^>]+>/g, "").split(". ")[0]} // Show first sentence
                author={blog.author}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
