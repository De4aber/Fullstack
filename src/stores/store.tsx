import TestStore from "./testStore";
import React, {createContext, useContext} from "react";



type Store = {
    testStore: TestStore;

}

export const store: Store = {
    testStore: new TestStore(),
};

export const StoreContext = createContext<Store>({} as Store);

export function useStore() {
    return useContext(StoreContext);
}

