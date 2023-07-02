import React from 'react';
import {Helmet} from "react-helmet";

const IncomeResult = () => {
    return (
        <div>
            <Helmet>
                <title>소득금액타이틀</title>
                <meta name="description" content="소득금액description" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="소득금액결과페이지의 트위터 제목" />
                <meta name="twitter:description" content="소득금액페이지의 트위터 설명" />
                <meta name="twitter:image" content="https://kr.objectstorage.ncloud.com/synctree/datamarket/static/showroom/thumbnail/square_02.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="소득금액결과페이지의 OG타이틀" />
                <meta property="og:description" content="소득금액결과통페이지의 OG설명" />
                <meta property="og:image" content="https://kr.objectstorage.ncloud.com/synctree/datamarket/static/showroom/thumbnail/horizontal_02.png" />
            </Helmet>
            소득금액조회
        </div>
    );
};

export default IncomeResult;
