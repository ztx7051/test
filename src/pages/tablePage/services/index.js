import { get } from "@/utils/resquest";

export const getList = () => get("/api/list");

export const getTitleId = (options) => get("/api/listId", {}, options);

export const getTitle = (options) => get("/api/listTitle", {}, options);
