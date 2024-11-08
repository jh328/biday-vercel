import Link from "next/link";

export default function InsertAuctionSuccessPage() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div>
                <div className="flex flex-col items-center space-y-8"> {/* 간격을 넓히기 위해 space-y-8로 변경 */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-28 w-28 text-green-600" fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <h1 className="text-4xl font-bold">경매 등록 완료</h1>
                    <p className="text-lg">경매가 성공적으로 등록되었습니다. 즐거운 BIDay 되세요!</p> {/* 메시지 크기를 크게 변경 */}
                    <div className="flex space-x-4">
                        <Link
                            className="inline-flex items-center rounded border border-blue-600 bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring"
                            href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-3 w-3" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
                            </svg>
                            <span className="text-sm font-medium">메인으로</span>
                        </Link>

                        <Link
                            className="inline-flex items-center rounded border border-green-600 bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring"
                            href="/account-order">
                            <span className="text-sm font-medium">등록된 경매 확인하기</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-3 w-3" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4-4 4m0-4H3"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}