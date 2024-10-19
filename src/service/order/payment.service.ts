import Cookies from "js-cookie";
import {paymentAPI} from "@/api/order/payment.api";
import {PaymentTempModel} from "@/model/order/paymentTemp.model";
import {PaymentConfirmModel} from "@/model/order/paymentConfirm.model";
import {PaymentModel} from "@/model/order/payment.model";

export async function savePaymentTemp(
    paymentTemp: PaymentTempModel
) {

    const userToken = Cookies.get('userToken');
    if (!userToken) throw new Error("유저토큰 없음");
    // TODO error enum

    const requestOptions = {
        data: paymentTemp,
        userToken: userToken,
    };

    try {
        return await paymentAPI.savePaymentTemp(requestOptions);
    } catch (error) {
        console.log(error);
        throw new Error();
    }
}



export async function fetchAllPaymentByUserId(): Promise<PaymentModel[]> {
    try {
        // 클라이언트에서 쿠키 갖고 오기
        const userToken = Cookies.get('userToken');

        if (!userToken) {
            throw new Error("userToken 갖고 올 수 없습니다.")
        }

        const options = {
            userToken : userToken, // 쿠키에서 가져온 userToken을 사용
        }

        const paymentArray: PaymentModel[] = await paymentAPI.findByUser(options);

        if (paymentArray.length === 0) {
            console.log("결제 찾을 수 없습니다.");
            return [];
        }
        return paymentArray
    } catch (error){
        console.error("fetchAllPaymentByUserId 에러 발생", error);
        throw new Error("결제를 가져오는 중 에러가 발생했습니다.");
    }
}

export async function confirmPayment(payment: PaymentConfirmModel) {
    const userToken = Cookies.get("userToken");
    if (!userToken) throw new Error("유저토큰 없음");
    // TODO error enum

    const options = {
        userToken: userToken,
        data: payment,
    }

    try {
        return await paymentAPI.savePayment(options);
    } catch (error) {

    }
}