// Page 404 not found

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-4xl font-bold mb-4">404 NotFound</h1>
        <p className="text-gray-600">
          The page you are looking for does not exist.
        </p>
        <Link href={"/home"}>&larr; Go back to home</Link>
      </div>
    </div>
  );
}
