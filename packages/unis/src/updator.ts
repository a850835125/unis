import { getCurrentComponentVode } from "./vode";

export function forceUpdator() {
  const currentVode = getCurrentComponentVode();
  return () => currentVode?.forceUpdate();
}

export function nextTickUpdator() {
  const currentVode = getCurrentComponentVode();
  return () => currentVode?.nextTickUpdate();
}
