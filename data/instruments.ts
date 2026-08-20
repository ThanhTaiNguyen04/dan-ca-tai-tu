// Dữ liệu nhạc cụ Đờn ca tài tử Nam Bộ.
// Nội dung mang tính giới thiệu tổng quát. Hãy cập nhật/bổ sung khi có nguồn chính thống.
// Ảnh minh họa nằm trong /public/images/instruments/ — có thể thay bằng ảnh thật.

export interface Instrument {
  id: string
  name: string
  /** Tên gọi khác (nếu có) */
  alias?: string
  image: string
  /** Ảnh phụ ghép cặp (dành cho đàn dáng dọc để hiển thị 2 ảnh 50/50) */
  secondaryImage?: string
  /** Vị trí focus của ảnh khi dùng object-cover (vd: 'object-bottom') */
  imagePosition?: string
  /** Đường dẫn file audio minh họa, đặt trong /public/audio/ nếu có */
  audio?: string
  /** Giới thiệu chung */
  intro: string
  /** Đặc điểm âm thanh */
  sound: string
  /** Vai trò trong Đờn ca tài tử */
  role: string
  /** Kỹ thuật biểu diễn tiêu biểu */
  technique: string
  /** Gallery ảnh nhỏ (đường dẫn) */
  gallery: string[]
}

export const instruments: Instrument[] = [
  {
    id: 'dan-tranh',
    name: 'Đàn tranh',
    alias: 'Thập lục',
    image: '/images/instruments/dan-tranh.png',
    intro:
      'Đàn tranh là nhạc cụ dây gảy có thân dài, mặt đàn cong, với hệ thống nhạn (con ngựa) di động để chỉnh cao độ. Đây là một trong những nhạc cụ quen thuộc và giàu biểu cảm của Đờn ca tài tử Nam Bộ.',
    sound:
      'Âm sắc trong trẻo, ngân vang, giàu khả năng luyến láy và nhấn nhá, phù hợp diễn tả nhiều sắc thái tình cảm.',
    role:
      'Thường giữ vai trò giai điệu, tô điểm và đối đáp với các nhạc cụ khác trong ban nhạc tài tử.',
    technique:
      'Kỹ thuật tay phải gảy dây, tay trái nhấn – rung – mổ trên dây để tạo hoa mỹ và các chữ nhạc đặc trưng.',
    gallery: ['/images/instruments/dan-tranh.png'],
  },
  {
    id: 'dan-kim',
    name: 'Đàn nguyệt',
    alias: 'Đàn kìm',
    image: '/images/instruments/dan-nguyet-1.jpg',
    secondaryImage: '/images/instruments/dan-nguyet-2.jpg',
    imagePosition: 'object-bottom',
    intro:
      'Đàn nguyệt (đàn kìm) có bầu đàn tròn dẹt, cần đàn dài với các phím cao, thường dùng hai dây. Đây là nhạc cụ được xem là trụ cột trong nhiều ban Đờn ca tài tử.',
    sound:
      'Âm thanh ấm, đầy đặn, có chiều sâu; khả năng nhấn nhá tốt nhờ phím đàn cao.',
    role:
      'Thường được coi là nhạc cụ nòng cốt, giữ nhịp và dẫn dắt trong hòa tấu tài tử.',
    technique:
      'Kết hợp gảy và nhấn phím để tạo độ ngân, luyến; kỹ thuật nhấn cho phép biến hóa cao độ linh hoạt.',
    gallery: ['/images/instruments/dan-nguyet-1.jpg'],
  },
  {
    id: 'dan-co',
    name: 'Đàn cò',
    alias: 'Đàn nhị',
    image: '/images/instruments/dan_co.png',
    secondaryImage: '/images/instruments/dan-co-2.jpg',
    imagePosition: 'object-bottom',
    intro:
      'Đàn cò (đàn nhị) là nhạc cụ dây kéo có hai dây, bầu cộng hưởng nhỏ và cần đàn dài, dùng vĩ (cung) kéo để tạo âm.',
    sound:
      'Âm thanh mềm mại, réo rắt, gần với giọng người, giàu khả năng ngân và luyến.',
    role:
      'Góp phần tạo màu sắc trữ tình và nâng đỡ giai điệu trong ban nhạc tài tử.',
    technique:
      'Tay phải điều khiển vĩ kéo, tay trái bấm và nhấn trên dây để tạo cao độ và sắc thái.',
    gallery: ['/images/instruments/dan_co.png'],
  },
  {
    id: 'dan-bau',
    name: 'Đàn bầu',
    alias: 'Độc huyền cầm',
    image: '/images/instruments/dan_bau.jpg',
    intro:
      'Đàn bầu là nhạc cụ độc đáo chỉ có một dây, kết hợp thân đàn dài và cần đàn mềm gắn bầu cộng hưởng, tạo âm chủ yếu bằng bồi âm (âm bội).',
    sound:
      'Âm sắc mềm mại, ngọt ngào, có thể uốn lượn cao độ rất tinh tế, gần với chất giọng ngâm nga.',
    role:
      'Mang lại màu sắc trữ tình đặc trưng, thường điểm xuyết và tạo chiều sâu cảm xúc.',
    technique:
      'Tay phải gảy tạo bồi âm, tay trái điều khiển cần đàn để uốn, rung và luyến cao độ.',
    gallery: ['/images/instruments/dan_bau.jpg'],
  },
  {
    id: 'sao-truc',
    name: 'Sáo trúc',
    image: '/images/instruments/Sao-truc.jpg',
    intro:
      'Sáo trúc là nhạc cụ hơi làm từ ống trúc, có các lỗ bấm, người chơi thổi ngang để tạo âm.',
    sound:
      'Âm thanh trong, bay bổng, khả năng ngân dài và luyến láy mềm mại.',
    role:
      'Bổ sung màu sắc bay bổng, đối đáp và hòa quyện cùng các nhạc cụ dây trong ban tài tử.',
    technique:
      'Kỹ thuật điều khiển hơi, láy lưỡi và rung hơi để tạo hoa mỹ cho giai điệu.',
    gallery: ['/images/instruments/Sao-truc.jpg'],
  },
  {
    id: 'guitar-phim-lom',
    name: 'Guitar phím lõm',
    alias: 'Lục huyền cầm phím lõm',
    image: '/images/instruments/guitar-phim-lom.png',
    intro:
      'Guitar phím lõm là cây guitar được cải biến với phần phím khoét lõm sâu, cho phép nhấn nhá và luyến cao độ theo phong cách âm nhạc truyền thống Nam Bộ.',
    sound:
      'Âm thanh vừa hiện đại vừa mang chất luyến láy đặc trưng, khả năng nhấn sâu tạo các chữ nhạc mềm mại.',
    role:
      'Là ví dụ tiêu biểu cho sự tiếp biến, đưa nhạc cụ phương Tây vào không gian Đờn ca tài tử.',
    technique:
      'Nhờ phím lõm, người chơi có thể nhấn dây xuống sâu để tạo hiệu quả luyến, rung gần với các nhạc cụ dân tộc.',
    gallery: ['/images/instruments/guitar-phim-lom.png'],
  },
  {
    id: 'song-lang',
    name: 'Song lang',
    image: '/images/instruments/song_lang.jpg',
    intro:
      'Song lang là nhạc cụ gõ nhỏ dùng để giữ nhịp, thường gồm một khối gỗ với thanh gõ bật, tạo tiếng "cốc" điểm nhịp.',
    sound:
      'Tiếng gõ ngắn, gọn, rõ ràng, dùng để định vị nhịp và câu nhạc.',
    role:
      'Giữ vai trò điểm nhịp (song lang), giúp các nhạc công và người ca giữ đúng khuôn nhịp.',
    technique:
      'Thường điều khiển bằng chân hoặc tay để gõ đúng vào các điểm nhịp quan trọng của bài.',
    gallery: ['/images/instruments/song_lang.jpg'],
  },
]

export function getInstrumentById(id: string): Instrument | undefined {
  return instruments.find((i) => i.id === id)
}
