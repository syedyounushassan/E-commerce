const SkeletonCard = () => {
  return (
    <div className="animate-pulse border rounded-xl p-4">
      <div className="h-40 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 mt-4 rounded"></div>
      <div className="h-4 bg-gray-200 mt-2 w-1/2 rounded"></div>
    </div>
  );
};

export default SkeletonCard;
