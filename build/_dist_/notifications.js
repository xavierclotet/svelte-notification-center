import {writable} from "/web_modules/svelte/store.js";
const createStore = () => {
  const {subscribe, set, update} = writable([]);
  const dismiss = (message) => update((messages) => messages.filter((mess) => mess !== message));
  const add = (message) => update((messages) => [message, ...messages]);
  return {
    subscribe,
    add,
    init: set,
    dismiss,
    clear: () => set([])
  };
};
const center = createStore();
export {center};
