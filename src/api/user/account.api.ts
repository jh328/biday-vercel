// src/api/account/account.api.ts
import { api } from "../request";
import { strategy } from "../api.strategy";
import {AccountModel} from "@/model/user/account.model";
import Cookies from "js-cookie";
import {UserInfo} from "@/model/user/userInfo.model";
import {RequestOptions} from "@/model/api/RequestOptions";

// 계좌 조회 (GET 요청)
const findById = async (options: RequestOptions<null>): Promise<AccountModel> => {

    return  await strategy.GET(`${api.account}`, options);

};



// 계좌 등록 (POST 요청)
const save = async (options: RequestOptions<AccountModel>): Promise<AccountModel> => {
    return await strategy.POST(`${api.account}/save`, options);
};

export const accountAPI = {
    findById,
    save,
};