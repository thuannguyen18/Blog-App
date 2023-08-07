import { Link } from "react-router-dom";
import UserAvatar from "components/user/UserAvatar";

export default function UserArticle() {
    return (
        <article className="md:col-span-1">
            <Link to={``}>
                <img className="rounded object-cover w-full h-38 lg:h-58" src={`http://localhost:3500/assets/${"po1.png"}`} alt="thumbnail" />
            </Link>
            <div className="">
                <Link to={``}>
                    <h2 className="font-semibold mt-2 lg:text-lg">9toTalk #29: Làm sao để giáo dục không trở thành một chiến trường?</h2>
                </Link>
                <p className="paragraph-max-line text-sm mt-2">Tôi là con nhà giáo viên, thế nên từ bé cứ mỗi năm cứ đến ngày 20/11 tôi lại thấy từng lứa học sinh của mẹ đến chơi nhà mình. Tâm trạng...</p>
            </div>
            <div className="flex items-center justify-between mt-6">
                <span className="text-xs">28/07/2023</span>
                <span className="text-xs">Like 34</span>
            </div>
        </article>
    );
}