declare module 'plugins/Plugin1';
declare module 'plugins/Plugin2';

declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: Scope };
type Factory = () => any;
type Scope = unknown;
type Container = {
  init(shareScope: Scope): void;
  get(module: string): Factory;
};
