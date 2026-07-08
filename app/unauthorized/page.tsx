export default function UnauthorizedPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="rounded-xl border p-8 text-center">
        <h1 className="text-3xl font-bold text-red-600">
          Access Denied
        </h1>

        <p className="mt-3 text-gray-600">
          You don't have permission to access this page.
        </p>
      </div>
    </div>
  );
}