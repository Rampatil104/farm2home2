document.querySelectorAll('img[data-fallback]').forEach(img => {
    const hide = () => img.classList.add('is-missing');
    img.addEventListener('error', hide);
    if (img.complete && img.naturalWidth === 0) hide();
});
