import { createClient } from "villus";

const villus = createClient({
    url: 'http://localhost:8080/'
});

export { villus }