export default class Cookie {
  private cookie;

  constructor(cookie: string) {
    this.validationCookie(cookie);
    this.cookie = cookie;
  }

  getCookieValue(key: string) {
    const cookies = this.cookie.split(';');

    if (!cookies.length) {
      return undefined;
    }

    for (const cookie of cookies) {
      const [cookieKey, cookieValue] = cookie.split('=');
      if (cookieKey.trim() == key) {
        return cookieValue;
      }
    }

    return undefined;
  }

  validationCookie(cookie: string) {
    if (!cookie) {
      console.warn('쿠키를 입력해야 인스턴스 생성이 가능합니다.');
    }
  }
}
