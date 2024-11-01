import { useState } from 'react';

const UploadForm = () => {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('File:', file);
    if (!file || !email) {
      alert('Please provide both file and email.');
      return;
    }

    try {
      setIsUploading(true);
      document.body.innerHTML = '<h1>Uploading...</h1>';

      const presignResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/presign`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filename: file.name }),
      });

      const presignData = await presignResponse.json();
      const url = presignData.url;

      await fetch(url, {
        method: 'PUT',
        body: file,
      });

      document.body.innerHTML = '<h1>Branding...</h1>';
      const brandingResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/brand`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: file.name, email }),
      });

      const brandingHtml = await brandingResponse.text();
      document.body.innerHTML = brandingHtml;
    } catch (error) {
      console.error('There was an error with the upload:', error);
      document.body.innerHTML = 'Error occurred during the upload process.';
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-semibold text-center text-gray-900">Upload Form</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Input */}
          <div className="flex justify-center mb-8">
            <label className="w-64 flex flex-col items-center px-4 py-6 bg-blue-100 text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white transition">
              <span>Select a file</span>
              <input
                type="file"
                id="imageFile"
                name="imageFile"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              disabled={isUploading}
            >
              {isUploading ? 'Uploading...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
