const featuredItems = [
  {
    name: "Cinnamon Swirl Loaf Slice",
    description: "Soft, bakery-style slice with warm cinnamon and vanilla glaze.",
  },
  {
    name: "Turkey Avocado Wrap",
    description: "Fresh turkey, avocado, greens, and house spread in a soft wrap.",
  },
  {
    name: "Jalapeño Cheddar Bagel",
    description: "Chewy bagel baked fresh with a little kick and melted cheddar.",
  },
];

const menuCategories = [
  "Loaf Slices",
  "Pastries",
  "Bagels",
  "Biscuits",
  "Wraps",
  "Sandwiches",
];

const hours = [
  { day: "Sunday", time: "8:00 AM – 2:00 PM" },
  { day: "Monday", time: "7:00 AM – 3:00 PM" },
  { day: "Tuesday", time: "7:00 AM – 3:00 PM" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 text-zinc-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-10 sm:px-8 md:py-14">
        <section className="rounded-3xl bg-gradient-to-br from-amber-100 to-orange-100 p-8 shadow-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">
            Bake &amp; Wrap · San Antonio
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Fresh baked comfort, wrapped and ready.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-zinc-700 md:text-lg">
            A warm local bakery-cafe serving loaf slices, pastries, bagels,
            biscuits, wraps, and sandwiches made for your day.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-amber-50 transition hover:bg-zinc-700"
          >
            Order Now
          </a>
        </section>

        <section aria-labelledby="featured-menu">
          <h2 id="featured-menu" className="text-2xl font-semibold text-zinc-900">
            Featured Menu Items
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredItems.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-zinc-900">{item.name}</h3>
                <p className="mt-2 text-sm text-zinc-700">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-zinc-900">Menu Categories</h2>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-zinc-700">
              {menuCategories.map((category) => (
                <li
                  key={category}
                  className="rounded-lg bg-amber-50 px-3 py-2 font-medium"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-zinc-900">Hours</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              {hours.map((item) => (
                <li key={item.day} className="flex items-center justify-between gap-4">
                  <span className="font-medium">{item.day}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-zinc-900">Pickup Information</h2>
            <p className="mt-3 text-sm text-zinc-700">
              Pickup is currently available in the La Cantera area of San Antonio.
              Place your order ahead for quick, easy handoff.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-zinc-900">About Bake &amp; Wrap</h2>
            <p className="mt-3 text-sm text-zinc-700">
              We are a local food brand focused on fresh ingredients, bakery-style
              flavor, and made-with-care service for our community.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
