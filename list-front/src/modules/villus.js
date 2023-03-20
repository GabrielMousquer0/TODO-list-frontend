import { createClient } from "villus";
const PORT = import.meta.env.VITE_SOME_KEY

const villus = createClient({
    url: `${PORT}`
});

export { villus }