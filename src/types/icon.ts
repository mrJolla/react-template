export interface SpritesMap {
  'aside-menu':
    | 'bot'
    | 'exit'
    | 'home'
    | 'keys'
    | 'logs'
    | 'marketplace'
    | 'referral'
    | 'wallet';
  common:
    | 'br-cross'
    | 'br-trash'
    | 'loader'
    | 'rr-bell'
    | 'rr-coins'
    | 'rr-eye-crossed'
    | 'rr-eye'
    | 'rr-menu-burger'
    | 'rr-user'
    | 'sr-coins'
    | 'sr-eye'
    | 'sr-pencil';
  social: 'telegram';
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  'aside-menu': [
    'bot',
    'exit',
    'home',
    'keys',
    'logs',
    'marketplace',
    'referral',
    'wallet',
  ],
  common: [
    'br-cross',
    'br-trash',
    'loader',
    'rr-bell',
    'rr-coins',
    'rr-eye-crossed',
    'rr-eye',
    'rr-menu-burger',
    'rr-user',
    'sr-coins',
    'sr-eye',
    'sr-pencil',
  ],
  social: ['telegram'],
};
