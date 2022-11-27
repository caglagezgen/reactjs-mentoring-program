const MovieSearchResultCount: React.FC<{ count: number }> = ({ count }) => {
  return (
    <p>
      <span>{count}</span> movies found
    </p>
  );
};

export default MovieSearchResultCount;
