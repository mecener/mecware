import exampleSlice from "./slices/example";
import globalSlice from "./slices/global";
import modalSlice from "./slices/modal";

export default {
	...exampleSlice.actions,
	...modalSlice.actions,
	...globalSlice.actions,
};
