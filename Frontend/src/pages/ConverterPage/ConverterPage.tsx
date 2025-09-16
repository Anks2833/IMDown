import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Loader from "../../utils/Loader";

const ConverterPage = () => {
  // State management
  const [markdown, setMarkdown] = useState(
    "# Welcome to IMDown\n\nStart typing your Markdown here, or upload a file to begin.\n\n## Features\n\n- **Bold text** and *italic text*\n- Lists and nested lists\n- [Links](https://example.com)\n- Images\n- Code blocks\n- And more!\n\n```javascript\nconst greeting = 'Hello, world!';\nconsole.log(greeting);\n```"
  );
  const [htmlPreview, setHtmlPreview] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isConverting, setIsConverting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("editor"); // editor, preview, pdf
  const [documentTitle, setDocumentTitle] = useState("Untitled Document");
  const [selectedTheme, setSelectedTheme] = useState("default");
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  const [error, setError] = useState(null);

  // References
  const fileInputRef = useRef(null);
  const editorRef = useRef(null);

  // Themes for PDF conversion
  const themes = [
    {
      id: "default",
      name: "Default",
      description: "Clean, professional design",
    },
    {
      id: "academic",
      name: "Academic",
      description: "Formal layout for papers",
    },
    {
      id: "modern",
      name: "Modern",
      description: "Contemporary with accent colors",
    },
    { id: "minimal", name: "Minimal", description: "Simple, distraction-free" },
    {
      id: "dark",
      name: "Dark",
      description: "Dark background with light text",
    },
  ];

  // Effect to render markdown preview (this would typically use a library like marked.js)
  useEffect(() => {
    // This is a simplified example - in production you'd use a proper Markdown parser
    const html = simpleMarkdownToHtml(markdown);
    setHtmlPreview(html);
  }, [markdown]);

  // Simple markdown to HTML converter (placeholder for demonstration)
  const simpleMarkdownToHtml = (md) => {
    // This is extremely simplified - you'd use a real Markdown library
    let html = md;

    // Headers
    html = html.replace(/^# (.*$)/gm, "<h1>$1</h1>");
    html = html.replace(/^## (.*$)/gm, "<h2>$1</h2>");
    html = html.replace(/^### (.*$)/gm, "<h3>$1</h3>");

    // Bold and italic
    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // Lists
    html = html.replace(/^\- (.*$)/gm, "<li>$1</li>");
    html = html.replace(/(<li>.*<\/li>)/gm, "<ul>$1</ul>");

    // Code blocks
    html = html.replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>");

    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    // Line breaks
    html = html.replace(/\n/g, "<br>");

    return html;
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Check if file is markdown
    if (!file.name.endsWith(".md") && !file.type.includes("text/")) {
      setError("Please upload a Markdown (.md) or text file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setMarkdown(e.target.result);
      setDocumentTitle(file.name.replace(".md", ""));
    };
    reader.onerror = () => {
      setError("Error reading file");
    };
    reader.readAsText(file);
  };

  // Handle PDF conversion
  const handleConvert = async () => {
    if (!markdown.trim()) {
      setError("Please enter some Markdown content");
      return;
    }

    setIsConverting(true);
    setError(null);

    try {
      // This would be replaced with your actual API call to the Python backend
      // const response = await fetch('/api/convert', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ markdown, theme: selectedTheme, title: documentTitle })
      // });

      // if (!response.ok) throw new Error('Conversion failed');
      // const data = await response.json();
      // setPdfUrl(data.pdfUrl);

      // For demo purposes, we'll simulate an API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate a PDF URL - in production this would come from your API
      setPdfUrl("https://example.com/sample-pdf.pdf");

      // Switch to PDF tab after conversion
      setActiveTab("pdf");
    } catch (err) {
      console.error("Conversion error:", err);
      setError("Failed to convert Markdown to PDF. Please try again.");
    } finally {
      setIsConverting(false);
    }
  };

  // Handle document save
  const handleSave = async () => {
    if (!pdfUrl) {
      setError("Please convert your document to PDF first");
      return;
    }

    setIsSaving(true);
    setError(null);

    try {
      // This would be replaced with your actual API call to the Node.js backend
      // const response = await fetch('/api/documents', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     title: documentTitle,
      //     pdfUrl,
      //     markdown,
      //     theme: selectedTheme,
      //     createdAt: new Date().toISOString()
      //   })
      // });

      // if (!response.ok) throw new Error('Save failed');

      // For demo purposes, we'll simulate an API delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Show success message
      setShowSaveSuccess(true);
      setTimeout(() => setShowSaveSuccess(false), 3000);
    } catch (err) {
      console.error("Save error:", err);
      setError("Failed to save your document. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  // Handle tab switching
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Markdown Converter
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Convert your Markdown to beautiful PDFs
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div>
                <label htmlFor="document-title" className="sr-only">
                  Document Title
                </label>
                <input
                  type="text"
                  id="document-title"
                  placeholder="Document Title"
                  value={documentTitle}
                  onChange={(e) => setDocumentTitle(e.target.value)}
                  className="w-full sm:w-auto px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Upload
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".md,text/markdown,text/plain"
                  onChange={handleFileUpload}
                  className="hidden"
                />

                <button
                  onClick={handleConvert}
                  disabled={isConverting || !markdown.trim()}
                  className={`px-4 py-2 rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    isConverting || !markdown.trim()
                      ? "bg-blue-400 dark:bg-blue-500 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  }`}
                >
                  {isConverting ? "Converting..." : "Convert to PDF"}
                </button>

                {pdfUrl && (
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className={`px-4 py-2 rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      isSaving
                        ? "bg-green-400 dark:bg-green-500 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                    }`}
                  >
                    {isSaving ? "Saving..." : "Save"}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 mt-6">
            <button
              onClick={() => handleTabChange("editor")}
              className={`py-2 px-4 text-sm font-medium ${
                activeTab === "editor"
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              Editor
            </button>
            <button
              onClick={() => handleTabChange("preview")}
              className={`py-2 px-4 text-sm font-medium ${
                activeTab === "preview"
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => handleTabChange("pdf")}
              disabled={!pdfUrl}
              className={`py-2 px-4 text-sm font-medium ${
                activeTab === "pdf"
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : !pdfUrl
                  ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              PDF
            </button>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-3 rounded-md">
            {error}
          </div>
        )}

        {/* Success message */}
        {showSaveSuccess && (
          <div className="mb-4 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-3 rounded-md">
            Document saved successfully!
          </div>
        )}

        {/* Main content area */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden min-h-[calc(100vh-260px)]">
          {/* Theme selector */}
          <div className="bg-gray-50 dark:bg-gray-700 p-3 border-b border-gray-200 dark:border-gray-600 flex flex-wrap items-center">
            <div className="mr-4 text-sm text-gray-700 dark:text-gray-300">
              Theme:
            </div>
            <div className="flex flex-wrap gap-2">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme.id)}
                  className={`px-3 py-1 text-xs rounded-full ${
                    selectedTheme === theme.id
                      ? "bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200"
                      : "bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"
                  }`}
                  title={theme.description}
                >
                  {theme.name}
                </button>
              ))}
            </div>
          </div>

          {/* Editor Tab */}
          {activeTab === "editor" && (
            <div className="p-4">
              <textarea
                ref={editorRef}
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                className="w-full h-[calc(100vh-330px)] min-h-[300px] p-4 font-mono text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Type your Markdown here..."
              ></textarea>
            </div>
          )}

          {/* Preview Tab */}
          {activeTab === "preview" && (
            <div className="p-4 prose dark:prose-invert max-w-none h-[calc(100vh-330px)] min-h-[300px] overflow-auto">
              <div dangerouslySetInnerHTML={{ __html: htmlPreview }}></div>
            </div>
          )}

          {/* PDF Tab */}
          {activeTab === "pdf" && (
            <div className="p-4 h-[calc(100vh-330px)] min-h-[300px] flex items-center justify-center">
              {pdfUrl ? (
                <div className="w-full h-full">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 mb-4 rounded-md flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {documentTitle}.pdf
                    </span>
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
                    >
                      Download PDF
                    </a>
                  </div>
                  <div className="w-full h-[calc(100%-50px)] bg-gray-200 dark:bg-gray-600 rounded-md overflow-hidden">
                    {/* In a real application, you would embed the PDF here */}
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center p-6">
                        <svg
                          className="w-16 h-16 mx-auto text-red-600 dark:text-red-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <h3 className="mt-2 text-xl font-medium text-gray-900 dark:text-white">
                          {documentTitle}.pdf
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                          Your PDF has been generated successfully
                        </p>
                        <div className="mt-4">
                          <a
                            href={pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            Download PDF
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <svg
                    className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600"
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
                  <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                    No PDF generated yet
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Convert your Markdown to generate a PDF
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={handleConvert}
                      disabled={isConverting || !markdown.trim()}
                      className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        isConverting || !markdown.trim()
                          ? "bg-blue-400 dark:bg-blue-500 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                      }`}
                    >
                      Convert to PDF
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Loading overlay */}
      {isConverting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full">
            <Loader />
            <p className="text-center mt-4 text-gray-700 dark:text-gray-300">
              Converting your Markdown to PDF...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConverterPage;
