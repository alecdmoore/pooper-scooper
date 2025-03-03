// src/app/theme/page.tsx
import Link from "next/link";
import ColorSwatch from "@/components/ui/ColorSwatch";

export default function ThemeShowcase() {
  // Sample text for typography examples
  const sampleText = "The quick brown fox jumps over the lazy dog";

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-2">
            Theme Showcase
          </h1>
          <p className="text-xl text-gray-600">
            Visual representation of colors, typography, and UI components
          </p>
          <Link
            href="/"
            className="inline-block mt-4 text-primary-600 hover:text-primary-700 underline"
          >
            Back to Home
          </Link>
        </header>

        {/* Color Palette Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 pb-2 border-b">
            Color Palette
          </h2>

          <div className="mb-10">
            <h3 className="text-lg font-medium mb-4">Primary Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <ColorSwatch color="primary-50" name="50" />
              <ColorSwatch color="primary-100" name="100" />
              <ColorSwatch color="primary-200" name="200" />
              <ColorSwatch color="primary-300" name="300" />
              <ColorSwatch color="primary-400" name="400" />
              <ColorSwatch color="primary-500" name="500" />
              <ColorSwatch color="primary-600" name="600" />
              <ColorSwatch color="primary-700" name="700" />
              <ColorSwatch color="primary-800" name="800" />
              <ColorSwatch color="primary-900" name="900" />
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-lg font-medium mb-4">Secondary Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <ColorSwatch color="secondary-50" name="50" />
              <ColorSwatch color="secondary-100" name="100" />
              <ColorSwatch color="secondary-200" name="200" />
              <ColorSwatch color="secondary-300" name="300" />
              <ColorSwatch color="secondary-400" name="400" />
              <ColorSwatch color="secondary-500" name="500" />
              <ColorSwatch color="secondary-600" name="600" />
              <ColorSwatch color="secondary-700" name="700" />
              <ColorSwatch color="secondary-800" name="800" />
              <ColorSwatch color="secondary-900" name="900" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Gray Scale</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <ColorSwatch color="gray-50" name="50" />
              <ColorSwatch color="gray-100" name="100" />
              <ColorSwatch color="gray-200" name="200" />
              <ColorSwatch color="gray-300" name="300" />
              <ColorSwatch color="gray-400" name="400" />
              <ColorSwatch color="gray-500" name="500" />
              <ColorSwatch color="gray-600" name="600" />
              <ColorSwatch color="gray-700" name="700" />
              <ColorSwatch color="gray-800" name="800" />
              <ColorSwatch color="gray-900" name="900" />
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 pb-2 border-b">
            Typography
          </h2>

          <div className="mb-10">
            <h3 className="text-lg font-medium mb-4">
              Display Font (Montserrat)
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Display - 4xl</p>
                <p className="font-display text-4xl">{sampleText}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Display - 3xl Bold</p>
                <p className="font-display text-3xl font-bold">{sampleText}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Display - 2xl Medium
                </p>
                <p className="font-display text-2xl font-medium">
                  {sampleText}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Display - xl Regular
                </p>
                <p className="font-display text-xl">{sampleText}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Body Font (Inter)</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Body - xl</p>
                <p className="font-sans text-xl">{sampleText}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Body - lg Bold</p>
                <p className="font-sans text-lg font-bold">{sampleText}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Body - Base Medium</p>
                <p className="font-sans text-base font-medium">{sampleText}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Body - sm Regular</p>
                <p className="font-sans text-sm">{sampleText}</p>
              </div>
            </div>
          </div>
        </section>

        {/* UI Components Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 pb-2 border-b">
            UI Components
          </h2>

          <div className="mb-10">
            <h3 className="text-lg font-medium mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded">
                Primary Button
              </button>
              <button className="bg-secondary-400 hover:bg-secondary-500 text-white font-medium py-2 px-4 rounded">
                Secondary Button
              </button>
              <button className="bg-white hover:bg-gray-50 text-primary-600 font-medium py-2 px-4 rounded border border-primary-600">
                Outline Button
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded">
                Neutral Button
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded">
                Danger Button
              </button>
              <button
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded"
                disabled
              >
                Disabled Button
              </button>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-lg font-medium mb-4">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-display font-bold text-lg mb-2">
                  Basic Card
                </h4>
                <p className="text-gray-600">
                  A simple card with some text content and basic styling.
                </p>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
                <div className="bg-primary-500 inline-flex p-3 rounded-md mb-4">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="font-display font-bold text-lg mb-2">
                  Feature Card
                </h4>
                <p className="text-gray-700">
                  A feature card with an icon, title, and description.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-display font-bold text-lg mb-2">
                  Card with Actions
                </h4>
                <p className="text-gray-600 mb-4">
                  A card with action buttons at the bottom.
                </p>
                <div className="mt-4 flex justify-end space-x-2">
                  <button className="text-gray-600 hover:text-gray-800">
                    Cancel
                  </button>
                  <button className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-1 rounded">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-lg font-medium mb-4">Form Elements</h3>
            <div className="max-w-md space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Text Input
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Dropdown
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option value="">Select an option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Checkbox
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label className="ml-2 text-gray-700">
                    I agree to the terms and conditions
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Radio Buttons
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="radioGroup"
                      className="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                    />
                    <label className="ml-2 text-gray-700">Option 1</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="radioGroup"
                      className="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                    />
                    <label className="ml-2 text-gray-700">Option 2</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Alerts</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-md bg-green-50 border border-green-200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">
                      Success Alert
                    </h3>
                    <p className="text-sm text-green-700 mt-1">
                      Your booking has been successfully completed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-md bg-yellow-50 border border-yellow-200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">
                      Warning Alert
                    </h3>
                    <p className="text-sm text-yellow-700 mt-1">
                      Your subscription will expire in 3 days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-md bg-red-50 border border-red-200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-red-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      Error Alert
                    </h3>
                    <p className="text-sm text-red-700 mt-1">
                      There was an error processing your payment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-md bg-blue-50 border border-blue-200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">
                      Information Alert
                    </h3>
                    <p className="text-sm text-blue-700 mt-1">
                      Your appointment is scheduled for tomorrow at 10:00 AM.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
