// Shim de compatibilidade.
// O @splinetool/loader importa `mergeBufferGeometries` de
// three/examples/jsm/utils/BufferGeometryUtils.js — nome removido no three >= r151
// (passou a se chamar `mergeGeometries`). Aqui reexportamos o módulo real e
// recriamos o nome antigo. O import usa caminho relativo a node_modules para
// NÃO bater no alias do vite.config (que redireciona o specifier "three/...").
export * from "../node_modules/three/examples/jsm/utils/BufferGeometryUtils.js";
import { mergeGeometries } from "../node_modules/three/examples/jsm/utils/BufferGeometryUtils.js";
export const mergeBufferGeometries = mergeGeometries;
