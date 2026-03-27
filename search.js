function search(input, template) {
    try { return new URL(input).toString(); } catch (e) {}
    try { const url = new URL(`http://${input}`); if (url.hostname.includes('.')) return url.toString(); } catch (e) {}
    return template.replace('%s', encodeURIComponent(input));
}
