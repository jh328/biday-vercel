// src/app/page.tsx (서버 컴포넌트)
import ClientComponent from './client-component'; // 클라이언트 컴포넌트 import
import {cookies, headers} from 'next/headers';
import TokenManager from "@/components/TestToken";
import {SearchFilter} from "@/model/product/product.model";

export default function PageHome({params}: {params:{filter:string}}) {
    // 서버 사이드에서 Authorization 헤더 가져오기
    const cookieStore = cookies();
    const authorizationToken = cookieStore.get('token')?.value || '';
    /*const searchFilter = { category: 'all' }; // 기본 카테고리 설정
    const products = await fetchProducts(searchFilter); // 서버에서 상품 데이터를 미리 불러옴
*/

    return (
        <div>
            <h2>{params.filter}카테코리의 상품 목록</h2>
            <ClientComponent authorizationToken={authorizationToken} />
            <TokenManager />
        </div>
    );
}
