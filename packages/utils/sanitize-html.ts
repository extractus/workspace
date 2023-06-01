import sanitize from 'sanitize-html'

/**
 * @see https://github.com/ndaidong/article-parser/blob/main/src/config.js
 */
export const defaultSanitizeOptions = <sanitize.IOptions>{
  allowVulnerableTags: true,
  allowedTags: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'u',
    'b',
    'i',
    'em',
    'strong',
    'small',
    'sup',
    'sub',
    'div',
    'span',
    'p',
    'article',
    'blockquote',
    'section',
    'details',
    'summary',
    'pre',
    'code',
    'ul',
    'ol',
    'li',
    'dd',
    'dl',
    'table',
    'th',
    'tr',
    'td',
    'thead',
    'tbody',
    'tfood',
    'fieldset',
    'legend',
    'figure',
    'figcaption',
    'img',
    'picture',
    'video',
    'audio',
    'source',
    'iframe',
    'progress',
    'br',
    'p',
    'hr',
    'label',
    'abbr',
    'a',
    'svg',
    'meta',
    'head',
    'title',
    'link',
    'script',
    'html',
    'body'
  ],
  allowedAttributes: {
    h1: ['id'],
    h2: ['id'],
    h3: ['id'],
    h4: ['id'],
    h5: ['id'],
    h6: ['id'],
    a: ['href', 'target', 'title'],
    abbr: ['title'],
    progress: ['value', 'max'],
    img: ['src', 'srcset', 'alt', 'title'],
    picture: ['media', 'srcset'],
    video: ['controls', 'width', 'height', 'autoplay', 'muted', 'loop', 'src'],
    audio: ['controls', 'width', 'height', 'autoplay', 'muted', 'loop', 'src'],
    source: ['src', 'srcset', 'data-srcset', 'type', 'media', 'sizes'],
    iframe: ['src', 'frameborder', 'height', 'width', 'scrolling', 'allow'],
    svg: ['width', 'height'], // sanitize-html does not support svg fully yet,
    meta: ['content', 'property', 'name'],
    link: ['href', 'rel'],
    script: [
      {
        name: 'type',
        values: ['application/ld+json']
      }
    ]
  },
  exclusiveFilter: (frame) =>
    frame.tag === 'script' && frame.attribs['type'] !== 'application/ld+json'
}

export default (html: string, options?: sanitize.IOptions) =>
  sanitize(html, { ...defaultSanitizeOptions, ...options })
