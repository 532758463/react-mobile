export function htmlToString(str: string) {
  let s = '';
  if (str.length == 0) return '';
  s = str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/ /g, '&nbsp;')
    /* eslint-disable no-useless-escape */
    .replace(/\'/g, '&#39;')
    .replace(/\"/g, '&quot;');
  return s;
}

// const str = `< a href=" ">链%接</ a>*\&^!|?:''<script>alert("123");</script>`

export function htmlDecode(str: string) {
  let s = '';
  if (str.length == 0) return '';
  s = str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');
  return s;
}
