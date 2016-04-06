module.exports = fallbackImage;

/**
 * Load a fallback image if an image errors out
 * @param {Node} imageEl
 * @param {string} fallbackImageUrl
 */
function fallbackImage(imageEl, fallbackImageUrl)
{
  imageEl.addEventListener('error', img => {
    img.target.src = fallbackImageUrl;
    img.onerror = null;
  });
}
