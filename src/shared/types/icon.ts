export interface SpritesMap {
  common: 'cross-bold' | 'spinner';
  toast: 'error' | 'info' | 'success' | 'warning';
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  common: ['cross-bold', 'spinner'],
  toast: ['error', 'info', 'success', 'warning'],
};
