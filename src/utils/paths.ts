// Utility function to get the correct base path for assets
export const getAssetPath = (path: string): string => {
  return path;
};

// Helper function for image paths
export const getImagePath = (imageName: string): string => {
  return getAssetPath(`/images/${imageName}`);
}; 