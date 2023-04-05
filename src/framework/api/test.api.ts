import { TestData } from "@mock/data/test.mock.data";

export const testFetches = async (id?: string) => {
  return [...TestData];
};
export const testFetch = async (id?: number) => {
  if (!id) {
    return undefined;
  }
  return TestData.find((v) => v.id === id);
};
