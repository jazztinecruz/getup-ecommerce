const Categories = () => {
  return (
    <ul className="flex flex-wrap gap-2 items-center">
      {categories.map((category) => (
        <div
          key={category}
          className="border px-2.5 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
          {category}
        </div>
      ))}
    </ul>
  );
};

export default Categories;

const categories: string[] = ["Running Shoes", "Sneakers", "Dress", "Shirts"];
