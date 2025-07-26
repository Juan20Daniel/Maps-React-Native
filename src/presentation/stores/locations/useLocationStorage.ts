import { create } from "zustand/react";
import { Location } from "../../../infrastructure/interfaces/locations";
import { getCurrentLocatin } from "../../../actions/location/location";

interface LocationState {
    lastKnownLocation: Location|null;

    getLocation:() => Promise<Location|null>;
}

export const useLocationStorage = create<LocationState>()((set, get) => ({
    lastKnownLocation: null,
    getLocation: async () => {
        const location = await getCurrentLocatin();
        set({lastKnownLocation:location});
        return location
    },
}))