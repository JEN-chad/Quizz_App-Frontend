import { Navbar } from "../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { QuizzCard } from "../../components/QuizzCard";
export const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data: { data } } = await axios.get("https://quizz-app-backend-3y9c.onrender.com/category");
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex p-4 min-h-screen mt-2.5">
        {/* Left Sidebar for Filter */}
        <aside className="w-[250px] hidden md:block mr-6">
          <div className="sticky top-20">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            {/* Add filter UI here later */}
            <p className="text-gray-500">Coming soon...</p>
          </div>
        </aside>

        {/* Right Main Content */}
        <section className="flex-1">
          {categories.length === 0 ? (
            <p className="text-center text-gray-600">Loading quizzes...</p>
          ) : (
            <div className="grid gap-7 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {
                categories.map(category => (
                  <QuizzCard category={category} key={category.id} />
                ))
              }
            </div>
          )}
        </section>
      </main>
    </>
  );
};
