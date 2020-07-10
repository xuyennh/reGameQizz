const data = [
  {
    id: 1,
    level: "easy",
    quizze: {
      question: "Đâu là tên một bãi biển ở Quảng Bình?",
      answers: [
        {
          value: "A: Đá Lăn",
          name: "a",
          isCorrect: false,
        },
        {
          value: "B: Đá Chạy",
          name: "b",
          isCorrect: false,
        },
        {
          value: "C: Đá Nhảy",
          name: "c",
          isCorrect: true,
        },
        {
          value: "D: Đá Bò",
          name: "d",
          isCorrect: false,
        },
      ],
      score: 200,
    },
  },
  {
    id: 2,
    level: "easy",
    quizze: {
      question: "Thơ Hai-Cư là thể thơ truyển thống của nước nào?",
      answers: [
        { value: "A: Hàn Quốc", name: "a", isCorrect: false },
        { value: "B: Nhật Bản", name: "b", isCorrect: true },
        { value: "C: Triều Tiên", name: "c", isCorrect: false },
        { value: "D: Mông Cổ", name: "d", isCorrect: false },
      ],
      score: 200,
    },
  },
  {
    id: 3,
    level: "easy",
    quizze: {
      question: "Đâu là tên một loại bánh Huế??",
      answers: [
        { value: "A: Khoái", name: "a", isCorrect: true },
        { value: "B: Sướng", name: "b", isCorrect: false },
        { value: "C: Thích", name: "c", isCorrect: false },
        { value: "D: Vui", name: "d", isCorrect: false },
      ],
      score: 200,
    },
  },
  {
    id: 4,
    level: "easy",
    quizze: {
      question: "Nhạc sĩ nào là người sáng tác ca khúc Cây Đàn Sinh Viên?",
      answers: [
        { value: "A: Bảo Chấn", name: "a", isCorrect: false },
        { value: "B: Trịnh Công Sơn", name: "b", isCorrect: false },
        { value: "C: Trần Tiến", name: "c", isCorrect: false },
        { value: "D: Quốc An", name: "d", isCorrect: true },
      ],
      score: 500,
    },
  },
  {
    id: 5,
    level: "easy",
    quizze: {
      question: "Bộ phim Chị Dậu được chuyển thể từ tác phẩm nào?",
      answers: [
        { value: "A: Người mẹ cầm súng", name: "a", isCorrect: false },
        { value: "B: Vợ chồng A Phủ", name: "b", isCorrect: false },
        { value: "C: Tuổi thơ dữ dội", name: "c", isCorrect: false },
        { value: "D: Tắt đèn", name: "d", isCorrect: true },
      ],
      score: 500,
    },
  },
  {
    id: 6,
    level: "normal",
    quizze: {
      question: "Trên Nhấp Dưới Giật Là Đang Làm gì?",
      answers: [
        { value: "A: Chơi Bóng Bàn", name: "a", isCorrect: false },
        { value: "B: Đang Học", name: "b", isCorrect: false },
        { value: "C: Trộm Cắp", name: "c", isCorrect: false },
        { value: "D: Câu Cá", name: "d", isCorrect: true },
      ],
      score: 500,
    },
  },
  {
    id: 7,
    level: "easy",
    quizze: {
      question: "Con Đường Dài Nhất Là Con Đường Nào?",
      answers: [
        { value: "A: Đường Đời", name: "a", isCorrect: true },
        {
          value: "B: Đường Đi Nước Ngoài",
          name: "b",
          isCorrect: false,
        },
        { value: "C: Đường Đèo", name: "c", isCorrect: false },
        { value: "D: Đường Đi", name: "d", isCorrect: false },
      ],
      score: 200,
    },
  },
  {
    id: 8,
    level: "easy",
    quizze: {
      question: "Con gì đầu dê mình ốc?",
      answers: [
        { value: "A: Con Ốc", name: "a", isCorrect: false },
        { value: "B: Con Mương", name: "b", isCorrect: false },
        { value: "C: Con Đường", name: "c", isCorrect: false },
        { value: "D: Con Dốc", name: "d", isCorrect: true },
      ],
      score: 200,
    },
  },
  {
    id: 9,
    level: "easy",
    quizze: {
      question: "Cái gì của chồng mà vợ thích cầm nhất?",
      answers: [
        { value: "A: Tiền", name: "a", isCorrect: true },
        { value: "B: Sách", name: "b", isCorrect: false },
        { value: "C: Tay", name: "c", isCorrect: false },
        { value: "D: Nhẫn", name: "d", isCorrect: false },
      ],
      score: 200,
    },
  },
  {
    id: 10,
    level: "hard",
    quizze: {
      question: "Giải Grand Slam đầu tiên trong năm là giải nào?",
      answers: [
        { value: "A: Austrlia mở rộng", name: "a", isCorrect: true },
        { value: "B: Wimbledon", name: "b", isCorrect: false },
        { value: "C: Roland Garos", name: "c", isCorrect: false },
        { value: "D: Mỹ mở rộng", name: "d", isCorrect: false },
      ],
      score: 1000,
    },
  },
  {
    id: 11,
    level: "hard",
    quizze: {
      question: "AFC Asian Cup 2011 được tổ chức tại quốc gia nào?",
      answers: [
        { value: "A: Qatar", name: "a", isCorrect: true },
        { value: "B: Hàn Quốc", name: "b", isCorrect: false },
        { value: "C: Nhật Bản", name: "c", isCorrect: false },
        { value: "D: Iraq", name: "d", isCorrect: false },
      ],
      score: 1000,
    },
  },
  {
    id: 12,
    level: "normal",
    quizze: {
      question: "Sông Bến Hải và sông Thạch Hãn nằm ở tỉnh nào?",
      answers: [
        { value: "A: Quảng Bình", name: "a", isCorrect: false },
        { value: "B: Quảng Ninh", name: "b", isCorrect: false },
        { value: "C: Quảng Trị", name: "c", isCorrect: true },
        { value: "D: Quảng Ngãi", name: "d", isCorrect: false },
      ],
      score: 500,
    },
  },
  {
    id: 13,
    level: "hard",
    quizze: {
      question: "Đại Ngu là quốc hiệu của triều đại nào?",
      answers: [
        { value: "A: Triều Ngô", name: "a", isCorrect: false },
        { value: "B: Triều Hồ", name: "b", isCorrect: true },
        { value: "C: Các chúa Nguyễn", name: "c", isCorrect: false },
        { value: "D: Nhà Tây Sơn", name: "d", isCorrect: false },
      ],
      score: 1000,
    },
  },
  {
    id: 14,
    level: "normal",
    quizze: {
      question:
        "Vườn quốc gia nào hiện không nằm trong danh sách Vườn di sản ASEAN?",
      answers: [
        { value: "A:  Vườn quốc gia Kon Ka Kinh", name: "a", isCorrect: false },
        { value: "B: Vườn quốc gia Tam Đảo", name: "b", isCorrect: true },
        { value: "C: Vườn quốc gia Chư Mom Ray", name: "c", isCorrect: false },
        { value: "D: Vườn quốc gia Bái Tử Long", name: "d", isCorrect: false },
      ],
      score: 1000,
    },
  },
  {
    id: 15,
    level: "normal",
    quizze: {
      question:
        "Hoa hậu Hòa bình Quốc tế 2017 đã được tổ chức tại quốc gia nào?",
      answers: [
        { value: "A: Thái Lan", name: "a", isCorrect: false },
        { value: "B: Việt Nam", name: "b", isCorrect: true },
        { value: "C: Lào", name: "c", isCorrect: false },
        { value: "D: Campuchia", name: "d", isCorrect: false },
      ],
      score: 500,
    },
  },
  {
    id: 16,
    level: "easy",
    quizze: {
      question:
        "Lễ hội đua bò bảy núi là lễ hội đặc sắc của dân tộc nào sau đây?",
      answers: [
        { value: "A: Thái", name: "a", isCorrect: false },
        { value: "B: Chăm", name: "b", isCorrect: false },
        { value: "C: Tày", name: "c", isCorrect: false },
        { value: "D: Khmer", name: "d", isCorrect: true },
      ],
      score: 200,
    },
  },
  {
    id: 17,
    level: "easy",
    quizze: {
      question: "Trong các cây cầu sau, cầu nào là cầu xoay?",
      answers: [
        { value: "A: Cầu Thanh Trì", name: "a", isCorrect: false },
        { value: "B: Cầu Thị Nại", name: "b", isCorrect: false },
        { value: "C: Cầu Sông Hàn", name: "c", isCorrect: true },
        { value: "D: Cầu Cần Thơ", name: "d", isCorrect: false },
      ],
      score: 200,
    },
  },
  {
    id: 18,
    level: "easy",
    quizze: {
      question: "Các vua Hùng đặt quốc hiệu nước ta là gì?",
      answers: [
        { value: "A: Văn Lang", name: "a", isCorrect: true },
        { value: "B: Âu Lạc", name: "b", isCorrect: false },
        { value: "C: Vạn Xuân", name: "c", isCorrect: false },
        { value: "D: Đại Việt", name: "d", isCorrect: false },
      ],
      score: 300,
    },
  },
  {
    id: 19,
    level: "easy",
    quizze: {
      question: "An Dương Vương đặt quốc hiệu nước ta là gì?",
      answers: [
        { value: "A: Âu Lạc", name: "a", isCorrect: true },
        { value: "B: Vạn Xuân", name: "b", isCorrect: false },
        { value: "C: Đại Cồ Việt", name: "c", isCorrect: false },
        { value: "D: Đại Việt", name: "d", isCorrect: false },
      ],
      score: 200,
    },
  },
];

export default data;
