// Kho kiến thức (Knowledge Base) về Đờn ca tài tử Nam Bộ dùng cho "Nghệ nhân AI".
// AI được yêu cầu ưu tiên tuyệt đối nội dung trong file này.
// Hãy cập nhật, kiểm chứng và bổ sung nội dung theo nguồn chính thống trước khi trình bày chính thức.

export const SYSTEM_INSTRUCTION = `Bạn là "Nghệ nhân AI", trợ lý giáo dục về Nghệ thuật Đờn ca tài tử Nam Bộ.

Bạn là một nhân vật AI, KHÔNG phải nghệ nhân thật.

Nhiệm vụ của bạn là hỗ trợ sinh viên, người trẻ và khách tham quan tìm hiểu Đờn ca tài tử Nam Bộ.

Ưu tiên tuyệt đối thông tin từ KNOWLEDGE BASE do hệ thống cung cấp.

Quy định khi trả lời:
1. Độ dài lý tưởng là khoảng 100–200 từ (khi dữ liệu cho phép).
2. Bố cục trả lời bắt buộc phải theo cấu trúc sau:
   - Trả lời trực tiếp vào câu hỏi trước.
   - Sau đó có 2–4 ý giải thích (bằng bullet point hoặc in đậm).
   - Cuối cùng gợi ý một câu hỏi liên quan để người dùng khám phá thêm.
3. Khi phù hợp, hãy bắt đầu hoặc lồng ghép câu "Theo dữ liệu của Bảo tàng số..." để thể hiện tính xác thực.
4. KHÔNG được bịa thông tin ngoài Knowledge Base (ví dụ: mốc thời gian, tên nghệ nhân, bài bản, sự kiện, v.v).
5. Nếu thiếu dữ liệu để trả lời đúng trọng tâm câu hỏi, BẮT BUỘC CHỈ trả lời duy nhất một câu: "Dữ liệu hiện tại của Bảo tàng số chưa đủ để trả lời chính xác câu hỏi này." và KHÔNG ĐƯỢC sinh thêm bất kỳ nội dung, giải thích hay gợi ý nào khác.
6. Định dạng Markdown để câu trả lời sinh động, in đậm các từ khóa quan trọng.

Phong cách: thân thiện, dễ hiểu, có tính giáo dục, súc tích. AI hỗ trợ việc học tập nhưng không thay thế nghệ nhân thật.`

export const KNOWLEDGE_BASE = `
== TỔNG QUAN ==
- Đờn ca tài tử Nam Bộ là loại hình nghệ thuật dân gian đặc trưng của vùng Nam Bộ, Việt Nam, kết hợp giữa "đờn" (chơi nhạc cụ) và "ca" (hát).
- Đây là loại hình sinh hoạt âm nhạc mang tính cộng đồng, thường được trình diễn trong không gian gần gũi như nhà, sân vườn, dịp lễ hội, họp mặt.
- Chữ "tài tử" hàm ý người chơi vì đam mê, tài năng, không nặng tính chuyên nghiệp biểu diễn thương mại.

== UNESCO ==
- Đờn ca tài tử Nam Bộ đã được UNESCO ghi danh là Di sản văn hóa phi vật thể đại diện của nhân loại vào năm 2013.

== NHẠC CỤ TIÊU BIỂU ==
- Các nhạc cụ thường gặp: đàn tranh, đàn kìm (đàn nguyệt), đàn cò (đàn nhị), đàn bầu, sáo trúc, guitar phím lõm, song lang.
- Đàn kìm (đàn nguyệt) có 2 dây, thường được xem là nhạc cụ nòng cốt, giữ nhịp và dẫn dắt trong hòa tấu.
- Đàn cò (đàn nhị) có 2 dây, dùng cung vĩ để kéo, tạo ra âm thanh mềm mại, da diết, rất gần với giọng hát con người.
- Đàn tranh thường có 16 dây (đàn thập lục), âm thanh trong trẻo, réo rắt.
- Song lang là nhạc cụ gõ nhỏ bằng gỗ dùng để giữ và điểm nhịp.
- Đàn bầu chỉ có một dây, tạo âm bằng bồi âm, cho màu sắc trữ tình đặc trưng.
- Guitar phím lõm là cây guitar (thường có 6 dây) được cải biến, khoét lõm phím để nhấn nhá, luyến láy theo phong cách truyền thống — ví dụ tiêu biểu cho sự tiếp biến văn hóa.

== HỆ THỐNG 20 BÀI BẢN TỔ ==
- Đờn ca tài tử có hệ thống "20 bài bản Tổ", được chia thành 4 nhóm hơi/điệu:
  1) 6 bài Bắc: sắc thái vui tươi, trong sáng, khỏe khoắn. Gồm: Lưu Thủy Trường, Phú Lục Chấn, Bình Bán Chấn, Cổ Bản, Xuân Tình, Tây Thi.
  2) 7 bài Lễ (còn gọi 7 bài Hạ / 7 bài Cò): sắc thái trang nghiêm, uy nghi. Gồm: Xàng Xê, Ngũ Đối Thượng, Ngũ Đối Hạ, Long Đăng, Long Ngâm, Vạn Giá, Tiểu Khúc.
  3) 3 bài Nam: sắc thái từ thanh thản đến buồn thương. Gồm: Nam Xuân (thanh thản, ung dung), Nam Ai (buồn thương, ai oán), Nam Đảo / Đảo Ngũ Cung (trang trọng, khỏe khoắn).
  4) 4 bài Oán: sắc thái buồn thương, ai oán, giàu tự sự. Gồm: Tứ Đại Oán, Phụng Hoàng, Giang Nam, Phụng Cầu.

== SẮC THÁI CÁC NHÓM ==
- Nhóm Bắc: vui, sáng, rộn ràng.
- Nhóm Lễ (Hạ): trang nghiêm, bề thế.
- Nhóm Nam: trữ tình, sâu lắng, đa sắc thái.
- Nhóm Oán: bi ai, oán trách, tự sự.

== PHÂN BIỆT VỚI CẢI LƯƠNG ==
- Đờn ca tài tử là loại hình sinh hoạt âm nhạc thính phòng, mang tính ngẫu hứng, tập trung vào đờn và ca trong không gian gần gũi.
- Cải lương là loại hình sân khấu kịch hát ra đời sau, có tuồng tích, nhân vật, diễn xuất, phục trang và dàn dựng sân khấu.
- Đờn ca tài tử được xem là một trong những nền tảng, cội nguồn quan trọng góp phần hình thành nghệ thuật cải lương.

== BẢO TỒN & VAI TRÒ CỦA CÔNG NGHỆ ==
- Việc bảo tồn có thể thực hiện qua: học và thực hành, truyền dạy cho thế hệ trẻ, tổ chức sinh hoạt câu lạc bộ, ghi âm - ghi hình tư liệu, số hóa kiến thức.
- Công nghệ và AI có thể hỗ trợ: số hóa tư liệu, tạo công cụ tra cứu, giúp giới trẻ dễ tiếp cận, tăng trải nghiệm tương tác, quảng bá di sản rộng rãi hơn.
- AI chỉ đóng vai trò hỗ trợ; nội dung chuyên môn cần được kiểm chứng bởi nghệ nhân, nhà nghiên cứu và nguồn chính thống.

== NGƯỜI TRẺ CÓ THỂ LÀM GÌ ==
- Tìm hiểu, lắng nghe và trân trọng loại hình này.
- Tham gia câu lạc bộ, lớp học, sinh hoạt cộng đồng.
- Lan tỏa trên mạng xã hội, sáng tạo nội dung số phù hợp.
- Ứng dụng công nghệ để lưu giữ và giới thiệu di sản.
`

export interface DemoAnswer {
  question: string
  answer: string
}

// Câu trả lời mẫu dùng cho DEMO MODE khi Gemini API gặp lỗi/mạng lỗi.
// LƯU Ý: Đây là nội dung FALLBACK DEMO cục bộ, KHÔNG phải phản hồi thật từ Gemini API.
export const DEMO_ANSWERS: DemoAnswer[] = [
  {
    question: 'Đờn ca tài tử là gì?',
    answer:
      'Đờn ca tài tử Nam Bộ là loại hình nghệ thuật dân gian đặc trưng của vùng Nam Bộ, kết hợp giữa "đờn" (chơi nhạc cụ) và "ca" (hát). Đây là sinh hoạt âm nhạc mang tính cộng đồng, thường diễn ra trong không gian gần gũi như nhà, sân vườn hay dịp lễ hội. Chữ "tài tử" hàm ý người chơi vì đam mê và tài năng, không nặng tính biểu diễn thương mại.',
  },
  {
    question: 'Đờn ca tài tử được UNESCO ghi danh khi nào?',
    answer:
      'Đờn ca tài tử Nam Bộ được UNESCO ghi danh là Di sản văn hóa phi vật thể đại diện của nhân loại vào năm 2013.',
  },
  {
    question: '20 bài bản Tổ được chia thành những nhóm nào?',
    answer:
      'Hệ thống 20 bài bản Tổ được chia thành 4 nhóm hơi/điệu:\n\n• 6 bài Bắc – vui tươi, trong sáng\n• 7 bài Lễ (Hạ) – trang nghiêm, uy nghi\n• 3 bài Nam – trữ tình, sâu lắng\n• 4 bài Oán – bi ai, tự sự',
  },
  {
    question: 'Guitar phím lõm có vai trò gì?',
    answer:
      'Guitar phím lõm là cây guitar được cải biến, khoét lõm phần phím để người chơi có thể nhấn nhá, luyến láy theo phong cách âm nhạc truyền thống Nam Bộ. Đây là ví dụ tiêu biểu cho sự tiếp biến văn hóa — đưa nhạc cụ phương Tây hòa vào không gian Đờn ca tài tử.',
  },
  {
    question: 'AI có thể hỗ trợ bảo tồn Đờn ca tài tử như thế nào?',
    answer:
      'AI và công nghệ số có thể hỗ trợ bảo tồn Đờn ca tài tử qua nhiều cách:\n\n• Số hóa tư liệu và kiến thức\n• Tạo công cụ tra cứu thuận tiện\n• Giúp giới trẻ dễ tiếp cận hơn\n• Tăng trải nghiệm tương tác\n• Quảng bá di sản rộng rãi\n\nTuy nhiên, AI chỉ đóng vai trò hỗ trợ; nội dung chuyên môn cần được kiểm chứng bởi nghệ nhân, nhà nghiên cứu và các nguồn chính thống.',
  },
]
