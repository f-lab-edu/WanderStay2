export const alertNotSupportDesktop = (isMobile: boolean) => {
  if (typeof window === 'undefined') return;

  const notSupportAlert = localStorage.getItem('notSupportAlert');

  if (notSupportAlert === null && !isMobile) {
    alert('모바일로 이용해주세요:)');
    localStorage.setItem('notSupportAlert', 'done');
  }
};
