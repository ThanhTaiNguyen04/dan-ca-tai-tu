// Dữ liệu bài bản & làn điệu Đờn ca tài tử Nam Bộ.
// Hệ thống "20 bài bản Tổ" được chia thành 4 nhóm hơi/điệu: Bắc, Lễ (Hạ), Nam, Oán.
// Tên bài dựa trên hệ thống được lưu truyền phổ biến — hãy đối chiếu nguồn chính thống khi cần.

export interface RepertoirePiece {
  name: string
  description: string
  mood: string
  audio?: string
  youtubeUrl?: string
}

export interface RepertoireGroup {
  id: string
  name: string
  /** Tên gọi rút gọn để lọc */
  shortName: string
  subtitle: string
  intro: string
  /** Sắc thái âm nhạc chung của nhóm */
  mood: string
  pieces: RepertoirePiece[]
}

export const repertoireGroups: RepertoireGroup[] = [
  {
    id: 'bac',
    name: '6 bài Bắc',
    shortName: '6 bài Bắc',
    subtitle: 'Nhóm điệu Bắc',
    intro:
      'Nhóm bài Bắc thường mang tính chất vui tươi, trong sáng, nhịp điệu khỏe khoắn, thể hiện không khí rộn ràng, hân hoan.',
    mood: 'Vui tươi, trong sáng, khỏe khoắn',
    pieces: [
      { name: 'Lưu Thủy Trường', description: 'Một trong các bài Bắc tiêu biểu.', mood: 'Trang trọng, khoan thai', youtubeUrl: 'https://www.youtube.com/watch?v=Yj8aWNls2Rk' },
      { name: 'Phú Lục Chấn', description: 'Bài bản thuộc nhóm điệu Bắc.', mood: 'Vui tươi, linh hoạt', youtubeUrl: 'https://www.youtube.com/watch?v=j4zqsRLrNSk' },
      { name: 'Bình Bán Chấn', description: 'Bài bản thuộc nhóm điệu Bắc.', mood: 'Rộn ràng, nhịp nhàng', youtubeUrl: 'https://www.youtube.com/watch?v=cHxD9mHQIgI' },
      { name: 'Cổ Bản', description: 'Bài bản thuộc nhóm điệu Bắc.', mood: 'Trong sáng, khoan thai', youtubeUrl: 'https://www.youtube.com/watch?v=ARGVddvBUeU' },
      { name: 'Xuân Tình', description: 'Bài bản thuộc nhóm điệu Bắc.', mood: 'Tươi vui, phơi phới', youtubeUrl: 'https://www.youtube.com/watch?v=8NrtpIVGxFQ' },
      { name: 'Tây Thi', description: 'Bài bản thuộc nhóm điệu Bắc.', mood: 'Duyên dáng, mềm mại', youtubeUrl: 'https://www.youtube.com/watch?v=s2etckTiX10' },
    ],
  },
  {
    id: 'le',
    name: '7 bài Lễ / Hạ',
    shortName: '7 bài Lễ / Hạ',
    subtitle: 'Nhóm bài Lễ (Hạ)',
    intro:
      'Nhóm bài Lễ (còn gọi là 7 bài Hạ hay 7 bài Cò) mang tính chất trang nghiêm, thường gắn với không khí lễ nghi, uy nghi và bề thế.',
    mood: 'Trang nghiêm, uy nghi',
    pieces: [
      { name: 'Xàng Xê', description: 'Bài bản thuộc nhóm bài Lễ.', mood: 'Trang nghiêm', youtubeUrl: 'https://www.youtube.com/watch?v=w6GJaj4veHU' },
      { name: 'Ngũ Đối Thượng', description: 'Bài bản thuộc nhóm bài Lễ.', mood: 'Uy nghi, bề thế', youtubeUrl: 'https://www.youtube.com/watch?v=Tzuf8ZZ1X6c' },
      { name: 'Ngũ Đối Hạ', description: 'Bài bản thuộc nhóm bài Lễ.', mood: 'Trang trọng', youtubeUrl: 'https://www.youtube.com/watch?v=-Iwf-SchTEc' },
      { name: 'Long Đăng', description: 'Bài bản thuộc nhóm bài Lễ.', mood: 'Nghiêm trang', youtubeUrl: 'https://www.youtube.com/watch?v=4qp5cgTxH30' },
      { name: 'Long Ngâm', description: 'Bài bản thuộc nhóm bài Lễ.', mood: 'Sâu lắng, trang nghiêm', youtubeUrl: 'https://www.youtube.com/watch?v=p-GxMLQD6_g' },
      { name: 'Vạn Giá', description: 'Bài bản thuộc nhóm bài Lễ.', mood: 'Bề thế', youtubeUrl: 'https://www.youtube.com/watch?v=pXX0cX54rIY' },
      { name: 'Tiểu Khúc', description: 'Bài bản thuộc nhóm bài Lễ.', mood: 'Khoan thai', youtubeUrl: 'https://www.youtube.com/watch?v=8IDz6ochkSs' },
    ],
  },
  {
    id: 'nam',
    name: '3 bài Nam',
    shortName: '3 bài Nam',
    subtitle: 'Nhóm điệu Nam',
    intro:
      'Nhóm bài Nam có sắc thái đa dạng: từ thanh thản, ung dung đến buồn thương, ai oán, thể hiện chiều sâu tình cảm của người Nam Bộ.',
    mood: 'Thanh thản đến buồn thương, sâu lắng',
    pieces: [
      { name: 'Nam Xuân', description: 'Bài Nam mang sắc thái thanh thản, ung dung.', mood: 'Thanh thản, ung dung', youtubeUrl: 'https://www.youtube.com/watch?v=hl4bNFVUMn0' },
      { name: 'Nam Ai', description: 'Bài Nam mang sắc thái buồn thương, bi ai.', mood: 'Buồn thương, ai oán', youtubeUrl: 'https://www.youtube.com/watch?v=61Py5AOul9g' },
      {
        name: 'Nam Đảo',
        description: 'Bài Nam (còn gọi Đảo Ngũ Cung) với sắc thái trang trọng, mạnh mẽ hơn.',
        mood: 'Trang trọng, khỏe khoắn',
        youtubeUrl: 'https://www.youtube.com/watch?v=AC-JWXjSlFQ'
      },
    ],
  },
  {
    id: 'oan',
    name: '4 bài Oán',
    shortName: '4 bài Oán',
    subtitle: 'Nhóm điệu Oán',
    intro:
      'Nhóm bài Oán mang sắc thái buồn thương, ai oán, giàu tính tự sự — được xem là đặc trưng cho chiều sâu cảm xúc của Đờn ca tài tử.',
    mood: 'Bi ai, oán trách, tự sự',
    pieces: [
      { name: 'Tứ Đại Oán', description: 'Bài Oán tiêu biểu, giàu cảm xúc.', mood: 'Bi ai, sâu lắng', youtubeUrl: 'https://www.youtube.com/watch?v=XAovQ8FPyu0' },
      { name: 'Phụng Hoàng', description: 'Bài bản thuộc nhóm điệu Oán.', mood: 'Buồn thương, tha thiết', youtubeUrl: 'https://www.youtube.com/watch?v=DOLReOXeDac' },
      { name: 'Giang Nam', description: 'Bài bản thuộc nhóm điệu Oán.', mood: 'Ai oán, trữ tình', youtubeUrl: 'https://www.youtube.com/watch?v=nO02_OmRgBM' },
      { name: 'Phụng Cầu', description: 'Bài bản thuộc nhóm điệu Oán.', mood: 'Da diết, tự sự', youtubeUrl: 'https://www.youtube.com/watch?v=82GVCg0Q4h4' },
    ],
  },
]

export function getGroupById(id: string): RepertoireGroup | undefined {
  return repertoireGroups.find((g) => g.id === id)
}
