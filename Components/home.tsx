import "../global.css"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome to Quantia</h1>
      <p className="mt-4 text-lg">Your AI-powered financial assistant</p>
      <div className="mt-8">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  );
}