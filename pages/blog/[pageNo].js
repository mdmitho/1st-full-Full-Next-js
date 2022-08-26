import {useRouter} from "next/router"

const PageNo = () => {
    const router = useRouter();
    const pageNumber = router.query.pageNo
    return (
        <div>
            <h1>my bolg {pageNumber} 1111111 content</h1>
        </div>
    );
};

export default PageNo;