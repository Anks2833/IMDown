import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

const LandingPage = () => {
  const [markdown, setMarkdown] = useState(
    "# Hello IMDown!\n\nThis is a **preview** of what you can do.\n\n- Convert Markdown to PDF\n- Save your documents\n- Access them anywhere"
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-10 pb-24 md:pt-28 md:pb-40">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Transform Markdown into Beautiful PDFs
            </h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              IMDown makes it simple to convert your Markdown files into
              professionally styled PDFs. Write, convert, save, and access your
              documents from anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/register" className="btn-primary">
                Get Started — It's Free
              </a>
              <a href="/demo" className="btn-secondary">
                Try Demo
              </a>
            </div>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              {/* App Preview */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 border-b border-gray-200 dark:border-gray-600 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto text-sm font-medium">
                    IMDown Editor
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="p-4 md:w-1/2 font-mono text-sm bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
                    {markdown.split("\n").map((line, i) => (
                      <div key={i} className="py-1">
                        {line || " "}
                      </div>
                    ))}
                  </div>
                  <div className="p-4 md:w-1/2">
                    <h1 className="text-2xl font-bold mb-4">Hello IMDown!</h1>
                    <p className="mb-4">
                      This is a <strong>preview</strong> of what you can do.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Convert Markdown to PDF</li>
                      <li>Save your documents</li>
                      <li>Access them anywhere</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500 dark:bg-blue-600 rounded-full opacity-10 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-500 dark:bg-indigo-600 rounded-full opacity-10 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Everything You Need in One Place
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Powerful Markdown Editor
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Write and edit Markdown with syntax highlighting, preview, and
                intuitive controls. Support for GFM, tables, and more.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Beautiful PDF Generation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transform your Markdown into professionally styled PDFs with
                custom themes, fonts, and formatting options.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Secure Cloud Storage
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Save all your documents in the cloud with secure storage. Access
                your PDFs anytime, from any device.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Version History</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Keep track of changes with automatic version history. Revert to
                previous versions whenever needed.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-yellow-600 dark:text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Secure Authentication
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your documents are protected with enterprise-grade security.
                JWT-based authentication keeps your data safe.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-red-600 dark:text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Sharing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Share your PDFs with colleagues or make them public. Control
                access with customizable permissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-action Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-10 md:p-16 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Markdown Workflow?
              </h2>
              <p className="text-xl text-blue-100 mb-10">
                Join thousands of professionals who use IMDown to streamline
                their document creation process.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/register" className="btn-white">
                  Create Free Account
                </a>
                <a href="/pricing" className="btn-outline-white">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                IMDown
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                © 2025 IMDown. All rights reserved.
              </div>
            </div>

            <div className="flex space-x-8">
              <a
                href="/about"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                About
              </a>
              <a
                href="/blog"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Blog
              </a>
              <a
                href="/help"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Help
              </a>
              <a
                href="/privacy"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Global styles */}
      <style jsx global>{`
        .btn-primary {
          @apply px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-center;
        }

        .btn-secondary {
          @apply px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-center;
        }

        .btn-white {
          @apply px-6 py-3 bg-white hover:bg-gray-50 text-blue-600 font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-center;
        }

        .btn-outline-white {
          @apply px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white font-medium rounded-lg transition-colors duration-200 text-center;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
