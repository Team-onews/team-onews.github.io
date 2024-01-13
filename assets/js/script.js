document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('github').addEventListener('click', () => (location.href = 'https://github.com/team-onews'));
});
oncontextmenu = (event) => {
  if (!event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey) {
    blur();
    return false;
  }
};
