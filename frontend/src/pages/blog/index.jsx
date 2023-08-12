import { Link } from "react-router-dom";
import { useGlobalContext } from "context/context";
import UserInfo from "components/user/UserInfo";
import image from "assets//images/testing.jpg"
import FormComment from "components/comment/CommentForm";

export default function Blog() {
    return (
        <div className="mt-20">
            <div className="container mx-auto px-4 md:w-4/6 lg:w-3/6">
                {/* USER AND BLOG INFO */}
                <div className="mb-4">
                    <Link className="text-sm hover:underline">Quan điểm - Tranh luận</Link>
                    <h1 className="text-4xl lg:text-5xl lg:leading-normal font-semibold my-2">[Tập hiểu sâu]: Vì sao Bạn luôn KHÔNG ỔN?</h1>
                    <p>I’m OK - You’re OK, một tựa sách dành cho những ai luôn thấy bản thân Không-Ổn. Đặc biệt, với những ai đã trải qua thời gian tìm kiếm...</p>
                    <UserInfo />
                </div>
                {/* PICTURE */}
                <img className="rounded w-full" src={image} alt="image" />
                {/* CONTENTS */}
                <div className="mt-4">
                    <h3 className="heading-per-line semibold text-2xl font-bold">1- Một quyển sách khó:</h3>
                    <p className="paragraph-per-line text-lg">Sơ lược về khởi nguồn, những năm 1950 tại Mỹ, Eric Berne - một Tiến sĩ trong lĩnh vực Tâm thần học người Canada đã thất vọng về các kỹ thuật trị liệu tâm lý đang thịnh hành lúc bấy giờ vì nhận ra nó không giúp ích nhiều cho bệnh nhân. Các liệu pháp đó chỉ mô tả được triệu chứng nhưng không giải thích được nguồn gốc “vì sao tôi có chứng rối loạn lo âu này, vì sao tôi có chứng ám ảnh này,...” một cách trực quan, cụ thể. Năm 1957, Eric Berne quyết định phát triển học thuyết của riêng mình, phân tích tương giao (transactional analysis), lời giải đáp cho những câu hỏi “vì sao”. Quyển sách “Games people play” ông viết về học thuyết này đã phát hành thành công vượt bậc trên toàn thế giới. Tuy nhiên, sách vẫn còn nhiều biệt ngữ kỹ thuật, gây trở ngại khó đọc với nhiều người.</p>
                    <p className="paragraph-per-line text-lg">I’m OK – You’re OK được chấp bút bởi Tiến sĩ Tâm thần học Thomas Harris, người học trò cùng tuổi của Eric Berne. Thomas Harris đã rất giúp đỡ chúng ta trong việc viết lại học thuyết phân tích tương giao theo “kiểu ngôn ngữ mà ai cũng có thể hiểu và ứng dụng được”. Sách xuất bản lần đầu tại Mỹ năm 1969, Top #1 best seller New York Times năm 1972. Đến nay, sách đã được dịch ra hơn 20 thứ tiếng khác nhau, với hơn 15 triệu bản in được phát hành trên khắp các châu lục. </p>
                    <p className="paragraph-per-line text-lg">Khi chuyển ngữ sang tiếng Việt, sách được dịch bởi nhóm dịch giả có chuyên môn cao trong ngành Tâm lý Lâm sàng, bản in cuối cùng được hiệu đính bởi Bác sĩ Nguyễn Minh Tiến, một bác sĩ nổi tiếng trong chuyên khoa Tâm thần - Tâm lý tại Việt Nam. Chất lượng được bảo chứng là thế, nhưng đây không phải là một quyển sách nổi tiếng tại thị trường này. Phần vì nội dung khá khó tiếp cận với thị hiếu chung của bạn đọc, phần vì bản thân sách không được PR rầm rộ. Nhưng tôi tin đây là một quyển sách đặc biệt, được dành riêng cho những ai đang thật sự cần đến nó, “người cất công đi tìm đáp án, sẽ tìm được đáp án”.</p>
                    <p className="paragraph-per-line text-lg">Bây giờ chúng ta sẽ cùng vào nội dung!</p>
                    <h3 className="heading-per-line semibold text-2xl font-bold">2- Cảm giác “sống lại” và cảm giác “nhớ lại”:</h3>
                    <p className="paragraph-per-line text-lg">Chắc hẳn bạn từng bất chợt bắt gặp một mùi hương, một âm thanh mang đến cho bản thân sự thoải mái dễ chịu tột cùng. Đó là cảm giác “sống lại” một điều gì đó tốt đẹp trong quá khứ. Giả thuyết khi nhỏ bạn đã ngửi được mùi hương hay nghe được âm thanh đó khi đang được nằm ấm áp trong vòng tay bảo bọc của mẹ. Ký ức đó theo bạn mãi dù bạn không thể nhớ ra được nó.</p>
                    <p className="paragraph-per-line text-lg">Nếu cố gắng (và “may mắn”) nhớ ra được nguồn gốc của ký ức này, lúc này bạn sẽ trải qua cảm giác “nhớ lại”. Lần này bạn vẫn có cảm xúc, nhưng tất nhiên, “nhớ lại” lúc này không thể mang đến cho bạn cảm xúc mạnh như khi “sống lại” được.</p>
                    <p className="paragraph-per-line text-lg">Nếu cố gắng (và “may mắn”) nhớ ra được nguồn gốc của ký ức này, lúc này bạn sẽ trải qua cảm giác “nhớ lại”. Lần này bạn vẫn có cảm xúc, nhưng tất nhiên, “nhớ lại” lúc này không thể mang đến cho bạn cảm xúc mạnh như khi “sống lại” được.</p>
                    <p className="paragraph-per-line text-lg">Điều này cho thấy, quá khứ luôn đóng một vai trò quan trọng, chúng ta phần lớn sẽ không nhớ về ký ức, cảm giác đã từng tồn tại nhưng về cơ bản, chúng vẫn đang ngày đêm chi phối mô thức suy nghĩ, cảm xúc và hành vi của chúng ta ở thì hiện tại. </p>
                    <p className="paragraph-per-line text-lg">Nhưng mọi chuyện sẽ trở nên dễ thở hơn nếu chúng ta có khả năng quan sát, mang những gì đang hoạt động ở tầng “vô thức” lên được tầng “ý thức”. Hay nói đơn giản hơn, bạn tự nhiên sẽ đỡ đau hơn, nếu bạn biết vì sao bạn đau và thậm chí có thể hết đau hẳn nếu bạn chữa lành được nó.</p>
                </div>
                {/* COMMENTS */}
                <FormComment />
            </div>
        </div>
    )
}