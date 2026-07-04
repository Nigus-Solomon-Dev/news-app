
export default function NewsCard({ article }) {
  // If no article, show nothing
  if (!article) return null;

  // Format date
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      
      {/* Image */}
      {article.urlToImage ? (
        <img 
          src={article.urlToImage} 
          alt={article.title} 
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
          No Image Available
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        {/* Source and Date */}
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span className="font-semibold">{article.source?.name || 'Unknown Source'}</span>
          <span>{formattedDate}</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {article.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {article.description || 'No description available'}
        </p>

        {/* Read More Button */}
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}