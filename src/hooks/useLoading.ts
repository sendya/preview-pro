import { ref, inject, provide } from 'vue';

const INJECT_LOADING_KEY = Symbol('loading_store');

export const createLoading = (v = false) => {
  const loading = ref<boolean>(v);
  const change = (bool: boolean) => {
    loading.value = bool;
  };
  provide(INJECT_LOADING_KEY, loading);
  return [loading, change];
};

export const useLoading = () => {
  return inject(INJECT_LOADING_KEY);
};
