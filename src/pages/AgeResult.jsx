import React from 'react';
import {Helmet} from "react-helmet";

const AgeResult = () => {
    return (
        <div>
            <Helmet>
                <title>건강나이타이틀</title>
                <meta name="description" content="건강나이결과description" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="건강나이결과페이지의 트위터 제목" />
                <meta name="twitter:description" content="건강나이결과페이지의 트위터 설명" />
                <meta name="twitter:image" content="https://kr.objectstorage.ncloud.com/synctree/datamarket/static/showroom/thumbnail/square_01.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="건강나이결과페이지의 OG타이틀" />
                <meta property="og:description" content="건강나이결과통페이지의 OG설명" />
                <meta property="og:image" content="https://kr.objectstorage.ncloud.com/synctree/datamarket/static/showroom/thumbnail/horizontal_01.png" />
            </Helmet>
            건강나이결과
        </div>
    );
};

export default AgeResult;
