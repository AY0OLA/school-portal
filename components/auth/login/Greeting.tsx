export default function Greeting() {
  const hour = new Date().getHours();

  let greeting = "Welcome";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  return (
    <>
      <h2 className="text-3xl font-bold">{greeting}</h2>

      <p className="mt-2 text-gray-500">
        Sign in to continue to your school portal.
      </p>
    </>
  );
}
